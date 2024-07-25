import { createContext, useId, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ContactData, setContactData] = useState([
    {
      id: 2,
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "دوست",
    },
    {
      id: 1,
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "برادر",
    },
    {
      id: 3,
      name: "asghar",
      family: "molayi",
      number: 1234567,
      email: "sdadsa@adsadsa.sdads",
      relationship: "",
    },
    {
      id: 4,
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
