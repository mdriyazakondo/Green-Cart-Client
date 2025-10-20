import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const ApppContext = createContext();

export const ApppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const valueInfo = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
  };

  return (
    <ApppContext.Provider value={valueInfo}>{children}</ApppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ApppContext);
};
