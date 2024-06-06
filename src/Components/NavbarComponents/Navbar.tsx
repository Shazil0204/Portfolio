import {
  faCode,
  faEnvelope,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  title?: string;
  pageLinks: { name: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title = "Portfolio", pageLinks }) => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
    setIsBarVisible(!isBarVisible);
  };

  return (
    <nav className="py-4 min-w-full flex justify-between fixed">
      <Link
        to={"/"}
        className="flex text-2xl hover:underline hover:underline-offset-4 hover:decoration-2 decoration-yellow-500 hover:-rotate-12 duration-200"
      >
        <FontAwesomeIcon icon={faCode} className="pt-1 px-2" />
        {title}
      </Link>
      <div className="hidden lg:flex mt-1">
        {/* Navigation Links */}
        <ul className="flex ">
          <li>
            {pageLinks.map((link) => (
              <>
                {link.name !== "Contact" && (
                  <Link
                    className="text-white duration-300 p-5 rounded-xl underline underline-offset-4 hover:text-yellow-500 mx-1 font-mono"
                    to={link.path}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                )}
              </>
            ))}
          </li>
        </ul>
      </div>
      <Link
        to="/contact"
        className="hidden lg:block px-2 pt-1 rounded-xl bg-white text-black mx-2 hover:bg-green-500 duration-300 hover:-rotate-12"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Contact me
      </Link>

      {/* here is the code for the navbar btn that will be visible on mobile */}

      <button
        id="NavBarBtn"
        onClick={toggleBar}
        className={`${isBarOpen ? "hidden" : ""} lg:hidden`}
      >
        <FontAwesomeIcon className="pr-2" icon={faBars} />
      </button>

      {isBarVisible && (
        <ul className="pr-2 lg:hidden">
          <li className="bg-gray-700 py-2 rounded-lg text-center">
            {pageLinks.map((link) => (
              <Link
                className="flex flex-row bg-gray-500 text-white duration-300 rounded-xl mb-5 p-1 text-center hover:text-yellow-500 hover:bg-white/10 mx-1 font-mono"
                to={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleBar}
              className="text-red-500 duration-300 rounded-xl p-1 text-center hover:text-red-700 mx-1 font-mono"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
