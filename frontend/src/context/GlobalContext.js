import React, { useReducer } from "react";

const GLOBAL_CONSTANTS = {
  PROTOCOL: "http",
  IP: "localhost",
  PORT: "3000",
};

const initialState = {
  rootUrl: `${GLOBAL_CONSTANTS.PROTOCOL}://${GLOBAL_CONSTANTS.IP}:${GLOBAL_CONSTANTS.PORT}`,
};

const GlobalContext = React.createContext(initialState);

const initialStateReducerFunction = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const GlobalContextProvider = (props) => {
  const [initialStateVariable, initialStateDispatchFunction] = useReducer(
    initialStateReducerFunction,
    initialState
  );

  return (
    <GlobalContext.Provider
      value={{ initialStateVariable, initialStateDispatchFunction }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
