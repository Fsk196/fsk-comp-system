import { Outlet } from "react-router-dom";
import Navbar from "../../components/Reusable/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-(--font-inter)">
      <Navbar />
      <div className="flex container mx-10">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
