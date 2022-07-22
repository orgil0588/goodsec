import {  useState } from "react"
import ChartCandle from "./ChartCandle"
import ChartLine from "./ChartLine"

const ChartComponent = (props) => {
  const [chartType, setChartType] = useState("line")

  // resize test

  return (
    <div id="div1">
      <div className="flex space-x-4 pb-4 border-b border-secondary-gray-25">
        <div
          className={`py-1 px-3 rounded-full cursor-pointer ${
            chartType === "line"
              ? "bg-secondary-gray/30"
              : "bg-transparent text-primary-gray"
          }`}
          onClick={() => {
            setChartType("line")
          }}
        >
          Line
        </div>
        <div
          className={`py-1 px-3 rounded-full cursor-pointer ${
            chartType === "candle"
              ? "bg-secondary-gray/30"
              : "bg-transparent text-primary-gray"
          }`}
          onClick={() => {
            setChartType("candle")
          }}
        >
          Candle
        </div>
      </div>
      {chartType === "line" ? (
        <ChartLine container={props.container} data={props.line} />
      ) : (
        <ChartCandle container={props.container} data={props.candle} />
      )}
    </div>
  )
}

export default ChartComponent
