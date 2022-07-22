import downloadPic from "../../../asset/download-pic.png"
import appstore from "../../../asset/apple.svg"
import appleOs from "../../../asset/apple (1).svg"
import google from "../../../asset/google-play.svg"

const Download = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="">
        <h1 className="text-primary-black text-3xl  md:text-4xl font-bold my-4">
          Хаанаас ч арилжах боломж
        </h1>
        <p className="text-primary-gray my-4">
          Хэзээ ч, хаанаас ч хамаагүй. Өөрийн хөрөнгөө удирд.
        </p>
        <div>
          <div className="flex border-b border-secondary-gray w-6/12 py-6">
            <div className="mr-6 w-14 h-14 flex items-center justify-center bg-primary-black rounded-full">
              <img className="w-6 h-6" src={appstore} alt="appstore" />
            </div>
            <div>
              <h2 className="text-primary-gray">Татаж авах</h2>
              <span className="text-xl md:text-2xl text-primary-black">
                Appstore
              </span>
            </div>
          </div>
          <div className="flex border-b border-secondary-gray w-6/12 py-6">
            <div className="mr-6 w-14 h-14 flex items-center justify-center bg-primary-black rounded-full ">
              <img className="w-6 h-6" src={google} alt="google" />
            </div>
            <div>
              <h2 className="text-primary-gray">Татаж авах</h2>
              <span className="text-xl md:text-2xl text-primary-black">
                Google play
              </span>
            </div>
          </div>
          <div className="flex border-b border-secondary-gray w-6/12 py-6">
            <div className="mr-6 w-14 h-14 flex items-center justify-center bg-primary-black rounded-full">
              <img className="w-6 h-6" src={appleOs} alt="appleos" />
            </div>
            <div>
              <h2 className="text-primary-gray">Татаж авах</h2>
              <span className="text-xl md:text-2xl text-primary-black">
                Mac OS
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={downloadPic} alt="download" />
      </div>
    </div>
  )
}
export default Download
