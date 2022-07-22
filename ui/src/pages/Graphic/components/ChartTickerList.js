import { useState, useEffect } from "react"
import axios from "axios"
import { ticker_list } from "../../../constants"
import ChartTickerListItem from "./ChartTickerListItem"
const ChartTickerList = () => {
  const [list, setList] = useState("")
  const [searchField, setSearchField] = useState('')
  const [removedList, setRemovedList] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:8080${ticker_list}`)
      .then((res) => {
        setList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (list) {
      const found = list.filter(item => item.ticker.toLowerCase().includes(searchField))
      setRemovedList(found)
    }
  }, [searchField])

  return (
    <div
      className="mt-10 max-h-[490px] w-full lg:mt-0 bg-white rounded-md text-sm p-2 text-primary-black font-medium overflow-auto relative"

    >
      <div className="absolute top-0 w-full">
        <div className="grid grid-cols-3 mb-4">
          <div>Симбол</div>
          <div>Ханш</div>
          <div className="text-right">Өөрчлөлт</div>
        </div>
        <div className="mb-4">
          <input
            onChange={(event) => {
              setSearchField(event.target.value)
            }}
            placeholder="Хайх"
            className="p-2 w-full rounded-md border border-primary-gray "
          />
        </div>
      </div>
      <div className="mt-20">
        {
          removedList ? removedList && removedList.map((element) => <ChartTickerListItem element={element} />)
            : list && list.map((element) => <ChartTickerListItem element={element} />)
        }
      </div>
    </div>
  )
}

export default ChartTickerList
