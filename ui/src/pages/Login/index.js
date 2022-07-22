import { Button } from "../../components/common/Button"
import { LargeText } from "../../components/common/LargeText"

const Login = () => {
  return (
    <div className="font-semibold p-6 text-primary-black">
      <div className="mx-auto w-full md:w-10/12 lg:w-6/12 xl:w-3/12">
        <p className="text-center mb-8">
          Хэрвээ та бүртгэлгүй бол?{" "}
          <a href="/signup" className="text-primary-blue hover:underline">
            Бүртгүүлэх
          </a>
        </p>
        <LargeText>
          Бүртгүүлэх
        </LargeText>
        <form className="form">
          <div className="mb-6">
            <label
              for="email"
              className="label"
            >
              Нэвтрэх нэр
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
              className="input"
              placeholder="•••••••••"
              required
            />
          </div>
          <Button type="submit" styles={'text-white bg-primary-blue hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-full w-full sm:w-auto px-5 py-3 text-center md:w-full'}>
            Нэвтрэх
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Login
