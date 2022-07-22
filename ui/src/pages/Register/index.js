import { Button } from "../../components/common/Button"
import { LargeText } from "../../components/common/LargeText"

const Signup = () => {
  return (
    <div className="font-semibold p-6 text-primary-black">
      <div className="mx-auto w-full md:w-10/12 lg:w-6/12 xl:w-3/12">
        <p className="text-center mb-8">
          Хэрвээ та бүртгэлтэй бол?{" "}
          <a href="/login" className="text-primary-blue hover:underline">
            Нэвтрэх
          </a>
        </p>
        <LargeText>
          Бүртгүүлэх
        </LargeText>
        <form className="my-4">
          <div className="mb-6">
            <div>
              <label
                for="phone"
                className="label"
              >
                Утас
              </label>
              <input
                type="tel"
                id="phone"
                className="input"
                placeholder="9412-6383"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="label"
            >
              Имейл
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="label "
            >
              Нууц үг
            </label>
            <input
              type="password"
              id="password"
              className="input "
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="confirm_password"
              className="label "
            >
              Нууц үгээ дахин бичнэ үү
            </label>
            <input
              type="password"
              id="confirm_password"
              className="input   "
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center p-2">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-6 h-6 bg-transparent"
                required
              />
            </div>
            <label for="remember" className="ml-2 font-medium bg-transparent">
              Та манай үйлчилгээний нөхцөлийг зөвшөөрч байна уу?{" "}
              <a href="/" className="text-primary-blue hover:underline ">
                үйлчилгэний нөхцөл
              </a>
              .
            </label>
          </div>
          <Button type="submit" styles='text-white bg-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full w-full sm:w-auto px-5 py-3 text-center  md:w-full'>
            Бүртгүүлэх
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Signup
