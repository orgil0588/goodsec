import { useState } from "react"
import cards from "../../../asset/cards.png"
import { Button } from "../../../components/common/Button"
import { Popup } from "../../../components/common/Popup"
import { Card } from "../../../components/common/Card"
import close from "../../../asset/close.svg"
const Hero = () => {
  const [popup, setPopup] = useState(false)
  const [register, setRegister] = useState('')

  const isPopup = () => {
    setPopup(!popup)
  }

  const isAccount = (event) => {
    event.preventDefault()
    setRegister(event.target.value)
  }

  const checkAccount = () => {
    let check = register.toLowerCase().match(/[а-я]+/ig)
    check ? console.log(register) : console.log('error')
  }

  return (
    <section className="relative md:grid grid-cols-2">
      <div className="font-medium md:mt-0 lg:mt-10 xl:mt-20 2xl:mt-40">
        <h1 className="title 2xl:text-6xl">
          Хөрөнгө оруулагч болох амархан
        </h1>
        <p className="text-primary-gray my-6">
          Та манай системийг ашиглан APU, MNDL, TTL болон Монголын хөрөнгийн
          бирж дэх бүх төрлийн хувьцаан дээр арилжаа хийх боломжтой.
        </p>
        <Button click={() => isPopup()} styles="btn">
          <p className="font-semibold">Данстай эсэхээ шалгах</p>
        </Button>
        {
          popup && <>
            <Popup show={popup} click={() => isPopup()} />
            <Card>
              <form className="form">
                <div className="flex justify-between">
                  <label className="label text-primary-black" for="account">
                    Данстай эсэхээ шалгах
                  </label>
                  <div onClick={() => setPopup(!popup)} className="cursor-pointer">
                    <img src={close} className="w-4 h-4" alt="close" />
                  </div>
                </div>
                <div className="text-sm mt-4 my-1">
                  <span className="text-primary-red font-bold">*</span> Та кирилл үсгээр бичнэ үү
                </div>
                <input id="account" type='text' placeholder="Регистрийн дугаар" className="input" onChange={(e) => isAccount(e)} minLength="8" maxLength="10" />
              </form>
              {
                register && <div>
                  asd
                </div>
              }
              <Button type="submit" styles="btn" click={() => checkAccount()}>
                Үргэлжлүүлэх
              </Button>
            </Card></>

        }
      </div>
      <div className="hidden md:block">
        <img src={cards} className="" alt="cards" />
      </div>
    </section>

  )
}
export default Hero
