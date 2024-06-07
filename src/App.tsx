import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Offers from "./Pages/Offers";
import Contact from "./Pages/Contact";
import CSS from "./Pages/Languages/CSS";
import SQL from "./Pages/Languages/SQL";
import Footer from "./Components/Footer";
import PHP from "./Pages/Frameworks/PHP";
import Languages from "./Pages/Languages";
import Libraries from "./Pages/Libraries";
import HTML from "./Pages/Languages/HTML";
import SCSS from "./Pages/Libraries/SCSS";
import Frameworks from "./Pages/Frameworks";
import React from "./Pages/Libraries/React";
import CSharp from "./Pages/Languages/CSharp";
import Bootstrap from "./Pages/Frameworks/Bootstrap";
import JavaScript from "./Pages/Languages/JavaScript";
import TypeScript from "./Pages/Languages/TypeScript";
import TailwindCSS from "./Pages/Libraries/TailwindCSS";
import Navbar from "./Components/NavbarComponents/Navbar";
import Sidebar from "./Components/NavbarComponents/Sidebar";
import useWindowDimensions from "./hooks/useWindowDimensions";
import ICan from "./Pages/iCan"

function App() {
  const location = useLocation();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "I can", path: "/iCan" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const navigationComponent =
    useWindowDimensions().width > 1024 ? (
      <Navbar pageLinks={pageLinks} />
    ) : (
      <Sidebar pageLinks={pageLinks} />
    );
  return (
    <div className="text-white">
      {navigationComponent}
      <Footer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* These pages are the most common page that user will be using */}
          <Route path="/about" element={<About />} />
          <Route path="/iCan" element={<ICan />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />

          {/* This is mostly about What i know about */}
          <Route path="/Languages" element={<Languages />} />
          <Route path="/Libraries" element={<Libraries />} />
          <Route path="/Frameworks" element={<Frameworks />} />

          {/* My Languages Pages */}
          <Route path="/SQL" element={<SQL />} />
          <Route path="/CSS" element={<CSS />} />
          <Route path="/HTML" element={<HTML />} />
          <Route path="/CSharp" element={<CSharp />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/TypeScript" element={<TypeScript />} />

          {/* My Libraries Pages */}
          <Route path="/SCSS" element={<SCSS />} />
          <Route path="/React" element={<React />} />
          <Route path="/TailwindCSS" element={<TailwindCSS />} />

          {/* My Framework Pages */}
          <Route path="/PHP" element={<PHP />} />
          <Route path="/Bootstrap" element={<Bootstrap />} />

          {/* Main Page */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
