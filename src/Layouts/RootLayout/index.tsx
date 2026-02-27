import { Outlet } from "react-router-dom";
import Navbar from "../../components/Reusable/Navbar";
import Sidebar from "../../components/Reusable/Sidebar";

const index = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-(--font-inter)">
      <Navbar />
      <div className="flex justify-center">
        <div className="flex px-16 w-full">
          <Sidebar />
          <div className="w-full container mx-auto max-w-4xl">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
