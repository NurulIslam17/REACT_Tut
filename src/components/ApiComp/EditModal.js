import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

function EditModal() {
  const data = useLocation();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 mx-auto shadow p-3">
            <h4 className="text-center">Edit Data</h4>
            <div className="card card-body rounded-0 shadow">
              <form>
                <div className="form-group mb-2">
                  
                  <label forHtml="name">Name</label>
                  <input
                    type="text"
                    value={data.state.name}
                    className="form-control rounded-0"
                    id="name"
                  />
                </div>
                <div className="form-group mb-2">
                  <label forHtml="email">Email</label>
                  <input
                    type="email"
                    value={data.state.email}
                    className="form-control rounded-0"
                    id="email"
                  />
                </div>
                <div className="form-group mb-2">
                  <label forHtml="name">Phone</label>
                  <input
                    type="text"
                    value={data.state.phone}
                    className="form-control rounded-0"
                    id="phone"
                  />
                </div>
                <div className="form-group mb-2">
          
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary rounded-0 mb-2"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
