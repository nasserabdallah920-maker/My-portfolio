import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container flex justify-center pt-5 items-center">
      <header className="bg-[#38bff8d7] w-[1000px] text-white flex justify-around p-[10px] rounded-2xl fixed mt-[50px]">
        <Link
          className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
          to="/"
        >
          Home
        </Link>

        <Link
          className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
          to="/About"
        >
          About Me
        </Link>
         

        <Link
          className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
          to="/Skills"
        >
          Skills
        </Link>

        <Link
          className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
          to="/contact"
        >
          Contact Us
        </Link>
      </header>
    </div>
  );
}
