import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";

const getURL = "http://127.0.0.1:8000/api/get_user";
const deleteURL = "http://127.0.0.1:8000/api/delete";

function ApiView() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteMsg, setDeleteMsg] = useState(false);

  // view data in table  (get data from database)
  const getData = () => {
    fetch(getURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setData(data);
      });
  };
  useEffect(() => {
    getData();
    setIsLoading(false);
  }, []);

  // delete use
  const deleteHandle = (id) => {
    fetch(deleteURL+`/${id}`,{ method:'DELETE'}).then((response) => {
      if (!response.ok) {
        setDeleteMsg(false);
      }
      getData();
      setDeleteMsg(true);
    });
  };

  return (
    <>
      <h4 className="text-center">User Info</h4>
      {deleteMsg && <p className="text-danger">Data Deleted</p>}
      
      <table className="table table-bordered table-striped">
        
        <thead>
          <tr className="bg-info">
            <th scope="col">SL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          
          {data &&
            data.map((value, index) => {
              const { id, name, email, phone } = value;
              return (
                <>
                {isLoading && <Spinner />}
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-sm btn-success rounded-0 me-2">
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-0 me-2"
                        onClick={()=>{deleteHandle(id)}}
                      >
                        Deletei
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>

      </table>
    </>
  );
}

export default ApiView;
