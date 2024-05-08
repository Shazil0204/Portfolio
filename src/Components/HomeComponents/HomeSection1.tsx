import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface HomeSection1Props {
  scrollToSection2: () => void;
}

const HomeSection1: React.FC<HomeSection1Props> = ({ scrollToSection2 }) => {
  return (
    <div className="min-h-screen min-w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex justify-center">
        <img className="top-0 right-0 -z-10 hidden lg:flex shadow-b-2xl" src="/MainImg-removebg-preview.png"></img>
        <div className="font-mono  px-10">
          <p className="text-[4vh] lg:text-[3vw] text-center lg:text-left">
            Hej, and <span className="text-green-500">Welcome</span> to
            <br/>
            <strong className="text-[5vh] text-yellow-500">
              Shazil Shahid's
            </strong>{" "}
            Portfolio
          </p>
          <p className="text-2xl hidden lg:flex shadow-2xl text-white p-2 rounded-lg text-justify">
            As a programming student based in Denmark, I'm eager to embark on
            new challenges and contribute to innovative projects. Explore my
            portfolio to discover my journey in the world of programming
          </p>
        </div>
      </div>
      <button
        onClick={scrollToSection2}
        className="absolute bottom-5 text-center w-full"
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          className="animate-bounce p-4 rounded-full bg-white/10 hover:bg-white hover:text-black duration-100"
        />{" "}
      </button>
    </div>
  );
};

export default HomeSection1;
