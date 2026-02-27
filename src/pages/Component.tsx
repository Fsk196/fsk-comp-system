import { NavLink } from "react-router-dom";
import { components } from "../constant/components";

const Component = () => {
  return (
    <div className="py-4">
      <h1 className="text-3xl text-(--bg-neutral-700) font-bold ">
        Components
      </h1>
      <p className="text-(--bg-neutral-600) text-sm mt-2">
        Here you can find all the components available in the library. <br />
        We are working on adding more components.
      </p>

      <div className="components grid grid-cols-3 gap-6 mt-6">
        {components.map((comp) => (
          <div key={comp.name} className="comp-one transition-shadow">
            <NavLink
              to={comp.url}
              className="text-sm text-(--bg-neutral-700) font-medium hover:underline hover:underline-offset-3"
            >
              {comp.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
