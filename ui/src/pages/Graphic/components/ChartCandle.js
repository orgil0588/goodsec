import React, { useEffect, useRef } from "react"
import { createChart, CrosshairMode } from "lightweight-charts"

const ChartCandle = (props) => {
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

    const candleSeries = chart.current.addCandlestickSeries()
    candleSeries.setData(props.data)
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

export default ChartCandle
