import { useContext, useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import ThemeContext from "../CountdownContext";

import "./navbar.css";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import "../../Stylesheets/visible.css";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode} = useContext(ThemeContext);
  const location = useLocation(); // this will help recognise wchich page your in


  function isLinkActive(pathname) {
    if (location.pathname === pathname) {
      return "active";
    } else {
      return "";
    }
  }


  return (
    <>
      <div className="navbar" id="navbar">
        {" "}
        {/*Navigation Bar*/}
        <nav>
          <ul>
            <Link to="/Bursary" name="Bursary" className={isLinkActive("/Bursary")}>
              Final Bursary
            </Link>
            <br />
            <Link to="/Award" name="Award" className={isLinkActive("/Award")}>
              Award Release Date
            </Link>
            <br />
            <Link to="/Grade" name="Grade" className={isLinkActive("/Grade")}>
              Grade Results Date
            </Link>
            <br />
            <Link to="/Invitation" name="Invitation" className={isLinkActive("/Invitation")}>
              Invitation End Date
            </Link>
            <br />
            <Link to="/Graduation" name="Graduation" className={"link " +isLinkActive("/Graduation")}>
              Graduation Ceremony Date
            </Link>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => {
          setIsLeftMode(!isLeftMode);
        }}
        className="navbutton"
      >
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
      </button>

      <button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        className="dark-button"
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>

      <Outlet />
    </>
  );
};

export default Navbar;
