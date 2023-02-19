import React, { useState } from "react";

function ToggleComp() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const color = {
    color: "white",
  };
  const green = {
    backgroundColor: "green",
    color: "white",
  };
  const red = {
    backgroundColor: "red",
    color: "white",
  };


  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 bg-secondary mx-auto p-3">
            {!toggle && <p style={color}>Click Show button to expolore...</p>}
            {toggle && (
              <p style={color}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                excepturi earum quia repudiandae, atque id odit iusto
                accusantium iste esse! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis esse eaque officiis nulla tempora
                molestias, harum minus commodi quia asperiores quasi labore vero
                cumque laborum vel ullam, inventore illo assumenda.
              </p>
            )}

            <div className="d-flex justify-content-center">
              {
                <button
                  style={!toggle ? green : red}
                  className="btn btn-sm btn-warning me-2 rounded-0 border border-2 shadow"
                  onClick={handleToggle}
                >
                  {toggle ? "Hide" : "Show"}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleComp;
