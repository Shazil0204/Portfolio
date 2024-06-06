import {
  faCode,
  faEnvelope,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  title?: string;
  pageLinks: { name: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  title = "Portfolio",
  pageLinks,
}) => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
    setIsBarVisible(!isBarVisible);
  };

  return (
    <nav className="py-4 min-w-full flex justify-between fixed">
      {/* here is the code for the Sidebar btn that will be visible on mobile */}

      <Link
        to={"/"}
        className="flex text-2xl hover:underline hover:underline-offset-4 hover:decoration-2 decoration-yellow-500 hover:-rotate-12 duration-200"
      >
        <FontAwesomeIcon icon={faCode} className="pt-1 px-2" />
        {title}
      </Link>

      <button
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

export default Sidebar;
