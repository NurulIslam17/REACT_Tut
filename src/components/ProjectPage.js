import React from "react";
import { Link } from "react-router-dom";
import TextAnalyze from "../assets/calculator.jpg";

const ProjectPage = (props) => {
  const imgHeight = {
    height:'150px',
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center py-2">{props.title}</h2>
          </div>
        </div>
        <div className="row mt-3">

          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" style={imgHeight} src={TextAnalyze}/>
              <div className="card-body">
                <h5 className="card-title">Text Analyzing App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" className="btn btn-info btn-sm rounded-0">
                  Details
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectPage;
