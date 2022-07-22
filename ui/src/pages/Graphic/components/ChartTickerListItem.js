const ChartTickerListItem = ({element}) => {

    return (
        <a  href={`/chart/${element.code}`} key={element.ticker}>
        <div className={`grid grid-cols-3 hover:bg-secondary-gray/25`}>
          <div className="py-1 font-semibold">{element.ticker}</div>
          {element.history[0] &&
            <>
              <div className="py-1 text-right">
                {element.history[0].close > 999 ? element.history[0].close.toLocaleString() : element.history[0].close}
              </div>
              <div className={`py-1 text-right ${element.history[0].change === 0 ? "text-primary-gray " : element.history[0].change < 0 ? "text-primary-red" : "text-primary-green"}`}>
                {element.history.length !== 0
                  ? element.history[0].change + "%"
                  : "-"}
              </div>
            </>
          }
        </div>
      </a>
    )
}

export default ChartTickerListItem