import { Route, useLocation, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Services />} />
        </Routes>
    </div>
  )
}

export default App
