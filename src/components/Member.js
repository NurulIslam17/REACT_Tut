import React from "react";
import male from "../assets/malee.png";
import female from "../assets/female.png";
import { useParams, useLocation } from "react-router-dom";

function Member() {
  const { name } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 mx-auto p-3">
            <div className="card card-body rounded-0 shadow">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={location.state.gender === "Male" ? male : female}
                    style={{ height: "220px", width: "100%" }}
                    alt=""
                  />
                  <p className="text-center">
                    <strong>{name}</strong>{" "}
                  </p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6 pt-3 pe-4">
                  <p>
                    <strong>Profession : </strong>
                    {location.state.profession}
                  </p>
                  <p>
                    <strong>Education : </strong> {location.state.education}
                  </p>
                  <p>
                    <strong>Institute : </strong> {location.state.institute}
                  </p>

                  {location.state.contact.map((contact_data) => {
                    const { city, country, email, phone } = contact_data;
                    return (
                      <>
                        <p>
                          <strong>Email : </strong> {email}
                        </p>
                        <p>
                          <strong>Phone : </strong> {phone}
                        </p>
                        <p>
                          <strong>Address : </strong> {city} , {country}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
              <hr/>
              <div className="row">
                <p style={{ textAlign: "justify" }}>{location.state.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
