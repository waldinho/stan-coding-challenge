import React, { useContext, useState, useEffect, createContext } from "react";
import { Context } from '../types/general1'

const APIContext = createContext({ data: [], isloading: false, isError: false } as Context)

const APIContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/titles")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setIsLoading(false);
        }),
        err => {
          setIsError(true);
        }
  }, []);

  return (
    <APIContext.Provider value={{ data, isloading, isError }}>
      {children}
    </APIContext.Provider>
  );
}

export default APIContextProvider;

export const useAPI = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}