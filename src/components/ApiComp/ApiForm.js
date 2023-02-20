import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ApiForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string("Name Must be string")
        .required("Name is required")
        .min(3, "Name is too short")
        .max(30, "Name is too long"),
      email: Yup.string('Enter Email').required('Email is required'),
      phone: Yup.string("Enter Number")
      .required('Number required')
        .min(11, "Phone number must be 11 digit")
        .max(11, "Phone number must be 11 digit"),
      password: Yup.string("Enter Password")
        .required("Password required")
        .min(8, "Must be more than 8 digit")
        .max(12, "Password lenght should be in between 12 digit"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  // console.log(formik.errors);
  const nameError = formik.touched.name && formik.errors.name && (
    <span className="text-danger">{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span className="text-danger">{formik.errors.email}</span>
  );
  const phoneError = formik.touched.phone && formik.errors.phone && (
    <span className="text-danger">{formik.errors.phone}</span>
  );
  const passError = formik.touched.password && formik.errors.password && (
    <span className="text-danger">{formik.errors.password}</span>
  );

  return (
    <>
      <h4 className="text-center">API</h4>
      <hr />
      <form className="border border-1 p-2 m-2" onSubmit={formik.handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control rounded-0"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            autoComplete="true"
            placeholder="Enter Name"
          />
          {nameError}
        </div>

        <div className="form-group mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control rounded-0"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            autoComplete="true"
            placeholder="Enter Email"
          />
          {emailError}
        </div>
        <div className="form-group mb-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            className="form-control rounded-0"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            autoComplete="true"
            placeholder="Enter Phone"
          />
          {phoneError}
        </div>

        <div className="form-group mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control rounded-0"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            autoComplete="true"
            placeholder="Enter Password"
          />
          {passError}
        </div>

        <button type="submit" className="btn btn-sm btn-primary rounded-0 mb-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default ApiForm;
