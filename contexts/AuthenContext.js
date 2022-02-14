import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthenProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLogined,
        setIsLogined
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
