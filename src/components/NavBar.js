import React from 'react'
import { Outlet, Link } from "react-router-dom";
const NavBar =(props)=> {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${props.bgColor}`}>
          <div className="container-fluid">
            <Link className={`navbar-brand text-${props.text}`} to="#0">Daily News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link text-${props.text}`} aria-current='page' to="/">Home</Link>
                </li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/business">Business</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/health">Health</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/science">Science</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${props.text}`} to="/technology">Technology</Link></li>
              </ul>
              <div className={`form-check form-switch text-${props.text}`}>
                <input className="form-check-input" onClick={props.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    )
}

export default NavBar