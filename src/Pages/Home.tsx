import { Link } from "react-router-dom";
import transition from "../Components/transition";

function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center item-center h-screen">
          <p>Hello</p>
          <p>I'm Shazil A programmer</p>
          <p>
            I am a beginner program with experience in creating website using
            ASP.NET and React with Typescript
          </p>
          <Link to={"/contact"}>Contact Me</Link>
        </div>
        <img
          className="absolute top-0 right-0 h-full w-full -z-10"
          src="./MainImg.jpg"
        ></img>
      </div>
      <div className="h-screen text-black">hello </div>
    </>
  );
}

export default transition(Home);
