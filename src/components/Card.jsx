import React, { useContext, useId } from "react";
import { getContactList } from "../utils/ApiCalls";
import Swal from "sweetalert2";
// import AppContext from "../contexts/AppContext";
export default function Card(props) {
  const { name, family, number, relationship, email } = props;
  // const { handleChangeContacts, ContactData } = useContext(AppContext);
  // const { refetch } = getContactList();
  function handleDeleteContact() {
    props.onDelete && props.onDelete();
    // handleChangeContacts(ContactData.filter((item) => item.id != id));
  }
  return (
    <div className="flex mt-4 flex-col p-4 rounded-xl gap-3 bg-blue-900 text-white w-72">
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{family}</p>
        <div className="flex gap-3">
          <i className="fa-solid fa-pen-to-square"></i>
          <button onClick={handleDeleteContact}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <p>{number}</p>
      <p>{relationship}</p>
      <p>{email}</p>
    </div>
  );
}
