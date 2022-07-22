import { LargeText } from "./LargeText"

const Section = (props) => {
  return (
    <section className="w-full text-center md:text-left my-4 mt-40">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <LargeText>
          {props.title}
        </LargeText>
        <button className="secondary-btn">
          <a href={`${props.link}`}>Дэлгэрэнгүй</a>
        </button>
      </div>
    </section>
  )
}
export default Section
