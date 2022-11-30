import { useState, useLayoutEffect } from "react";

type Theme = "dark" | "light";

const useSetTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    JSON.parse(localStorage.getItem("theme") as Theme) || "light"
  );
  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useLayoutEffect(() => {
    const html = window.document.documentElement;
    html.classList.remove(colorTheme);
    html.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleSetTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return { handleSetTheme, theme };
};

export default useSetTheme;
