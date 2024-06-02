// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./Components/CountdownContext";

import Saved from "./Components/savedChanges/SavedChanges";
import Award from "./Sections/Award/Award";
import Bursary from "./Sections/Bursary/Bursary";
import Grade from "./Sections/Grade/Grade";
import Graduation from "./Sections/Graduation/Gradution";
import Invitaon from "./Sections/Invitation/Invitation";
//import from "./Sectionss/";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") === "true");
  const [isLeftMode, setIsLeftMode] = useState(localStorage.getItem("isLeftMode") === "true");


  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    localStorage.setItem("isLeftMode", isLeftMode);
  }, [isDarkMode, isLeftMode]);
  
 
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode }}>
        <Routes>
          <Route path="/" element={<Saved />}>
          <Route path="/Final Bursary" element={<Bursary />} />
            <Route path="/Award Release Date" element={<Award />} />
            <Route path="/Grade Results Date" element={<Grade />} />
            <Route path="/Invitation End Date" element={<Invitaon />} />
            <Route path="/Graduation Ceremony Date" element={<Graduation />} />
          </Route>
          <Route path="/" element={<Grade />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;