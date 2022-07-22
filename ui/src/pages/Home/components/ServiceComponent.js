import cardPicFirst from "../../../asset/card-pic-1.png"
import cardPicSecond from "../../../asset/card-pic-2.png"
import cardPicThree from "../../../asset/card-pic-3.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const ServiceComponent = () => {
  return (
    <div className="p-2 md:p-10 ">
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white p-1 xl:p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl mb-10">
              <img src={cardPicFirst} alt="first-pic" />
              <h1 className="font-semibold text-primary-black my-4">
                Үнэт цаасны данс нээх үйлчилгээ
              </h1>
              <p className="my-4 w-10/12 text-primary-gray">
                Та хөрөнгийн зах зээлийн арилжаанд оролцох, хувьцаны ногдол ашиг хүртэх зорилгоор Үнэт цаасны дансаа манайд компанид нээлгэх боломжтой.
              </p>
              <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
                Buy crypto
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-1 xl:p-6  rounded-2xl flex flex-col items-center text-center hover:shadow-xl">
              <img src={cardPicSecond} alt="first-pic" />
              <h1 className="font-semibold text-primary-black my-4">
                Арилжааны зуучлалын үйлчилгээ
              </h1>
              <p className="my-4 w-10/12 text-primary-gray">
                Монголын Хөрөнгийн биржийн өдөр тутмын арилжаанд оролцох боломжийг бид танд олгож байна.
              </p>
              <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
                Trade now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-1 xl:p-6  rounded-2xl flex flex-col items-center text-center hover:shadow-xl">
              <img src={cardPicThree} alt="first-pic" />
              <h1 className="font-semibold text-primary-black my-4">
                Зөвлөх үйлчилгээ
              </h1>
              <p className="my-4 w-10/12 text-primary-gray">
                We realizes ideas from simple to complex, everything become easy
                to use and the reach the most potential customers.
              </p>
              <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
                Learn now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ------

                large screen


*/}

      <div className="hidden lg:block">
        <div className="grid lg:grid lg:grid-cols-3 gap-4 xl:gap-14">
          <div className="bg-white p-1 xl:p-6  rounded-2xl flex flex-col items-center justify-between text-center hover:shadow-xl">
            <img src={cardPicFirst} alt="first-pic" />
            <h1 className="font-semibold text-primary-black my-4">
              Үнэт цаасны данс нээх үйлчилгээ
            </h1>
            <p className="my-4 w-full text-primary-gray">
              Та хөрөнгийн зах зээлийн арилжаанд оролцох, хувьцаны ногдол ашиг хүртэх зорилгоор Үнэт цаасны дансаа манайд компанид нээлгэх боломжтой.
            </p>
            <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
              Buy crypto
            </button>
          </div>

          <div className=" bg-white p-1 xl:p-6  rounded-2xl flex flex-col items-center  justify-between  text-center hover:shadow-xl">
            <img src={cardPicSecond} alt="first-pic" />
            <h1 className="font-semibold text-primary-black my-4">
              Арилжааны зуучлалын үйлчилгээ
            </h1>
            <p className="my-4 w-full text-primary-gray">
              Монголын Хөрөнгийн биржийн өдөр тутмын арилжаанд оролцох боломжийг бид танд олгож байна.
            </p>
            <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
              Trade now
            </button>
          </div>

          <div className="bg-white p-1 xl:p-6  rounded-2xl flex flex-col items-center  justify-between  text-center hover:shadow-xl">
            <img src={cardPicThree} alt="first-pic" />
            <h1 className="font-semibold text-primary-black my-4">
              Зөвлөх үйлчилгээ
            </h1>
            <p className="my-4 w-full text-primary-gray">
              We realizes ideas from simple to complex, everything become easy
              to use and the reach the most potential customers.
            </p>
            <button className="px-3 py-2 border-2 border-secondary-gray/25 text-primary-black rounded-full font-semibold text-sm hover:border-primary-black hover:bg-primary-black hover:text-white">
              Learn now
            </button>
          </div>
        </div>
      </div>
      <button className="flex justify-center mx-auto px-8 py-4 mt-20 bg-primary-blue hover:bg-blue-700 text-white font-semibold rounded-full">
        <a href="/contact">Бидэнтэй холбогдох</a>
      </button>
    </div>
  )
}
export default ServiceComponent
