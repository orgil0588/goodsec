import { useEffect, useState } from "react"
import axios from "axios"
import { market_list, top } from "../../../constants"

const Market = () => {
  const [market, setMarket] = useState([])
  useEffect(() => {

    axios.get(`http://localhost:8080${market_list}?class=top&sort=marketcap&offset=20`).then(res => setMarket(res.data.data.splice(0,5))).catch(err => console.log(err))


  }, [])
  return (
    <div className="text-sm lg:text-base">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-b border-primary-gray/25 py-4 px-2 text-secondary-gray font-medium">
        <div>Компани</div>
        <div>Ханш</div>
        <div>24ц өөрчлөлт</div>
        <div className="hidden lg:block">Хэмжээ</div>
        <div className="hidden md:block">Арилжаа</div>
      </div>
      {market &&
        market.map((element) => {
          return (
            <div
              key={element.code}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center cursor-pointer rounded-xl px-4 mt-2 md:mt-4 lg:mt-8 text-primary-black/95 font-semibold py-4 hover:bg-secondary-gray/10 "
            >
              <div className="flex items-center mr-4 ">
                <div className="w-10 h-10 mr-2">
                  <img
                    className="w-full h-full"
                    src={element.image}
                    alt={element.ticker}
                  />
                </div>
                {/* <div className="mr-2 hidden md:block">{element.name}</div> */}
                <div className=" text-secondary-gray">{element.ticker}</div>
              </div>
              <div className="  ">{"₮ " + element.history.close.toLocaleString()}</div>
              <div
                className={` ${element.history.change === 0
                    ? "text-secondary-gray"
                    : element.history.change < 0
                      ? "text-primary-red"
                      : "text-primary-green"
                  }`}
              >
                {(element.history.change > 0 ? `+` + element.history.change : element.history.change) +
                  "%"}
              </div>
              <div className="hidden lg:block">
                {"₮ " + (element.history.volume * element.history.close).toLocaleString()}
              </div>
              <div className="hidden md:block">
                <a
                  href={`/chart/${element.code}`}
                  className="border-2 border-secondary-gray/25 px-3 py-2   rounded-full hover:text-white hover:border-primary-black hover:bg-primary-black"
                >
                  Арилжаа
                </a>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Market
