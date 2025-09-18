import { Link } from "react-router-dom";
import Header from "./components/Header";
import ava3 from "./imgs/ava3.jpg";

export default function About() {

  const birthDate = new Date(2004,1,11); 
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  const adjustedAge = m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;

  return (
    <div className="about-container w-[100%] min-h-[100vh] bg-[#0F172A] text-white pb-3">
      <Header />
      <div className="about-body max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 mt-20 px-5">
        <div className="avatar flex-shrink-0">
          <img
            className="w-[300px] h-[380px] rounded-2xl transition-transform duration-500 hover:scale-105 cursor-zoom-in"
            src={ava3}
            alt="Avatar"
          />
        </div>

        <div className="info flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Hi, I'm Abdallah Nasser</h1>
          <p className="text-lg text-gray-300">
            I am a Computer Science student, graduating in 2026, 
            passionate about web development. I started with frontend development, 
            completing a 60-hour foundational course at ITI in   
            <span className="text-[#E44D26] font-semibold"> HTML</span>,   
            <span className="text-[#264DE4] font-semibold"> CSS</span>, and  
            <span className="text-[#F7DF1E] font-semibold px-1 rounded-md"> JavaScript</span>, 
            where I built a simple e-commerce project. Since then, I have specialized in 
            frontend, mastering <span className="text-[#61dafb] font-semibold">React</span> with JavaScript and TypeScript, 
            and I can build responsive websites for all screen sizes. I learn quickly, adapt to new tools, 
            and use <span className="text-[#38bff8] font-semibold">AI</span> to create efficient websites. Soon, I will start learning backend 
            development with <span className="text-[#f05032] font-semibold">Node.js</span> to become a 
            <span > full-stack<span className="text-green-800">M</span><span>E</span><span className="text-[#61DAFB]">R</span><span className="text-green-600">N</span> developer</span>.
          </p>

          <p className="text-gray-300">
            <strong>Birth Date:</strong> February 11, 2004 <br />
            <strong>Age:</strong> { adjustedAge } <br />
            <strong>Education:</strong> Bachelor of Computer Science (in progress) <br />
            <strong>Phone:</strong> 01129757778 <br />
            <strong>Email:</strong> nasserabdallah920@gmail.com <br />
            <strong>City:</strong> Aswan
          </p>
        </div>
      </div>

      <nav className="small-nav flex gap-7 justify-center items-center mt-5 text-3xl">
        <Link to="https://www.facebook.com/share/1CFQxjAFEo/" className="text-[#1877F2] hover:text-[#145dbf] hover:scale-125 transition-all duration-300">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="https://wa.me/qr/6UFKOOJUV6YCB1" className="text-[#25D366] hover:text-[#1da851] hover:scale-125 transition-all duration-300">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
        <Link to="https://www.instagram.com/abdalah_an1/" className="text-[#E4405F] hover:text-[#c13584] hover:scale-125 transition-all duration-300">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/abdallah-nasser-427718317/" className="text-[#0A66C2] hover:text-[#004182] hover:scale-125 transition-all duration-300">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/nasserabdallah920-maker" className="text-[#333333] hover:text-[#6e5494] hover:scale-125 transition-all duration-300">
          <i className="fa-brands fa-github"></i>
        </Link>
      </nav>
    </div>
  );
}
