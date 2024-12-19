import React from "react";
import Image from "../../assets/img.png";
import Facebook from "../../assets/Icon/Facebook";
import Linkedin from "../../assets/Icon/LinkIn";
import Github from "../../assets/Icon/Github";
import Instagram from "../../assets/Icon/Instagram";
import Phone from "../../assets/Icon/Phone";
import Email from "../../assets/Icon/Email";
import Location from "../../assets/Icon/Location";
const Header = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-[720px] max-w-md mx-auto">
      <img
        src={Image}
        alt="Beatrice Wambui"
        className="rounded-full w-32 mx-auto"
      />
      <h2 className="text-center text-xl text-green-600 font-bold mt-4">
        Fathul <span className="text-dark">Arifin</span>
      </h2>
      <p className="text-center text-gray-500">FullStack Developer</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-dark bg-[#F2F5F9] p-4 rounded-full">
          <Facebook />
        </a>
        <a href="#" className="text-dark bg-[#F2F7FC] p-4 rounded-full">
          <Linkedin />
        </a>
        <a href="#" className="text-dark bg-[#F2F5F9] p-4 rounded-full">
          <Github />
        </a>
        <a href="#" className="text-dark bg-[#F2F5F9] p-4 rounded-full">
          <Instagram />
        </a>
      </div>
      <div className="mt-6 bg-[#F2F5F9] p-6 rounded-md">
        <p className="text-gray-700 flex items-center border-b p-2">
          <Phone />
          <span className="ml-4">+6285964385273</span>
        </p>
        <p className="text-gray-700 flex items-center mt-4 border-b p-2">
          <Email />
          <span className="ml-4"> fathularifin477@gmail.com</span>
        </p>
        <p className="text-gray-700 flex items-center mt-4 border-b p-2">
          <Location />
          <span className="ml-4">Nusa Tenggara Barat, Mataram</span>
        </p>
        <button className="bg-gradient-to-l from-green to-dark text-white rounded-md shadow-md font-semibold px-4 py-2 mt-14 w-full">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
