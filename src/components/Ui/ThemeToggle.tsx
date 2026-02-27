import { observer } from "@legendapp/state/react";
import { themeContext } from "../../context/theme.store";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

const ThemeToggle = observer(() => {
  const { toggleTheme, theme } = themeContext;
  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme.get() === "light" ? (
        <PiToggleLeftFill size={18} color="var(--bg-neutral-900)" />
      ) : (
        <PiToggleRightFill size={18} color="var(--bg-neutral-900)" />
      )}
    </div>
  );
});

export default ThemeToggle;
