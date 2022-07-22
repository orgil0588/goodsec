import menu from "../../asset/menu.svg"
import logo from "../../asset/logo.svg"
import close from "../../asset/close.svg"
import lgLogo from "../../asset/logo-lg.png"
import { useState } from "react"
import { navbar } from "../../constants"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white md:border-b md:border-secondary-gray/50">
      <header className="py-2 px-6 md:px-0 container w-full mx-auto">
        <div className="w-full flex justify-between md:justify-none items-center py-6 md:py-2 text-sm font-medium">
          <div className="flex space-x-6">
            <div className="">
              <a href="/">
                <img className="w-10  lg:hidden" src={lgLogo} alt="logo" />
                <img
                  className="w-full h-10 hidden lg:block"
                  src={lgLogo}
                  alt="logo-lg"
                />
              </a>
            </div>

            <ul className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-12 text-primary-gray pl-6 border-l border-secondary-gray/50 font-bold">
              {
                navbar.map((link) => <a key={link.url} href={link.url}> <li className="py-2 cursor-pointer hover:text-primary-black">
                  {link.text}
                </li>
                </a>)
              }
            </ul>
          </div>

          <ul className="hidden md:flex items-center space-x-4">
            <a href="/signup">  <li className="bg-primary-blue hover:bg-red-700 cursor-pointer rounded-full py-2 px-4 text-white">
              Бүртгүүлэх
            </li></a>
            <a href="/login">  <li className="border-2 border-secondary-gray rounded-full py-1 px-4 cursor-pointer hover:text-white hover:bg-primary-black hover:border-primary-black">
              Нэвтрэх
            </li></a>
          </ul>
          <div
            className="w-8 h-8 md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {isOpen === false ? (
              <img className="cursor-pointer" src={menu} alt="menu" />
            ) : (
              <img className="cursor-pointer" src={close} alt="close" />
            )}
          </div>
        </div>
        <div className="md:hidden">
          {isOpen && (
            <nav className="h-8/12 shadow-lg px-4 rounded-md">
              <ul className="flex flex-col space-y-4 font-bold text-gray-500 text-2xl">
                {
                  navbar.map(link => {
                    return (
                      <a href={link.url}><li className="py-2 cursor-pointer hover:text-primary-black">
                        {link.text}
                      </li></a>
                    )
                  })
                }
              </ul>
              <ul className="w-full grid grid-cols-2 gap-8 text-center mt-32 py-4 px-2">
                <a href="/signup"> <li className="bg-primary-blue rounded-full py-2 text-white font-medium hover:bg-red-700 cursor-pointer items-center">
                  Бүртгүүлэх
                </li></a>
                <a href="/login">  <li className="border-2 border-gray-400 rounded-full py-2 font-medium hover:bg-primary-black hover:text-white cursor-pointer hover:border-primary-black">
                  Нэвтрэх
                </li></a>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}
export default Navbar
