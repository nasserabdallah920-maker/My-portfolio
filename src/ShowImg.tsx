import ava2 from "./imgs/ava2.jpg";
export default function ShowImg() {
  return (
    <div id="ahmed" className=" inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
      <div className="relative bg-[#334155] p-4 rounded-xl shadow-lg">
        <i className="fa-solid fa-xmark absolute top-4 right-4 cursor-pointer text-white text-xl"></i>


        <img
          className="w-[500px] h-[590px] object-cover rounded-md"
          src={ava2}
          alt="Abdallah Photo"
        />
      </div>
    </div>
  );
}
