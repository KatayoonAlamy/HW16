import React, { useContext, useId, useState } from "react";
// import AppContext from "../contexts/AppContext";
import { Field, Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import { Col, Input, message, Row, Select } from "antd";

import { CloseSquareFilled } from "@ant-design/icons";
import { Alert } from "antd";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getContactList } from "../utils/ApiCalls";

const baseUrl = import.meta.env.VITE_APP_URL;
const AntInput = (props) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-right w-full" htmlFor={props.id}>
        {props.label}
      </label>
      <Input {...props} />
    </div>
  );
};
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "نام نباید کمتر از 2 کاراکتر باشد")
    .max(20, "نام نباید بیشتر از 20 کاراکتر باشد!")
    .required("فیلد نام الزیمیست"),
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
  // const { handleChangeContacts, ContactData } = useContext(AppContext);
  const { refetch } = getContactList();

  const [relationship, setRelation] = useState("");
  const handleSelect = (value) => {
    setRelation(value);
  };
  const Options = [
    { value: "family", label: "اعضای خانواده" },
    {
      value: "freind",
      label: "دوست",
    },
    {
      value: "work",
      label: "همکار",
    },
  ];
  return (
    <div className=" bg-white p-4 border rounded-xl ">
      <Formik
        initialValues={{
          name: "",
          family: "",
          email: "",
          number: "",
        }}
        onSubmit={async (values) => {
          await fetch(baseUrl + "/contacts", {
            method: "POST",
            body: JSON.stringify({ ...values, relationship }),
          });
          refetch();
        }}
        validationSchema={SignupSchema}
        className="w-full"
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center w-full gap-6 p-6">
            <Row gutter={10} className="w-full items-center">
              <Col span={24} >
                <Field
                  id="name"
                  as={AntInput}
                  name="name"
                  type="text"
                  label="نام:"
                  placeholder="نام..."
                  className="border-2"
                />
              </Col>
              <Col span={24} >
                <Field
                  id="family"
                  type="text"
                  name="family"
                  as={AntInput}
                  label="نام خانوادگی:"
                  placeholder="نام خانوادگی..."
                  className="border-2"
                />
              </Col>
              <Col span={24} >
                <Field
                  name="email"
                  id="email"
                  type="email"
                  className="border-2"
                  label="ایمیل:"
                  placeholder="ایمیل..."
                  as={AntInput}
                />
              </Col>
              <Col span={24} >
                <Field name="relationship">
                  {({ field }) => (
                    <div className="w-full text-right">
                      <label htmlFor="options">ارتباط:</label>
                      <Select
                        {...field}
                        options={Options}
                        value={relationship}
                        onChange={handleSelect}
                        className="w-full text-black border-2"
                        id="options"
                      />
                    </div>
                  )}
                </Field>
              </Col>

              <Col span={24} >
                <Field
                  id="phone"
                  as={AntInput}
                  type="number"
                  name="number"
                  placeholder="شماره تماس..."
                  label="شماره تماس:"
                  className="border-2"
                />
              </Col>
            </Row>

            <Row gutter={10} className="w-full max-w-96  justify-start">
              {errors.email && touched.email ? (
                <Col span={24}>
                  <Alert message={errors.email} type="error" />
                </Col>
              ) : null}
              {errors.name && touched.name ? (
                <Col span={24}>
                  <Alert message={errors.name} type="error" />
                </Col>
              ) : null}
              {errors.family && touched.family ? (
                <Col span={24}>
                  <Alert message={errors.family} type="error" />
                </Col>
              ) : null}
            </Row>
            <button
              type="submit"
              className="w-24 h-8 bg-blue-600 text-white rounded-md text-center"
            >
              افزودن
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
