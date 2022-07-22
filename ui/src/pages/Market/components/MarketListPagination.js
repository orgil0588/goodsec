import { useState } from "react"

const MarketListPagination = ({ length, offset }) => {

  const [query, setQuery] = useState({
    class: window.location.search.split("?")[1].split("&")[0].split("=")[1],
    sort: window.location.search.split("?")[1].split("&")[1].split("=")[1],
    offset: window.location.search.split("?")[1].split("&")[2].split("=")[1],
  })

  console.log(query)

  let page = []
  let current = Math.ceil(length.total / 20)
  for (let i = 0; i < current; i++) {
    page.push(i)
  }
  return (
    <div className="flex items-center justify-end mt-4">
      {page.map((e) => {
        return (
          <a
            key={e + 1}
            href={`/market?class=${query.class}&sort=${query.sort}&offset=${
              (e + 1) * 20
            }`}
          >
            <div
              className={`px-4 py-2 mx-2 rounded-md border border-secondary-gray/50 cursor-pointer hover:bg-red-700 hover:text-white ${
                offset / 20 - 1 === e ? "bg-primary-blue text-white" : ""
              }`}
              onClick={() => {
                setQuery.offset = (e + 1) * 20
              }}
            >
              {e + 1}
            </div>
          </a>
        )
      })}
    </div>
  )
}
export default MarketListPagination
