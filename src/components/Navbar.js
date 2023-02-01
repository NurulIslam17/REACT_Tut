import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">RE<span style={{color:"red"}}>ACT</span>EAM</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-sm btn-light text-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar