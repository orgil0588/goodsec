import logo from "../../asset/logo-lg.png"
import arrow from "../../asset/arrow.svg"
import fb from "../../asset/facebook.svg"
import ig from "../../asset/instagram.svg"
import tw from "../../asset/twitter.svg"
const Footer = () => {
  return (
    <footer className="px-4 mt-10 text-sm lg:text-base container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-secondary-gray/50">
        <div className="text-primary-gray font-semibold border-y md:border-r md:border-y-0 border-secondary/50-gray py-4 flex space-x-6 lg:space-x-14 ">
          <div className="mb-4">
            <img src={logo} alt="logo" />
          </div>
          <ul className="">
            <li className="pb-4 hover:text-primary-black">
              <a href="/exchange">Exchange</a>
            </li>
            <li className="pb-4 hover:text-primary-black">
              <a href="/crypto">Buy crypto</a>
            </li>
            <li className="pb-4 hover:text-primary-black">
              <a href="/market">Market</a>
            </li>
            <li className="pb-4 hover:text-primary-black">
              <a href="/news">Learn crypto</a>
            </li>
            <li className="pb-4 hover:text-primary-black">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="py-4 md:py-2 border-r border-secondary-gray/50">
          <h1 className="font-semibold text-primary-black py-2">CONTACT</h1>
          <p className="text-primary-black py-2 leading-8">
            43252 Borer Mountains <br />
            Zackerychester
            <br />
            Bahamas
            <br />
            732-528-4945
            <br />
          </p>
        </div>
        <div className="border-y border-secondary-gray/50 py-4 md:py-2 md:border-y-0">
          <h1 className="font-semibold text-primary-black py-2">NEWSLETTER</h1>
          <p className="text-primary-black py-2 leading-8">
            Subscribe our newsletter to get more free design course and
            resource.
          </p>
          <form>
            <label
              className="pl-4 pr-1 py-1 flex justify-between  
            border-2 border-secondary-gray/25 rounded-full    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
              <input
                placeholder="Enter your email"
                type="email"
                className="outline-none bg-transparent"
              />
              <button className=" bg-primary-blue rounded-full w-8 h-8 p-2 hover:bg-blue-700 cursor-pointer ">
                <img src={arrow} alt="arrow" />
              </button>
            </label>
          </form>
        </div>
      </div>
      <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between ">
        <p className="pb-4 text-primary-gray text-sm md:pb-0">
          Copyright © 2021 Digital Method LLC. All rights reserved
        </p>
        <div className="flex items-center space-x-6">
          <div className="w-6 h-6 cursor-pointer  ">
            <img src={fb} alt="fb" />
          </div>
          <div className="w-6 h-6 cursor-pointer ">
            <img src={ig} alt="fb" />
          </div>
          <div className="w-6 h-6 cursor-pointer ">
            <img src={tw} alt="fb" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
//  <footer className="border-t border-secondary-gray ">
//         <div className="container mx-auto lg:px-44 w-full flex justify-between items-center py-4 text-sm text-primary-gray">
//           <p>Copyright © 2022 Digital Method LLC. All rights reserved</p>
//           <div className="flex items-center space-x-4">
//             <div className="p-1 w-8 h-8 rounded-full hover:bg-secondary-gray/25 cursor-pointer">
//               <img src={fb} alt="fb" />
//             </div>
//             <div className="p-1 w-8 h-8 rounded-full hover:bg-secondary-gray/25 cursor-pointer">
//               <img src={ig} alt="ig" />
//             </div>
//             <div className="p-1 w-8 h-8 rounded-full hover:bg-secondary-gray/25 cursor-pointer">
//               <img src={tw} alt="tw" />
//             </div>
//           </div>
//         </div>
//       </footer>
