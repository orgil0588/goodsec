import React, { useEffect, useRef } from "react"
import { createChart, CrosshairMode } from "lightweight-charts"

const ChartLine = (props) => {
  const chartContainerRef = useRef()
  const chart = useRef()
  const resizeObserver = useRef()

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#23262F",
      },
      grid: {
        vertLines: {
          color: "#e5e7eb",
        },
        horzLines: {
          color: "#e5e7eb",
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      priceScale: {
        borderColor: "#23262F",
      },
      timeScale: {
        borderColor: "#23262F",
      },
    })

    const lineSeries = chart.current.addBaselineSeries({
      baseValue: { type: "price", price: 25 },
      topLineColor: "rgba( 38, 166, 154, 1)",
      topFillColor1: "rgba( 38, 166, 154, 0.28)",
      topFillColor2: "rgba( 38, 166, 154, 0.05)",
      bottomLineColor: "rgba( 239, 83, 80, 1)",
      bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
      bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
      // topColor: "rgba(229, 231, 235, 0)",
      // bottomColor: "rgba(229, 231, 235, 0)",
      // lineColor: "#23262F",
      // lineWidth: "1",
    })
    lineSeries.setData(props.data)
  }, [])

  //   Resize chart on container resizes.
  useEffect(() => {
    // console.log(chartContainerRef.current)
    resizeObserver.current = new ResizeObserver((entries) => {
      // console.log(entries[0].contentRect)
      const width = entries[0].contentBoxSize[0].inlineSize
      const height = entries[0].contentBoxSize[0].blockSize * 0.9
      chart.current.applyOptions({ width, height })
      setTimeout(() => {
        chart.current.timeScale().fitContent()
      }, 0)
    })

    resizeObserver.current.observe(props.container.current)

    return () => resizeObserver.current.disconnect()
  }, [])

  return (
    <div className="w-full h-full">
      <div className="" ref={chartContainerRef} />
    </div>
  )
}

export default ChartLine
