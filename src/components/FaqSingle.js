import React from "react";
import { useState } from "react";


function FaqSingle({id,queston,answer}) {
  const [view, setView] = useState(false);
  const handleClick = () => {
    setView(!view);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 mx-auto">
            <div className="">
          
              <div className="faq">
                <p>
                  <span className="text-info"> *** </span> {queston}
                  <span className="btn btn-sm" onClick={handleClick}>
                    {view ? "🔼" : "🔽"}
                  </span>
                </p>
                {view && (
                  <p className="bg-secondary text-white p-2">
                    {answer}
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

export default FaqSingle;
