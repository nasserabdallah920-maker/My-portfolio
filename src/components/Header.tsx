import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const header = useRef<HTMLHeadingElement | null>(null);
  const [appear, setAppear] = useState<boolean>(false);
  function show() {
    if (!appear) {
      setAppear(true);
      header.current?.classList.remove("hidden");
      header.current?.classList.add("flex");
    } else {
      setAppear(false);
      header.current?.classList.add("hidden");
      header.current?.classList.remove("flex");
    }
  }

  const links: { link: string; path: string }[] = [
    { link: "Home", path: "/" },
    { link: "About Me", path: "/About" },
    { link: "Projects", path: "/projects" },
    { link: "Skills", path: "/Skills" },
    { link: "Contact Us", path: "/contact" },
  ];

  const showLinks = links.map((element) => (
    <Link
      className="px-4 py-2 rounded-xl transition-colors duration-500 hover:bg-[#0BC5EA]"
      to={element.path}
    >
      {element.link}
    </Link>
  ));
  return (
    <div className="header-container flex justify-center pt-5 items-center">
      <button
        onClick={show}
        className="block sm:hidden fixed mt-8 bg-[#38bff8d7] text-white px-4 py-2 rounded-lg"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <header
        ref={header}
        className="bg-[#38bff8d7] z-40 hidden mt-[300px] flex-col sm:flex-row 2xl:w-5xl xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl text-white sm:flex sm:justify-around p-[10px] rounded-2xl fixed sm:mt-[50px]"
      >
        {showLinks}
      </header>
    </div>
  );
}
