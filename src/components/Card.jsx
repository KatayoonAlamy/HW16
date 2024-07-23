import React from "react";

export default function Card() {
  return (
    <div className="flex flex-col p-4 rounded-xl gap-3 bg-blue-900 text-white w-72">
      <div className="flex justify-between">
        <p>name</p>
        <div className="flex gap-3">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
      <p>09052966476</p>
      <p>freind</p>
      <p>katayoon.@gmail.com</p>
    </div>
  );
}
