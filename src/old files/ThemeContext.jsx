// Create a file named CountdownContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import moment from 'moment-timezone';

export const CountdownContext = createContext();

export const useCountdown = () => useContext(CountdownContext);

export function CountdownProvider ({ children }) {
  const [activeMode, setActiveMode] = useState(localStorage.getItem( "activeMode" ));
  const [targetDate, setTargetDate] = useState(moment.tz( activeMode, 'Europe/London'));

  console.log( targetDate )

  useEffect(() => {
    localStorage.setItem("activeMode", activeMode);
  }, [activeMode]);

  const contextValue = {
    setTargetDate,
    targetDate,
    activeMode,
    setActiveMode,
  };

  return (
    <CountdownContext.Provider value={ contextValue }>
      {children}
    </CountdownContext.Provider>
  );
};

