import {
  faCode,
  faEnvelope,
  faBars,
  faX,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  title?: string;
  links: { name: string; path: string }[];
  languageLinks: { name: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({
  title = "Portfolio",
  links,
  languageLinks,
}) => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
    setIsBarVisible(!isBarVisible);
  };

  const onClickDropDown1 = () => {
    setDropDown1(!dropDown1);
  };

  const onClickDropDown2 = () => {
    setDropDown2(!dropDown2);
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
            {links.map((link) => (
              <Link
                className="text-white duration-300 p-5 rounded-xl underline underline-offset-4 hover:text-yellow-500 mx-1 font-mono"
                to={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </li>
          <button className="ml-5" onClick={onClickDropDown1}>
            Languages{" "}
            <FontAwesomeIcon icon={dropDown1 ? faArrowUp : faArrowDown} />
            {dropDown1 && (
              <div className="mt-5 top-12 absolute space-y-5">
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">C#</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">HTML</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">CSS</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">JS</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">PHP</p>
              </div>
            )}
          </button>
          <button className="ml-5" onClick={onClickDropDown2}>
            Framework{" "}
            <FontAwesomeIcon icon={dropDown2 ? faArrowUp : faArrowDown} />
            {dropDown2 && (
              <div className="mt-5 top-12 absolute space-y-5">
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">C#</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">HTML</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">CSS</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">JS</p>
                <p className="bg-yellow-600 p-1 px-6 rounded-xl">PHP</p>
              </div>
            )}
          </button>
        </ul>
      </div>
      <Link
        to="/contact"
        className="hidden lg:block px-2 rounded-xl bg-white text-black mx-2 hover:bg-green-500 duration-300 hover:-rotate-12"
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
            {links.map((link) => (
              <Link
                className="flex flex-row bg-gray-500 text-white duration-300 rounded-xl mb-5 p-1 text-center hover:text-yellow-500 hover:bg-white/10 mx-1 font-mono"
                to={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
            <li>languages</li>
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
