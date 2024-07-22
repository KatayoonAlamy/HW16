import React from "react";

export default function Form() {
  return (
    <div>
      <h1>وب اپلیکیشن مدیریت مخاطبین</h1>
      <input type="text" placeholder="نام..." />
      <input type="text" placeholder="نام خانوادگی..." />
      <input type="number" placeholder="شماره تماس..." />
      <select name="نسبت" id="">
        <option value="اعضای خانواده"></option>
        <option value="دوست"></option>
        <option value="همکار"></option>
        <option value="فامیل"></option>
      </select>
      <input type="email" placeholder="ایمیل..." />
    </div>
  );
}
