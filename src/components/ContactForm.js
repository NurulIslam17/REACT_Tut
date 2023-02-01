import React from "react";
import ContactImage  from "../assets/header.png"

const ContactForm = () => {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
        <div className="col-md-6 pt-3">
              <img src={ContactImage} alt="" className='w-100' />
            </div>
          <div className="col-md-6 pt-5">
            <h3> Get in touch</h3>
            <form>
              <div class="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control rounded-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputPassword1">Address</label>
                <input
                  type="text"
                  class="form-control rounded-0"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputPassword1">Password</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary rounded-0">
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
