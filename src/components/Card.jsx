import React from "react";

export default function Card(props) {
  const { name, family, number, relationship, email } = props;
  return (
    <div className="flex flex-col p-4 rounded-xl gap-3 bg-blue-900 text-white w-72">
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{family}</p>
        <div className="flex gap-3">
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
      <p>{number}</p>
      <p>{relationship}</p>
      <p>{email}</p>
    </div>
  );
}
