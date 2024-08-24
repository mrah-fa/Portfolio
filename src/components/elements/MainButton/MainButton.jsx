import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext("dark");
export default function MainButton({ mode }) {
  const [theme, setTheme] = useState(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handelSwitchMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="max-w-7 w-full h-7"
      id="btn"
      onClick={handelSwitchMode}
      type="button"
    >
      {theme == "dark" ? (
        <img src="/img/sun.png" className="w-7 h-7 " />
      ) : (
        <img src="/img/moon.png" className="w-7 h-7"></img>
      )}
    </button>
  );
}
