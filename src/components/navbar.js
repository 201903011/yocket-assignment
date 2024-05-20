import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/use_darmode";

function Navbar() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className=" bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="pb-2 pt-2 pr-8 flex flex-wrap items-center justify-between">
        <div></div>
        <DarkModeSwitch
          style={{ marginBottom: "1rem" }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </div>
  );
}

export default Navbar;
