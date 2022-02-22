import React, { createContext, useState } from "react";
export const HomeContext = createContext();
export const HomeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <HomeContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
