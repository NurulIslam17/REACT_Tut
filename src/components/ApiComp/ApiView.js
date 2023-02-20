import React from "react";

function ApiView() {
  return (
    <>
      <h4 className="text-center">User Info</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="bg-info">
            <th scope="col">SL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex justify-content-center">
              <button className="btn btn-sm btn-success rounded-0 me-2">Edit</button>
              <button className="btn btn-sm btn-danger rounded-0 me-2">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex justify-content-center">
              <button className="btn btn-sm btn-success rounded-0 me-2">Edit</button>
              <button className="btn btn-sm btn-danger rounded-0 me-2">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex justify-content-center">
              <button className="btn btn-sm btn-success rounded-0 me-2">Edit</button>
              <button className="btn btn-sm btn-danger rounded-0 me-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ApiView;
