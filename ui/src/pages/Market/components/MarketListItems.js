const MarketListItems = (props) => {
  const data = props.data
  return (
    <tr className="border-b border-secondary-gray/25 font-medium hover:bg-secondary-gray/10 cursor-pointer">
    <a href={`/chart/${data.code}`}>
      <td className="flex items-center col-span-2 px-6 py-4 font-medium  whitespace-nowrap">
        <div className="mr-2">
          {data.image === undefined ? (
            <div className="w-10 h-10 bg-transparent"></div>
          ) : (
            <img src={data.image} alt={data.ticker} />
          )}
        </div>
        <div>
          <h1 className="font-bold">{data.ticker}</h1>
          <p>{data.company}</p>
        </div>
      </td>
    </a>
    <td className="px-6 py-4 text-right">
      {data.history.close > 999
        ? data.history.close.toLocaleString()
        : data.history.close}
      <span className="text-primary-gray">₮</span>
    </td>
    <td
      className={`
      px-6 py-4 text-right
      ${
        data.history.change !== 0
          ? data.history.change === 0
            ? "text-primary-gray"
            : data.history.change < 0
            ? "text-primary-red"
            : "text-primary-green"
          : ""
      }`}
    >
      {data.history.change === 0
        ? data.history.change
        : data.history.change < 0
        ? data.history.change
        : "+" + data.history.change}
    </td>
    <td className="px-6 py-4 text-right">
      {data.history.volume}
      <span className="text-primary-gray">ш</span>
    </td>
    <td className="px-6 py-4 text-right">
      {data.marketcap > 999
        ? data.marketcap.toLocaleString()
        : data.marketcap}
    </td>
    <td className="px-6 py-4 text-right">{data.industry}</td>
    <td className="px-6 py-4 text-right">{data.sector}</td>
  </tr> 
  
    

  )
}

export default MarketListItems
