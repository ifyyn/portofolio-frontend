import { Outlet } from "react-router-dom";
import Image from "../../../assets/img.png";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between bg-white  p-4 gap-4 font-poppins">
        <div className="bg-white p-6 rounded-lg shadow-md w-[240px]">
          <img
            src={Image}
            alt="Beatrice Wambui"
            className="rounded-full w-32 mx-auto"
          />
          <h2 className="text-center text-xl text-green font-bold mt-4">
            WELCOME
          </h2>
          <p className="text-center text-gray-500">Fathul Arifin</p>

          <div className=" mt-8">
            <ul>
              <li className="">
                <a href="">Dashboard</a>
              </li>
              <li className="mt-5">
                <a href="">Profile</a>
              </li>
              <li className="mt-5">
                <a href="">Education</a>
              </li>
              <li className="mt-5">
                <a href="">Organizational</a>
              </li>
              <li className="mt-5">
                <a href="">Courses</a>
              </li>
              <li className="mt-5">
                <a href="">Skill</a>
              </li>
              <li className="mt-5">
                <a href="">Work</a>
              </li>
            </ul>
            <button className="bg-gradient-to-l from-green to-dark text-white rounded-md shadow-md font-semibold px-4 py-2 mt-14 w-full">
              Logout
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
