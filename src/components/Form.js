import React, { useState } from "react";

const Form = (props) => {
  const textUpConvt = () => {
    console.log(text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
  };

  const textChange = (event) => {
    setText(event.target.value);
    console.log('okkk');
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">

        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <h4>{props.heading}</h4>
            <div className="form-group mb-2">
              <textarea
                className="form-control rounded-0"
                id="text"
                rows="8"
                value={text}
                onChange={textChange}
              ></textarea>
            </div>

            <button onClick={textUpConvt} className="btn btn-primary rounded-0">
              TEXT UPPERCASE
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Form;
