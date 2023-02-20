// import React, { useState } from "react";
import { fqaData } from "../data/fqa";
import FaqSingle from "./FaqSingle";

function FqaComp() {
  // const [faqs, setFaqs] = useState(fqaData);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-7 mx-auto">
            <div className="card card-body shadow">
              <h4 className="text-center">FQAs</h4>
              <hr />

              {fqaData.map((faq) => {
                return <FaqSingle key={faq.id} {...faq}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FqaComp;
