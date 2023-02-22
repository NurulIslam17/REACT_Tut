import React from "react";
import ApiForm from "./ApiForm";
import ApiView from "./ApiView";

function ApiHome() {
  return (
    <>
      <div className="container">
        <div className="row mt-4 border shadow p-2">
          <div className="col-md-4">
            <ApiForm />
          </div>
          <div className="col-md-8">
            <ApiView />
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiHome;
