const NewsCard = (props) => {
  const data = props.data
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-2 rounded-md cursor-pointer mt-10 md:mt-0">
        <div className="flex flex-col  justify-between">
          <div>
            <h1 className="text-primary-black font-semibold text-md mb-2 mt-4 hover:text-primary-blue ">
              {data.title}
            </h1>
            <p className="text-primary-gray hidden md:block">
              {data.description.match(/.{1,100}/g)[0] + "..."}
            </p>
          </div>
          <p className="text-primary-gray">{data.date}</p>
        </div>
        <div className="">
          <img src={data.image} className="rounded-xl" alt={data.slug} />
        </div>
      </div>
    </div>
  )
}

export default NewsCard
