import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Offers from "./Pages/Offers";

function App() {
  const location = useLocation();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "I can", path: "/iCan" },
    { name: "Offers", path: "/offers" },
  ];

  return (
    <div className="text-white">
      <Navbar
        pageLinks={pageLinks}
      />
      <Footer/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
