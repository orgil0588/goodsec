
import { DocumentDefinition } from "mongoose"
import GeneralInfoModel from "../models/general_info.model"
import MergedListModel from "../models/merged_list.model"
import StockListModel from "../models/stock_list.model"
import TradeHistoryModel from "../models/trade_history"
import CustomError from "../utils/error"

export async function topFour(findCode: number) {
  const result = await TradeHistoryModel.aggregate([
    {
      '$sort': {
        'date': -1
      }
    },
    {
      '$match': {
        code: findCode
      }
    },
    {
      $project: {
        _id: 0,
        open: 0,
        low: 0,
        high: 0,
        circulating_supply: 0,
        date: 0,
        __v: 0
      }
    },
    {
      '$limit': 1
    }, {
      '$lookup': {
        'from': 'generalinfos',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'info',
        'pipeline': [
          {
            $project: {
              _id: 0,
              code: 0,
              circulating_supply: 0,
              total_supply: 0,
              sector: 0,
              industry: 0,
              date: 0,
              is_top: 0,
            }
          },
        ]
      }
    }
  ])
  if (!result) {
    throw new CustomError('not found', 400)
  }
  return result

}

export async function marketInfo(findCode: number) {
  const result = await TradeHistoryModel.aggregate([
    {
      '$sort': {
        'date': -1
      }
    },
    {
      '$match': {
        code: findCode
      }
    },
    {
      '$limit': 1
    }, {
      '$lookup': {
        'from': 'financialreports',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'report'
      },
    },
    {
      '$lookup': {
        'from': 'stocklists',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'lists'
      }
    }
  ])
  if (!result) {
    throw new CustomError('not found', 400)
  }
  return result

}
export async function tickerList() {
  const result = await StockListModel.aggregate([
    {
      $project: {
        _id: 0,
        company: 0,

      }
    },
    {
      "$lookup": {
        'from': 'tradehistories',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'history',
        "pipeline": [
          {
            $sort: { date: -1 }
          },
          {
            $project: {
              _id: 0,
              ticker: 0,
              code: 0,
              open: 0,
              high: 0,
              low: 0,
              volume: 0,
              date: 0,
              __v: 0
            }
          },
          {
            $limit: 1
          }
        ]
      }
    }

  ])

  if (!result) {
    throw new CustomError('not found', 400)
  }
  if (result) {
    return result
  }

}



