import Download from "./components/Download"
import Hero from "./components/Hero"
import Products from "./components/Products"
import MarketFeature from "./components/MarketFeature"
import ServiceComponent from "./components/ServiceComponent"
import Section from "../../components/common/Section"
import Container from "../../components/common/Container"
import HorizontalSlider from "./components/HorizontalSlider"

function App() {
  return (
    <Container styles='container mx-auto overflow-hidden px-2'>
        <Hero />
        <HorizontalSlider />
        <Section title="Бүтээгдэхүүн" link="#"/>
        <Products />
        <Section title="Зах зээлийн хураангуй" link="/market?class=all&sort=marketcap&offset=20" />
        <MarketFeature />
        <Section title="Хэдхэн хоромд хөрөнгө оруулагч бол" link="/service" />
        <ServiceComponent />
        <Download />
     
    </Container>
  )
}

export default App
