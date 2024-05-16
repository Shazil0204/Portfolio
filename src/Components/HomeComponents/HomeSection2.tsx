import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomeSection2() {
  const BTNLink = [
    { name: "Languages", path: "/Languages" },
    { name: "Frameworks", path: "/Frameworks" },
    { name: "Libraries", path: "/Libraries" },
  ];

  return (
    <div className="font-mono min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="xl:flex gap-2 space-y-5 container p-10 lg:mx-auto text-justify">
        <div className="mt-10 order-1 xl:order-2 xl:w-1/2 flex justify-center items-center">
          <img src="/200.gif"></img>
        </div>
        <div className="order-2 xl:order-1 xl:w-1/2">
          <div className="w-full p-[1px] mb-2 bg-gradient-to-r from-emerald-500 via-indigo-500 to-emerald-500"></div>
          <h1 className="text-4xl font-bold mb-2 text-green-500">
            Welcome to{" "}
            <strong className="text-yellow-500">Shazil Shahid's</strong>{" "}
            Portfolio
          </h1>
          <div className="w-full p-[1px] mb-4 bg-gradient-to-r from-emerald-500 via-indigo-500 to-emerald-500"></div>
          <p className="text-lg mb-8">
            Greetings! I'm Shazil Shahid, an aspiring coder fueled by an
            insatiable curiosity for all things tech.
          </p>
          <p className="text-lg mb-6">
            I'm a 20-year-old programming student currently enrolled at ZBC
            Ringsted, immersed in the challenges of H2. The journey so far has
            been immensely rewarding, with each day presenting exciting new
            opportunities for growth.
          </p>
          <p className="text-center">
            Beneath, behold an array of skills honed and experiences embraced.
          </p>
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-center lg:justify-between items-center my-10 mt-5">
            {BTNLink.map((btn) => (
              <Link
                to={btn.path}
                key={btn.name}
                className="text-xl w-full flex flex-col lg:flex-row items-center justify-between rounded-lg lg:w-1/4 p-2 drop-shadow-[0_5px_5px_rgba(255,255,255,1)] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0)] bg-gradient-to-r from-blue-500 to-purple-500 duration-300"
              >
                {btn.name}{" "}
                <FontAwesomeIcon className="pt-1" icon={faArrowRight} />
              </Link>
            ))}
          </div>
          <p className="text-center">
            For further details, feel free to reach out to me
          </p>
          <div className="flex justify-center items-center">
            <Link
              className="mt-4 p-2 bg-gray-900 text-yellow-500 rounded"
              to={"/contact"}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
