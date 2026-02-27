import { NavLink } from "react-router-dom";
import { components } from "../../constant/components";

const Sidebar = () => {
  return (
    <div className="w-52 border-r border-(--bg-neutral-200) h-[93vh] px-4 py-6">
      <div className="section-header">
        <h2 className="text-[12px] text-(--bg-neutral-500) font-semibold">
          Sections
        </h2>
        <div className="flex flex-col mt-4 gap-3 text-[13px] font-medium text-(--bg-neutral-900)">
          <NavLink to="/docs/component" className={"text-[12px]"}>
            Components
          </NavLink>
          <NavLink to="/docs/installation" className={"text-[12px]"}>
            Installation
          </NavLink>
          <NavLink to="/docs/themes" className={"text-[12px]"}>
            Themes
          </NavLink>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-[12px] text-(--bg-neutral-500) font-semibold">
          Components
        </h2>
        <div className="flex flex-col mt-4 gap-3 text-[13px] font-medium text-(--bg-neutral-900)">
          {components.map((comp) => (
            <NavLink
              key={comp.name}
              to={comp.url}
              className={({ isActive }) =>
                `text-[12px] ${isActive ? "text-(--bg-primary-500)" : ""}`
              }
            >
              {comp.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
