import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import EditModal from "./EditModal";

import user from "../../assets/cmnUsre.png";

// User API Links
const getURL = "http://127.0.0.1:8000/api/get_user";
const deleteURL = "http://127.0.0.1:8000/api/delete";

function ApiView() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteMsg, setDeleteMsg] = useState(false);
  // const [edit, setEdit] = useState([]);
  const [openEdit,setEditOpen] = useState(false)

  // view data in table  (get data from database)
  const getData = () => {
    fetch(getURL)
      .then((response) => {
        setIsLoading(true);
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
  // delete user
  const deleteHandle = (id) => {
    fetch(deleteURL + `/${id}`, { method: "DELETE" }).then((response) => {
      if (!response.ok) {
        setDeleteMsg(false);
      }
      getData();
      setDeleteMsg(true);
      setTimeout(() => {
        setDeleteMsg(false);
      }, 1000);
    });
  };
  // //Edit user
  // const editHandle = (id) => {
  //   setEditOpen(true)
  //   alert(id);
  // };
  // refress
  const refresHandler = () => {
    getData();
  };

  return (
    <>
      <h4 className="text-center">User Info</h4>
      {openEdit && <EditModal/>}
      {deleteMsg ? (
        <p className="text-danger">Data Deleted</p>
      ) : (
        <button
          className="btn m-0 p-0"
          style={{ fontSize: "22px" }}
          onClick={refresHandler}
        >
          🔄
        </button>
      )}

      <table className="table table-bordered table-striped">
        <thead>
          <tr className="bg-info">
            <th scope="col">SL</th>
            <th scope="col" className="text-center">
              Photo
            </th>
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
              const { id, name, email, phone,password} = value;
              return (
                <>
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td className="text-center">
                      <img
                        src={user}
                        alt=""
                        className="rounded-circle"
                        style={{ height: "40px", width: "40px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td className="d-flex justify-content-center">
                      <Link
                        className="btn btn-sm btn-success rounded-0 me-2"
                        to={name}
                        state = {{id, name, email, phone,password}}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger rounded-0 me-2"
                        onClick={() => {
                          deleteHandle(id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      {!isLoading && <Spinner />}
    </>
  );
}

export default ApiView;
