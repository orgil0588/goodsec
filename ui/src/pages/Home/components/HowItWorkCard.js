const HowItWorkCard = ({ image, step, title, description }) => {
  return (
    <div className="text-primary-gray mx-4 mb-14 lg:mb-0">
      <div className="justify-items-center">
        <img src={image} alt="step-1" className="mx-auto lg:mb-14" />
      </div>
      <div>
        <h1 className="text-xs mb-6 font-bold">{step}</h1>
        <h2 className="text-primary-black mb-4 font-semibold text-lg">
          {title}
        </h2>
        <p className="w-10/12 mx-auto">{description}</p>
      </div>
    </div>
  )
}
export default HowItWorkCard
