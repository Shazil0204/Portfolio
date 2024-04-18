import { Link } from "react-router-dom";

interface NavbarProps {
  title?: string
  links: { name: string, path: string }[]
}

const Navbar:React.FC<NavbarProps> =({title= "Portfolio", links }) => {

  return (
    <>
      <nav className="bg-gray-800 py-4 drop-shadow-[0_5px_5px_rgba(31,41,55,1)] rounded-b-xl">
        <div className="mx-auto flex justify-between items-center px-10">
          {/* Project Name */}
          <Link to="/" className="text-white hover:text-gray-300 text-4xl">
            {title}
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              {
                links.map((link) => (
                  <Link className="text-white hover:bg-white/25 duration-300 p-5 rounded-xl" to={link.path} key={link.name} > {link.name}</Link>
                ))
              }
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;