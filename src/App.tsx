import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const location = useLocation();

  let navlinks = [
    { name: "Home" , path: "/" },
    { name: "About" , path: "/about"   },
    { name: "Contact" , path: "/contact"   },
    { name: "Login" , path: "/login"   },
  ];

  let languageLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="text-white">
      <Navbar links={navlinks} languageLinks={languageLinks}/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
