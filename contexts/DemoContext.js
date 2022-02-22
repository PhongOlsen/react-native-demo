import React, { createContext, useContext, useState } from "react";
import api from "../api/api";
import { HomeContext } from "./HomeContext";

export const DemoContext = createContext();

export const DemoProvider = ({ children }) => {
  const { setIsLoading } = useContext(HomeContext);
  const [demo, setDemo] = useState([]);

  const handleCallApi = async (params, callback) => {
    setIsLoading(true);
    try {
      const response = await api.get("/search", {
        params: params,
      });
      const { data, status } = response;
      if (status === 200) {
        if (callback) callback(data);
        setDemo(data.businesses);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <DemoContext.Provider value={{ demo, handleCallApi }}>
      {children}
    </DemoContext.Provider>
  );
};
