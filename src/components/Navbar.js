import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            RE<span style={{ color: "red" }}>ACT</span>EAM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/tems">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/project">
                  TA App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/stopwatch">
                  Stopwatch
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/toggle">
                  Toggle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/fqa">
                  FQAs
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">Action</Link>
                  <Link className="dropdown-item" to="/">Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">Something else here</Link>
                </div>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
