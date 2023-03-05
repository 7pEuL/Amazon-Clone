import React, { createContext, useContext, useReducer } from "react";

// DataLayer
export const StateContext = createContext();

// Providing DataLayer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Push n Pull information from z DataLayer
export const useStateValue = () => useContext(StateContext);
