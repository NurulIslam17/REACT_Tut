import React, { useState } from "react";

const Form = (props) => {
  const textUpConvt = () => {
    console.log(text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
  };
  const textLowerConvt = () => {
    console.log(text);
    let newTxt = text.toLowerCase();
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
          <div className="col-md-8 mx-auto">
            <h4>{props.heading}</h4>
            <div className="form-group mb-2">
              <textarea
                className="form-control rounded-0 shadow-none border-dark"
                id="text"
                rows="8"
                value={text}
                onChange={textChange}
              ></textarea>
            </div>

            <button onClick={textUpConvt} className="btn btn-primary rounded-0 me-1">
              TEXT UPPERCASE
            </button>
            <button onClick={textLowerConvt} className="btn btn-info rounded-0 me-1">
              TEXT LOWERCASE
            </button>
          </div>

          <div className="col-md-4">
            <div className="mt-5 border border-dark p-2">
            <h4>Text summery</h4>
            <h6>Number Of Words :</h6>
            <h6>{text.split(' ').length -1}</h6>
            <h6>Number Of Characters :</h6>
            <h6>{text.length}</h6>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <h4>Text Preview : </h4>
          <p placeholder="Text preview here">{text}</p>
        </div>

      </div>
    </>
  );
};

export default Form;
