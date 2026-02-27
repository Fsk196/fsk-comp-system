import { observable } from "@legendapp/state";

export const themeContext = observable({
  theme: "light",
  toggleTheme: () => {
    const html = document.documentElement;

    const currentTheme = themeContext.theme.get();
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    themeContext.theme.set(nextTheme);

    if (nextTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  },
});
