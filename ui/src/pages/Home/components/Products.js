import stepOne from "../../../asset/step-1.png"
import stepTwo from "../../../asset/step-2.png"
import stepThree from "../../../asset/step-3.png"
import stepFour from "../../../asset/step-4.png"
import HowItWorkCard from "./HowItWorkCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
const Products = () => {
  return (
    <>
      <div className="mt-10 text-center md:grid md:grid-cols-2 lg:grid-cols-4 hidden ">
        <HowItWorkCard
          image={stepOne}
          step="1"
          title="Хувьцаа"
          description="Stacks is a production-ready library of stackable content blocks built in React Native."
        />
        <HowItWorkCard
          image={stepTwo}
          step="2"
          title="Бонд"
          description="Stacks is a production-ready library of stackable content blocks built in React Native."
        />
        <HowItWorkCard
          image={stepThree}
          step="3"
          title="Хөрөнгөөр баталгаажсан үнэт цаас"
          description="Stacks is a production-ready library of stackable content blocks built in React Native."
        />
        <HowItWorkCard
          image={stepFour}
          step="4"
          title="Хөрөнгө оруулалтын сан"
          description="Stacks is a production-ready library of stackable content blocks built in React Native."
        />
      </div>
      <div className="block mx-auto text-center md:hidden ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HowItWorkCard
              image={stepOne}
              step="1"
              title="Хувьцаа"
              description="Stacks is a production-ready library of stackable content blocks built in React Native."
            />
          </SwiperSlide>
          <SwiperSlide>
            <HowItWorkCard
              image={stepTwo}
              step="2"
              title="Бонд"
              description="Stacks is a production-ready library of stackable content blocks built in React Native."
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <HowItWorkCard
              image={stepThree}
              step="3"
              title="Хөрөнгөөр баталгаажсан үнэт цаас"
              description="Stacks is a production-ready library of stackable content blocks built in React Native."
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <HowItWorkCard
              image={stepFour}
              step="4"
              title="Хөрөнгө оруулалтын сан"
              description="Stacks is a production-ready library of stackable content blocks built in React Native."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
export default Products
