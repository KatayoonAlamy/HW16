import React, { useContext } from "react";
import { useFormik } from "formik";
import AppContext from "../contexts/AppContext";
export default function Form() {
  const { handleChangeContacts, ContactData } = useContext(AppContext);
  const emailVerifiction = new RegExp("^[w-.]+@([w-]+.)+[w-]{2,4}$");
  const formik = useFormik({
    initialValues: {
      name: "",
      family: "",
      number: Number(0),
      relationship: "",
      email: emailVerifiction.test(""),
    },

    onSubmit: (values) => {
      handleChangeContacts([...ContactData, {}]);
    },
  });
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className=" text-2xl font-bold">وب اپلیکیشن مدیریت مخاطبین</h1>
      <input type="text" placeholder="نام..." className="border-2" />
      <input type="text" placeholder="نام خانوادگی..." className="border-2" />
      <input type="number" placeholder="شماره تماس..." className="border-2" />
      <select className="w-44 text-black border-2" name="نسبت" id="">
        <option value="family">اعضای خانواده</option>
        <option value="freind">دوست</option>
        <option value="work">همکار</option>
        <option value="famil">فامیل</option>
      </select>
      <input type="email" className="border-2" placeholder="ایمیل..." />
      <button className="w-24 h-8 bg-blue-600 text-white rounded-md text-center">
        افزودن
      </button>
    </div>
  );
}
