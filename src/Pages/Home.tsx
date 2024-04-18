import React, { useRef } from "react";
import transition from "../Components/transition";
import HomeSection1 from "../Components/HomeComponents/HomeSection1";
import HomeSection2 from "../Components/HomeComponents/HomeSection2";

const Home: React.FC = () => {
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HomeSection1 scrollToSection2={scrollToSection2} />
      <div ref={section2Ref}>
        <HomeSection2 />
      </div>
    </div>
  );
};

export default transition(Home);
