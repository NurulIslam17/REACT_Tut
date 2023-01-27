import React from 'react'

const Navabar = (props) => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container">
          <a className="navbar-brand text-dark" href="/">
            { props.title}
          </a>
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
            <ul className="navbar-nav  me-auto mb-2 mx-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="/">
                { props.home}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                { props.about}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                { props.contact}
                </a>
              </li>

             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control text-dark rounded-0 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-info rounded-0 text-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navabar.defaultProps = {
  title: 'Title Here',
  
};

export default Navabar
