import { SiReactos } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { Input } from "../Ui/Input";
import { FaGithub } from "react-icons/fa6";
import ThemeToggle from "../Ui/ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full px-16 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SiReactos size={24} color="var(--bg-primary-500)" />
        <h2 className="text-xl font-medium text-(--bg-primary-500)">
          FSK Comps
        </h2>
      </div>

      <div className="links text-(--bg-neutral-900) flex items-center gap-4 font-medium text-sm">
        <NavLink to="/docs/component" className="">
          Components
        </NavLink>
        <NavLink to="/component">Blocks</NavLink>
      </div>

      <div className=" flex items-center gap-8">
        <Input placeholder="Search Components..." />
        <div className="flex items-center gap-1">
          <FaGithub size={18} color="var(--bg-neutral-900)" />
          <h2 className="text-(--bg-neutral-600)">10.1k</h2>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
