import React, { useState } from "react";

import ContactImage from "../assets/header.png";

const ContactForm = () => {
  const [user, setUser] = useState({ email: " ", address: " ", comment: " " });
  const { email, address, comment } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let contactInfo = {
      email,
      address,
      comment,
    };
    console.log(contactInfo);
    alert("Thank you for Your Contact");
  };

  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-3">
            <img src={ContactImage} alt="" className="w-100" />
          </div>
          <div className="col-md-6 pt-5">
            <h3> Get in touch</h3>
            <form action="" onSubmit={handleFormSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Address</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  onChange={handleChange}
                  value={address}
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Comment</label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  value={comment}
                  rows="5"
                ></textarea>
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
