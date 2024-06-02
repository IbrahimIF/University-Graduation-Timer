import React from "react";
import { useEffect, useContext } from "react";
import ThemeContext from "../../Components/CountdownContext";
import "./Graduation.css"

function Graduation() {

  const { isLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  return (
    <div className="container">
<div className="box">
    <div className="textContainer">
      <br /> <br />
      <div className="title">
        <span className="block-title"></span>
        <h1 className="firstText">About me</h1>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Graduation;