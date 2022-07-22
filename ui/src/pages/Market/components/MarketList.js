import { useState, useEffect } from "react"
import axios from "axios"
import { market_list, all_stock } from "../../../constants"
import MarketListItems from "./MarketListItems"
import MarketListPagination from "./MarketListPagination"
import useToggle from '../../../hooks/useToggle';



const MarketList = () => {
  const [list, setList] = useState("")
  const [stocks, setStocks] = useState('')
  const [search, setSearch] = useState('')
  const [query] = useState({
    class: window.location.search.split("?")[1].split("&")[0].split("=")[1],
    sort: window.location.search.split("?")[1].split("&")[1].split("=")[1],
    offset: window.location.search.split("?")[1].split("&")[2].split("=")[1],
  })


  useEffect(() => {
    axios.get(`http://localhost:8080${all_stock}`).then(res => {
      setStocks(res.data.data)
    })
    console.log(`http://localhost:8080${market_list}?class=${query.class}&sort=${query.sort}&offset=${query.offset}`)
    axios
      .get(
        `http://localhost:8080${market_list}?class=${query.class}&sort=${query.sort}&offset=${query.offset}`
      )
      .then((res) => {
        const init = {
          data: res.data.data,
          length: res.data.count,
        }
        setList({ ...list, ...init })
        console.log(list)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <div
        className={`w-10/12 px-4 flex justify-center mx-auto p-4 rounded-xl bg-white mb-24 shadow-xl -translate-y-1/2`}
      >
        <div className="">
          <ul
            className="py-1 text-sm text-primary-black flex flex-col md:flex-row md:space-x-6 items-start"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href={`/market?class=all&sort=marketcap&offset=20`}
                className={`${query.class === "all"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue/75 hover:text-white"
                  } inline-block px-4 py-2 rounded-md font-medium `}
              >
                Бүх хувьцаа
              </a>
            </li>
            <li>
              <a
                href={`/market?class=top&sort=marketcap&offset=20`}
                className={`${query.class === "top"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue/75 hover:text-white"
                  } inline-block px-4 py-2 rounded-md font-medium `}
              >
                Топ 20
              </a>
            </li>
            <li>
              <a
                href={`/market?class=1&sort=marketcap&offset=20`}
                className={`${query.class === "1"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue/75 hover:text-white"
                  } inline-block px-4 py-2 rounded-md font-medium `}
              >
                1-р ангилал
              </a>
            </li>
            <li>
              <a
                href={`/market?class=2&sort=marketcap&offset=20`}
                className={`${query.class === "2"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue/75 hover:text-white"
                  } inline-block px-4 py-2 rounded-md font-medium `}
              >
                2-р ангилал
              </a>
            </li>
            <li>
              <a
                href={`/market?class=3&sort=marketcap&offset=20`}
                className={`${query.class === "3"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue/75 hover:text-white"
                  } block px-4 py-2 rounded-md font-medium `}
              >
                3-р ангилал
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
      </div>
      <div className="relative overflow-x-auto scrollbar md:mx-10">
        <table className="w-full text-sm text-left  text-primary-black ">
          <thead className="text-xs text-primary-gray uppercase ">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=ticker&offset=${query.offset}`}
                >
                  TICKER
                </a>

              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=close&offset=${query.offset}`}
                >
                  LAST
                </a>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=change&offset=${query.offset}`}
                >
                  CHG%
                </a>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=volume&offset=${query.offset}`}
                >
                  VOL
                </a>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=marketcap&offset=${query.offset}`}
                >
                  MKTCAP
                </a>
              </th>

              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=industry&offset=${query.offset}`}
                >
                  INDUSTRY
                </a>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-secondary-gray"
              >
                <a
                  href={`/market?class=${query.class}&sort=sector&offset=${query.offset}`}
                >
                  SECTOR
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              search && <div>
                {search[0].ticker}
              </div>
            }
            {list &&
              list.data.map((element) => {
                return <MarketListItems data={element} key={element.ticker} />
              })
            }
          </tbody>
        </table>
      </div>
      {list && (
        <MarketListPagination length={list.length} offset={query.offset} />
      )}
    </>
  )
}

export default MarketList
