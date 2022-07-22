import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { market_list, top } from "../../../constants"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import SliderItem from "./SliderItem";
const HorizontalCards = () => {
  const [fetch, setFetch] = useState('')
  const [screen, setScreen] = useState('')
  const ref = useRef()
  useEffect(() => {
    axios.get(`http://localhost:8080${market_list}?class=top&sort=marketcap&offset=20`).then(res => {
      setFetch(res.data.data)
    }).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (ref.current) {
      const w = ref.current.offsetWidth
      if (w < 670) {
        setScreen(1)
      } else if (w < 1000) {
        setScreen(2)
      } else if (w < 1440) {
        setScreen(4)
      } else {
        setScreen(4)
      }
    }
  }, [])

  return (
    <div ref={ref} className="relative mt-10 flex mx-4 p-4 z-10 rounded-3xl bg-secondary-gray/5 flex-row justify-between lg:justify-around ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={screen && screen}
        autoplay={{ delay: 800 }}
      >
        {fetch &&
          fetch.map((item) => {
            return (
              <SwiperSlide key={item.code}>
                <SliderItem item={item} key={item.code} />
              </SwiperSlide>
            )
          })}
      </Swiper>


    </div>
  )
}
export default HorizontalCards
