import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import ContactImage from "../assets/header.png";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      comment: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter String").required("Email Field required"),
      address: Yup.string("Enter String").required("Address Field required"),
      comment: Yup.string("Enter String")
        .max(100, "Maximum length should be 100 Characters")
        .min(5, "Length should be more than 5 Characters")
        .required("Commemt Field required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  // console.log(formik.errors);
  const emailError = formik.touched.email && formik.errors.name && (
    <span className="text-danger">{formik.errors.email}</span>
  );
  const addressError = formik.touched.address && formik.errors.address && (
    <span className="text-danger">{formik.errors.address}</span>
  );
  const commentError = formik.touched.comment && formik.errors.comment && (
    <span className="text-danger">{formik.errors.comment}</span>
  );

  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-3">
            <img src={ContactImage} alt="" className="w-100" />
          </div>
          <div className="col-md-6 pt-5">
            <h3> Get in touch</h3>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                  placeholder="Enter your email"
                />
                {emailError}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Address</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                />
                {addressError}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Comment</label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  rows="5"
                ></textarea>
                {commentError}
              </div>
              <button type="submit" className="btn btn-primary rounded-0">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
