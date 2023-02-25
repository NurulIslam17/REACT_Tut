import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useFormik } from "formik";

function EditModal() {
  const data = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: data.state.id,
      name: data.state.name,
      email: data.state.email,
      phone: data.state.phone,
      password: data.state.password,
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      fetch(`http://127.0.0.1:8000/api/update/${formik.values.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Successfully Updated");
            navigate("/api", { replace: true });
          } else {
            console.log("Failed to update");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 mx-auto shadow p-3">
            <h4 className="text-center">Edit Data</h4>
            <div className="card card-body rounded-0 shadow">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-2">
                  <label forhtml="name">Name</label>
                  <input
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="form-control rounded-0"
                    id="name"
                  />
                </div>
                <div className="form-group mb-2">
                  <label forhtml="email">Email</label>
                  <input
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="form-control rounded-0"
                    id="email"
                  />
                </div>
                <div className="form-group mb-2">
                  <label forhtml="name">Phone</label>
                  <input
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className="form-control rounded-0"
                    id="phone"
                  />
                </div>
                <div className="form-group mb-2">
                  <label forhtml="password">password</label>
                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className="form-control rounded-0"
                    id="password"
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
