import { useEffect, useState } from "react"
import data from "../../../fakedata/newsfeature.json"
import NewsCard from "./NewsCard"

const News = () => {
  const [news, setNews] = useState("")

  useEffect(() => {
    setNews(data)
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }
  return (
    <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-16 my-10 ">
      {/* Item 1 */}
      <div className="cursor-pointer p-2 bg-white rounded-md">
        <div className="">
          <img src={data[0].image} alt="first pic" className="rounded-2xl" />
        </div>
        <div className="flex justify-between items-start mt-4 ">
          <h1 className="text-xl lg:text-3xl font-semibold text-primary-black hover:text-primary-blue mb-4">
            {data[0].title}
          </h1>
          <div className="text-center border-2 border-secondary-gray/50 px-4 py-2 rounded-full font-semibold hover:text-white hover:border-primary-black hover:bg-primary-black">
            Дэлгэрэнгүй
          </div>
        </div>
        <p className="text-primary-gray my-2 hidden md:block">
          {data[0].description}
        </p>
      </div>
      {/* Item 1 */}
      <div className="hidden md:grid md:grid-rows-3 md:gap-6">
        <NewsCard data={data[1]} />
        <NewsCard data={data[2]} />
        <NewsCard data={data[3]} />
      </div>
    </div>
  )
}

export default News
