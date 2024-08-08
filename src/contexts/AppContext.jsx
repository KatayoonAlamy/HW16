import { createContext, useState } from "react";

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
  const [refresh, setRefresh] = useState(false);
  const refreshData = () => {
    setRefresh(!refresh);
  };
  function handleChangeContacts(value) {
    setContactData(value);
  }
  return (
    <AppContext.Provider
      value={{ ContactData, handleChangeContacts, refreshData, refresh }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
