import React, { createContext, useContext, useReducer } from "react";

// Preapres the data layer

export const StateContext = createContext();


//wrap our data and provixde the dat6a layer

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider >
);


// pull information form the data layer

export const useStateValue = () => useContext(StateContext);