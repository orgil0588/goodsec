import background from "../../../asset/market-pic.png"
const MarketBackground = () => {
  const mrktcp = 1.86
  return (
    <div className="w-full bg-purple-200  text-primary-black p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        <div className="pt-4 px-10 pb-10">
          <h1 className="text-4xl xl:text-6xl font-bold w-10/12 mb-4 mt-8 xl:mb-14">
            Өнөөдрийн ханшийн мэдээлэл
          </h1>
          <p className="text-lg xl:text-2xl">
            Монголын хөрөнгийн биржэд бүртгэлтэй ХК-нуудын нийт үнэлгээ
            <span className="font-semibold"> ₮{mrktcp}T</span>
          </p>
        </div>
        <div className="w-full">
          <img src={background} alt="background" />
        </div>
      </div>
    </div>
  )
}

export default MarketBackground
