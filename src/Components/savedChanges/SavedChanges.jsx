// SavedChanges.js
import { useEffect, useContext } from "react";
import ThemeContext from "../CountdownContext";
import Navbar from "../navbar/Navbar";

const Saved = () => {
  const { isDarkMode, isLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    if (document.body) {
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navButton = document.querySelector(".navbutton");
    const darkButton = document.querySelector(".dark-button");
    const container = document.querySelector(".container");

    if (navbar) {
      navbar.classList.toggle("visible", isLeftMode);
    }
    if (navButton) {
      navButton.classList.toggle("visible", isLeftMode);
    }
    if (darkButton) {
      darkButton.classList.toggle("visible", isLeftMode);
    }
    if (container) {
      container.classList.toggle("visible", isLeftMode);
    }
  }, [isLeftMode]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Saved;