import React, { createContext, useReducer, useContext } from "react";

export const store = createContext();
function StateProvider({ reducer, initialState, children }) {
  return (
    <store.Provider value={useReducer(reducer, initialState)}>
      {children}
    </store.Provider>
  );
}

export default StateProvider;

export const useStateValue = () => useContext(store);
