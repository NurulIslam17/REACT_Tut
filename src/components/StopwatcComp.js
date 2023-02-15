// import React, { useEffect, useState } from 'react'

function StopwatcComp() {
  const styleWatch = {
    backgroundColor : "#fff",
    height:"270px"
  }
  // const [isActive,setIsActive] = useState(false);
  // const [isPaused,setIsPaused] = useState(true);
  // const [time,setTime] = useState(0);

  // useEffect(()=>{
  //   let interval = null;
  // })
  return (
    <>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">

          <div className="col-md-3 p-2 rounded-3 shadow" style={styleWatch}>
            <h4 className='text-center my-2 py-4'>Stop Watch</h4>
            <h5 className='text-center py-2'> 
            <span className='bg-light p-2 rounded-3 mx-1'> 00 </span>
            <span className='bg-light p-2 rounded-3 mx-1'> 00 </span>
            <span className='bg-light p-2 rounded-3 mx-1'> 00 </span></h5>
            
            <div className="d-flex justify-content-center my-4">
              <button className='btn btn-sm btn-success rounded-3 me-2'>Start</button>
              <button className='btn btn-sm btn-warning rounded-3 me-2'>Pause</button>
              <button className='btn btn-sm btn-danger rounded-3 me-2'>Stop</button>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default StopwatcComp