export async function marketList(query: any) {

  interface initQuery {
    class: any,
    sort: any,
    offset: any,

  }
  const initQuery: initQuery = {
    class: query.split('&').length > 0 ? query.split('&')[0].split('=')[1] : "all",
    sort: query.split('&').length > 1 ? query.split('&')[1].split('=')[1] : 'marketcap',
    offset: query.split('&').length > 2 ? parseInt(query.split('&')[2].split('=')[1]) : 20,
  }


  let dbQuery: any = {
    is_top: initQuery.class === 'top' ? true : { $exists: true, $ne: null },
    classification: initQuery.class === 'all' || initQuery.class === 'top' ? {
      begin: 0,
      end: 4
    } : initQuery.class > 3 ? {
      begin: 0,
      end: 4
    } : {
      begin: parseInt(initQuery.class) - 1,
      end: parseInt(initQuery.class) + 1
    },
    sort: initQuery.sort === 'code' || initQuery.sort === 'marketcap' || initQuery.sort === 'close' ? -1 : 1,
    // sort : 1,
    offset: {
      begin: initQuery.offset - 20,
      end: initQuery.offset
    }

  }

  const length = await MergedListModel.aggregate([
    {
      $match: {
        $and: [
          { is_top: dbQuery.is_top },
          { class: { $gt: dbQuery.classification.begin, $lt: dbQuery.classification.end } }
        ]
      }
    }, {
      $count: 'total'
    }
  ])
  const data = await MergedListModel.aggregate([
    {
      $match: {
        $and: [{ is_top: dbQuery.is_top }, { class: { $gt: dbQuery.classification.begin, $lt: dbQuery.classification.end } }
        ]
      }
    },
    {
      $sort: {
        ticker: 1
      }
    },
    { $skip: dbQuery.offset.begin },
    { $limit: 20 },
    {
      "$lookup": {
        'from': 'tradehistories',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'history',
        "pipeline": [
          {
            $sort: { date: -1 }
          },
          {
            $limit: 1
          },
          {
            $project: {
              _id: 0,
              ticker: 0,
              code: 0,
              __v: 0
            }
          }
        ]
      }
    },
    {
      $unwind: "$history"
    },
    {
      $addFields: {
        marketcap: {
          $multiply: [

            "$total_supply",
            "$history.close"
          ]
        }
      }
    },

  ])

  let pagination = {
    total: length[0].total,
    limit: dbQuery.offset.end,
    skip: dbQuery.offset.begin

  }
  return { data, pagination }

}
export async function treeMap() {

  const items = await MergedListModel.aggregate([

    {
      "$lookup": {
        'from': 'tradehistories',
        'localField': 'code',
        'foreignField': 'code',
        'as': 'history',
        "pipeline": [
          {
            $sort: { date: -1 }
          },
          {
            $limit: 1
          },
          {
            $project: {
              _id: 0,
              ticker: 0,
              code: 0,
              __v: 0
            }
          }
        ]
      }
    },
    {
      $unwind: "$history"
    },
    {
      $addFields: {
        marketcap: {
          $multiply: [

            "$total_supply",
            "$history.close"
          ]
        }
      }
    },

  ])

  const industry = [
    'БАРИЛГА',
    'САНХҮҮГИЙН БОЛОН ДААТГАЛЫН ҮЙЛ АЖИЛЛАГАА',
    'ТЭЭВЭР, АГУУЛАХЫН ҮЙЛ АЖИЛЛАГАА',
    'УУЛ УУРХАЙ, ОЛБОРЛОЛТ .',
    'БОЛОВСРУУЛАХ ҮЙЛДВЭРЛЭЛ',
    'МЭДЭЭЛЭЛ, ХОЛБОО',
    'БӨӨНИЙ БОЛОН ЖИЖИГЛЭН ХУДАЛДАА; МАШИН, МОТОЦИКЛИЙН ЗАСВАР, ҮЙЛЧИЛГЭЭ',
    'ХӨДӨӨ АЖ АХУЙ, ОЙН АЖ АХУЙ, ЗАГАС БАРИЛТ, АН АГНУУР.',
    'ЗОЧИД БУУДАЛ, БАЙР, СУУЦ БОЛОН НИЙТИЙН ХООЛНЫ ҮЙЛЧИЛГЭЭ',
    'ЦАХИЛГААН, ХИЙ, УУР, АГААРЖУУЛАЛТ .',
    'УДИРДЛАГЫН БОЛОН ДЭМЖЛЭГ ҮЗҮҮЛЭХ ҮЙЛ АЖИЛЛАГАА',
    'УС ХАНГАМЖ; СУВАГЖИЛТЫН СИСТЕМ, ХОГ ХАЯГДАЛ ЗАЙЛУУЛАХ БОЛОН ХҮРЭЭЛЭН БУЙ ОРЧНЫГ ДАХИН СЭРГЭЭХ ҮЙЛ АЖИЛЛАГАА',
    'ҮЛ ХӨДЛӨХ ХӨРӨНГИЙН ҮЙЛ АЖИЛЛАГАА',
    'МЭРГЭЖЛИЙН, ШИНЖЛЭХ УХААН БОЛОН ТЕХНИКИЙН ҮЙЛ АЖИЛЛАГАА',
    'ҮЙЛЧИЛГЭЭНИЙ БУСАД ҮЙЛ АЖИЛЛАГАА'
  ]
  let result: any = []

  const COLOR = [
    "hsl(0, 84%, 60%)",
    "hsl(0, 84%, 60%)",
    "hsl(0, 84%, 60%)",
    "hsl(0, 72%, 51%)",
    "hsl(0, 72%, 51%)",
    "hsl(0, 72%, 51%)",
    "hsl(0, 74%, 42%)",
    "hsl(0, 74%, 42%)",
    "hsl(0, 74%, 42%)",
    "hsl(0, 70%, 35%)",
    "hsl(0, 70%, 35%)",
    "hsl(0, 70%, 35%)",
    'hsl(0, 63%, 31%)',
    'hsl(0, 63%, 31%)',
    'hsl(0, 63%, 31%)',

    "hsl(217, 19%, 27%)",

    "hsl(144, 61%, 20%)",
    "hsl(144, 61%, 20%)",
    "hsl(144, 61%, 20%)",
    "hsl(143, 64%, 24%)",
    "hsl(143, 64%, 24%)",
    "hsl(143, 64%, 24%)",
    "hsl(142, 72%, 29%)",
    "hsl(142, 72%, 29%)",
    "hsl(142, 72%, 29%)",
    "hsl(142, 76%, 36%)",
    "hsl(142, 76%, 36%)",
    "hsl(142, 76%, 36%)",
    "hsl(142, 71%, 45%)",
    "hsl(142, 71%, 45%)",
    "hsl(142, 71%, 45%)",
  ]
  industry.map(indust => {
    let obj: any = {
      name: indust,

      children: []
    }
    items.map(item => {
      if (item.sector === indust) {
        obj.children.push({
          name: item.ticker,
          value: item.total_supply * item.history.close,
          change: item.history.change,
          color: COLOR[Math.round(item.history.change) + 15]
        })
      }
    })
    result.push(obj)
  })


  if (!result) {
    throw new CustomError('not found', 400)
  }
  return result

}