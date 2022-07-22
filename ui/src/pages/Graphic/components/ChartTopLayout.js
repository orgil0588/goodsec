const ChartTopLayout = ({ data }) => {
  return (
    <>
      {data && (
        <div className="bg-white text-primary-black my-4 p-4 rounded-md lg:flex lg:justify-between lg:items-center">
          <div className="md:flex">
            <div className="mb-2 font-semibold md:mr-6">
              <h1 className="text-2xl">{data.lists[0].company}</h1>
              <p className="text-primary-gray text-xs">{data.ticker}</p>
            </div>
            <div className="font-bold">
              <h1 className="text-2xl">{data.close.toLocaleString()}₮</h1>
              <p
                className={`text-xs ${
                  data.change === 0
                    ? "text-primary-gray"
                    : data.change < 0
                    ? "text-primary-red"
                    : "text-primary-green"
                }`}
              >
                {data.change}%
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-2">
            <div className="mt-2 md:mt-0 md:pr-4 md:mr-4 md:border-r md:border-secondary-gray/25">
              <div className="text-primary-gray text-xs mb-1">ROA</div>
              <div className="text-primary-black font-semibold text-sm">
                {(
                  data.report[0].total_profit_loss[
                    data.report[0].total_profit_loss.length - 1
                  ] /
                  data.report[0].total_assets[
                    data.report[0].total_assets.length - 1
                  ]
                )
                  .toString()
                  .split("")
                  .splice(0, 4)}
              </div>
            </div>
            <div className="mt-2 md:mt-0 md:pr-4 md:mr-4 md:border-r md:border-secondary-gray/25">
              <div className="text-primary-gray text-xs mb-1">ROE</div>
              <div className="text-primary-black font-semibold text-sm">
                {(
                  data.report[0].total_profit_loss[
                    data.report[0].total_profit_loss.length - 1
                  ] /
                  data.report[0].ownership_amount[
                    data.report[0].ownership_amount.length - 1
                  ]
                )
                  .toString()
                  .split("")
                  .splice(0, 4)}
              </div>
            </div>
            <div className="mb-2 md:mb-0 md:pr-4 md:mr-4 md:border-r md:border-secondary-gray/25">
              <div className="text-primary-gray text-xs mb-1">EPS</div>
              <div className="text-primary-black font-semibold text-sm">
                {(
                  data.report[0].total_profit_loss[
                    data.report[0].total_profit_loss.length - 1
                  ] /
                  data.report[0].total_supply[
                    data.report[0].total_supply.length - 1
                  ]
                )
                  .toString()
                  .split("")
                  .splice(0, 4)}
              </div>
            </div>
            <div className="mb-2 md:mb-0">
              <div className="text-primary-gray text-xs mb-1">P/E</div>
              <div className="text-primary-black font-semibold text-sm">
                {(
                  data.close /
                  (data.report[0].total_profit_loss[
                    data.report[0].total_profit_loss.length - 1
                  ] /
                    data.report[0].total_supply[
                      data.report[0].total_supply.length - 1
                    ])
                )
                  .toString()
                  .slice(
                    0,
                    (
                      data.close /
                      (data.report[0].total_profit_loss[
                        data.report[0].total_profit_loss.length - 1
                      ] /
                        data.report[0].total_supply[
                          data.report[0].total_supply.length - 1
                        ])
                    )
                      .toString()
                      .indexOf(".") + 2
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChartTopLayout
// {
//   "code": 90,
//   "image": "asdasdasd",
//   "ticker": "APU",
//   "name": "АПУ ХК",
//   "price": 1375,
//   "change": -0.15,
//   "roa": 0.2487,
//   "roe": 0.3042,
//   "eps": 144.4321,
//   "pe": 12.4903
// }
