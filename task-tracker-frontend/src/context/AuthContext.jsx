
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const logout = () => {
  localStorage.removeItem("token");
  setToken(null);
};


export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const saveToken = (t) => {
    localStorage.setItem("token", t);
    setToken(t);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
