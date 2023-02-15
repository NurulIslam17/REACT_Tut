import React, { useState } from "react";

import ContactImage from "../assets/header.png";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [address,setAddress] = useState("")
  const [comment,setComment] = useState("")

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  };
  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value)
  };
  const handleCommentsChange = (e) => {
    e.preventDefault();
    setComment(e.target.value)
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log('Email : ' +email)
    console.log('Address : ' +address)
    console.log('Comment : ' +comment)
  }


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
                  onChange={handleEmailChange}
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
                  onChange={handleAddressChange}
                  value={address}
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Comment</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  onChange={handleCommentsChange}
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
