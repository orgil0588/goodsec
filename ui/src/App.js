import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Market from "./pages/Market"
import Graphic from "./pages/Graphic"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Footer from "./components/layout/Footer"
import Heatmap from './pages/Heatmap';



const App = () => {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart/:code" element={<Graphic />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treemap" element={<Heatmap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App