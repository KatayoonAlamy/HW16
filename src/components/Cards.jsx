import React, { useContext } from "react";
import Card from "./Card";
import AppContext from "../contexts/AppContext";

export default function CardWrapper() {
  const { ContactData } = useContext(AppContext);
  return (
    <div className=" grid grid-cols-12 p-5">
      {ContactData.map((item, index) => (
        <div key={index} className=" col-span-3">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}
