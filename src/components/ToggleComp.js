import React, { useState } from "react";

function ToggleComp() {
  // const hide = {
  //   display: "none",

  // };
  // const show = {
  //   display: "block",
  //   color:"white"
  // };
  const [toggle, setToggle] = useState(true);

  const handleShow = () => {
    setToggle(true);
  };
  const handleHide = () => {
    setToggle(false);
  };

  const color = {
    color:"white"
  }
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 bg-secondary p-3 mx-auto">
            {!toggle && <p style={color}>Click Show button to expolore...</p>}
            {toggle && (
              <p style={color}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                excepturi earum quia repudiandae, atque id odit iusto
                accusantium iste esse!
              </p>
            )}

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={handleShow}
              >
                Show
              </button>
              <button className="btn btn-sm btn-success" onClick={handleHide}>
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleComp;
