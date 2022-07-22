import ChartTopLayout from "./components/ChartTopLayout"
import FinancialReport from "./components/FinanceReport"
import ChartTickerList from "./components/ChartTickerList"
import ChartComponent from "./components/ChartComponent"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { marketTopLayout, candle } from "../../constants"
const Chart = () => {
  const [screen, setScreen] = useState("chart")
  const container = useRef()
  const [data, setData] = useState("")
  const [candleData, setCandleData] = useState("")
  const [lineData, setLineData] = useState("")

  useEffect(() => {
    const code = window.location.href.split("/")[4]
    // /api/trade_history/90
    axios
      .get(`http://localhost:8080${marketTopLayout}${code}`)
      .then((res) => {
        setData(res.data.data[0])
      })
      .catch((err) => {
        console.warn(err.message)
      })
    axios
      .get(`http://localhost:8080${candle}${code}`)
      .then((res) => {
        let candleArray = []
        let lineArray = []
        res.data.data.map((el) => {
          const candleData = {
            open: el.open,
            high: el.high,
            low: el.low,
            close: el.close === null ? el.low : el.close,
            time: el.date,
          }
          const lineData = {
            time: el.date,
            value: el.close === null ? el.low : el.close,
          }
          candleArray.push(candleData)
          lineArray.push(lineData)
        })
        setLineData(lineArray)
        setCandleData(candleArray)
      })
      .catch((err) => {
        console.warn(err.message)
      })
  }, [])
  return (
    <div className="bg-secondary-gray/5 md:mx-10 lg:mx-20 xl:mx-32">
      <ChartTopLayout data={data} />
      <div>
        <div
          className={`mx-4 flex justify-between items-center font-semibold mb-4 md:justify-start md:space-x-4 `}
        >
          <div
            className={`py-1 px-2 rounded-full cursor-pointer ${
              screen === "chart"
                ? "bg-primary-blue text-white"
                : "bg-transparent text-primary-gray"
            }`}
            onClick={() => {
              setScreen("chart")
            }}
          >
            График
          </div>
          <div
            className={`py-1 px-2 rounded-full cursor-pointer ${
              screen === "report"
                ? "bg-primary-blue text-white"
                : "bg-transparent text-primary-gray"
            }`}
            onClick={() => {
              setScreen("report")
            }}
          >
            Санхүүгийн тайлан
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-6 xl:gap-4">
          <div
            style={{ height: 680 }}
            className="bg-white p-4 rounded-md col-span-2 lg:col-span-5"
            ref={container}
          >
            {screen === "chart" ? (
              <div className="w-full h-full">
                {lineData && candleData && (
                  <ChartComponent
                    container={container}
                    candle={candleData}
                    line={lineData}
                  />
                )}
              </div>
            ) : (
              <FinancialReport data={data} />
            )}
          </div>
          <div className="rounded-md">
            <ChartTickerList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
