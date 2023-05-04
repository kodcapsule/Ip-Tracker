import { Children, createContext, useState } from "react";

export const IpData = createContext();

const ContextData = ({ children }) => {
  const [ip, setIP] = useState();
  return <IpData.Provider value={{ ip, setIP }}>{children}</IpData.Provider>;
};

export default ContextData;
