import React from 'react'

function EditModal() {
  return (
    <>
      <div className="card card-body">
      <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>

      </div>
    </>
  )
}

export default EditModal