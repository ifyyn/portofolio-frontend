import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-4 gap-6 m-auto">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layouts;
