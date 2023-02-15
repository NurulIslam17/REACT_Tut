import React from 'react'
import { useState } from 'react'

function Counter() {
  const [value,setValue] = useState(0)
  const decrement = ()=>{
    if(value >0){
        setValue(value-1)
    }else{
      alert("Negative Range Not Allowed...!")
    }
  }

  return (
    <>
     <div className="container">
      <div className="row mt-3 d-flex justify-content-center">

        <div className="col-md-4 bg-info p-2">
          <h4 className='text-center py-2'>Simple Counter</h4>
          <hr/>
          <h5 className='text-center py-2 b'> <span className='bg-light p-2 rounded-3'> {value} </span></h5>
          
          <div className="d-flex justify-content-center">
            <button onClick={()=>{ setValue(value+1)}} className='btn btn-success rounded-0 me-2'>Increment</button>
            <button onClick={decrement} className='btn btn-warning rounded-0 me-2'>Decrement</button>
            <button onClick={()=>{setValue(0)}} className='btn btn-danger rounded-0 me-2'>Reset</button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Counter