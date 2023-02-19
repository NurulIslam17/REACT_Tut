import React, { useState } from "react";

function FqaComp() {
  const [view, setView] = useState(false);
  // const [view,setView] = useState(false)
  const handleClick = () => {
    setView(!view);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <div className="card card-body shadow">
              <h4 className="text-center">FQAs</h4>
              <hr />

              <div className="faa">
                <p>
                  <span className="text-warning"> *** </span> What is react
                  <span className="btn btn-sm" onClick={handleClick}>
                    {view ? "🔼" : "🔽"}
                  </span>
                </p>
                {view && (
                  <p className="bg-secondary text-white p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, consectetur.
                  </p>
                )}
              </div>
              <div className="faa">
                <p>
                  <span className="text-warning"> *** </span> amet consectetur
                  adipisicing elit. Doloremque, consectetur.
                  <span className="btn btn-sm" onClick={handleClick}>
                  {view ? "🔼" : "🔽"}
                  </span>
                </p>
                {view && (
                  <p className="bg-secondary text-white p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, consectetur.
                  </p>
                )}
              </div>
              <div className="faa">
                <p>
                  <span className="text-warning"> *** </span> Consectetur
                  adipisicing elit. Doloremque, consectetur.
                  <span className="btn btn-sm" onClick={handleClick}>
                  {view ? "🔼" : "🔽"}
                  </span>
                </p>
                {view && (
                  <p className="bg-secondary text-white p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, consectetur.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FqaComp;
