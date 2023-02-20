import React from "react";
import male from "../assets/malee.png";
import female from "../assets/female.png";
import { teamMember } from "../data/teams";
import { Link } from "react-router-dom";
// console.log(teamMember)

function TeamMember() {

  return (
    <>
      <div className="container">
        <div className="row my-2 pb-2">
          <h3 className="text-center">Togather we work...</h3>
          {teamMember && teamMember.map((data) => {
            return (
              <>
                <div className="col-md-3" key={data.id}>
                  <div className="card card-body mb-2 rounded-0">
                    <img
                      src={data.gender === "Male" ? male : female}
                      alt=""
                      className="card-img-top"
                      style={{ height: "220px" }}
                    />
                    <hr className="my-0 py-0" />
                    <h5 className="text-center">
                      <strong>{data.name}</strong>
                    </h5>
                    <h6 className="text-center">
                      <strong>{data.profession}</strong>
                    </h6>
                    <p className="my-0 py-0">
                     {data.about.slice(0,70)} <Link to="/member" className="text-secondary">  More...</Link>
                    </p>
                  </div>
                </div>
                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TeamMember;
