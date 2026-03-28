import { createContext, useState, useEffect } from "react";
import { useUser } from "./useUser";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const user = useUser();

  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
};
