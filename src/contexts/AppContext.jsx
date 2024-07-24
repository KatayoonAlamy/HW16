import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ContactData, setContactData] = useState([
    {
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "",
    },
    {
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "",
    },
    {
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "",
    },
    {
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "",
    },
  ]);
  function handleChangeContacts(value) {
    setContactData(value);
  }
  return (
    <AppContext.Provider value={{ ContactData, handleChangeContacts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
