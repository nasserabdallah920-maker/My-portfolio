import { useRef, useState } from "react";
import Header from "./components/Header";
import ava2 from "./imgs/ava2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);

  const RefImg = useRef<HTMLDivElement>(null);

  function Show() {
    if (!show && RefImg.current !== null) {
      RefImg.current.classList.remove("hidden");
      RefImg.current.style.display = "flex";
      setShow(true);
    }
  }
  function DelShow() {
    if (show && RefImg.current !== null) {
      RefImg.current.classList.remove("flex");
      RefImg.current.style.display = "none";

      setShow(false);
    }
  }

  return (
    <div className="home-container bg-[#0F172A] w-[100%] h-[100vh]">
      <Header />
      <div className="home-body flex justify-between pl-[50px] pr-[50px] mt-[100px]">
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-[#38BDF8] text-5xl md:text-6xl font-bold">
            Hi, I'm Abdallah
          </h1>
          <h3 className="text-3xl text-white md:text-4xl">
            <span className="text-[#F7DF1E] font-semibold">Frontend React</span>{" "}
            Developer
          </h3>
          <p className="text-gray-300 max-w-md">
            I create responsive and interactive web applications using React and
            modern front-end technologies.
          </p>
          <nav className="small-nav flex gap-7 justify-center items-center mt-5 text-3xl">
            <Link
              to=""
              className="text-[#1877F2] hover:text-[#145dbf] hover:scale-125 transition-all duration-300"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              to=""
              className="text-[#25D366] hover:text-[#1da851] hover:scale-125 transition-all duration-300"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
            <Link
              to=""
              className="text-[#E4405F] hover:text-[#c13584] hover:scale-125 transition-all duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to=""
              className="text-[#0A66C2] hover:text-[#004182] hover:scale-125 transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              to=""
              className="text-[#333333] hover:text-[#6e5494] hover:scale-125 transition-all duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </nav>
          <Link
            to="/About"
            className="mt-4 bg-[#38bff8d7] flex justify-center text-[#0F172A] font-bold px-6 py-3 rounded-lg 
                   hover:scale-105 hover:bg-[#0BC5EA] transition-transform duration-300"
          >
            About Me{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <img
            onClick={Show}
            className="w-[300px] h-[380px] rounded-2xl transition-transform duration-500 hover:scale-105 cursor-zoom-in"
            src={ava2}
            alt="photo"
          />
        </div>
      </div>
      <div
        ref={RefImg}
        className=" fixed inset-0 hidden items-center justify-center bg-transparent bg-opacity-50 z-50"
      >
        <div className="relative p-6 rounded-xl">
          <i
            onClick={DelShow}
            className="fa-solid fa-xmark    absolute top-2 right-2 p-2 bg-[#38BDF8] rounded-full text-white text-xlshadow-lg hover:bg-[#0BC5EA] hover:scale-110 transition-transform duration-300 cursor-pointer"
          ></i>

          <img
            className="w-[500px] h-[590px] object-cover rounded-md"
            src={ava2}
            alt="Abdallah Photo"
          />
        </div>
      </div>
      <div id="About"></div>
    </div>
  );
}
