import React, { useContext, useId } from "react";
import AppContext from "../contexts/AppContext";
import { Field, Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  family: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function ContactForm() {
  const { handleChangeContacts, ContactData } = useContext(AppContext);

  return (
    <Formik
      initialValues={{ name: "", family: "", email: "" }}
      onSubmit={(values) => {
        handleChangeContacts([
          ...ContactData,
          { ...values, id: new Date().toString() },
        ]);
      }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col items-center gap-6 p-6">
          <h1 className=" text-2xl font-bold">وب اپلیکیشن مدیریت مخاطبین</h1>
          <Field
            name="name"
            type="text"
            placeholder="نام..."
            className="border-2"
          />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <Field
            type="text"
            name="family"
            placeholder="نام خانوادگی..."
            className="border-2"
          />
          {errors.family && touched.family ? <div>{errors.family}</div> : null}

          <Field
            type="number"
            name="number"
            placeholder="شماره تماس..."
            className="border-2"
          />
          {errors.number && touched.number ? <div>{errors.number}</div> : null}

          <Field name="relationship">
            {({ field, form, meta }) => (
              <div>
                <select {...field} className="w-44 text-black border-2" id="">
                  <option value="family">اعضای خانواده</option>
                  <option value="freind">دوست</option>
                  <option value="work">همکار</option>
                  <option value="famil">فامیل</option>
                </select>
              </div>
            )}
          </Field>
          <Field
            name="email"
            type="email"
            className="border-2"
            placeholder="ایمیل..."
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button
            type="submit"
            className="w-24 h-8 bg-blue-600 text-white rounded-md text-center"
          >
            افزودن
          </button>
        </Form>
      )}
    </Formik>
  );
}
