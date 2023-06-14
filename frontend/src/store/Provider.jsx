import { useReducer } from "react";
import { Context } from "./Store";
import { initialState, reducer } from "./Reducer";

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
