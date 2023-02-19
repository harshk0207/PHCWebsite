import React from 'react'
import InstituteLogo from '../Images/InstituteLogo.jpg';
const DoctorsHeader = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={InstituteLogo} width="30" height="30" class="d-inline-block align-text-top mx-2"/>
          PHC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/patientsList">
                Patients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/inventory">
                Peek in inventory.
              </a>
            </li>
            
          </ul>
          <ul className="navbar-nav mx-2 ms-auto">
            <li className="nav-item"><button type="button" class="btn btn-primary">Sign Out</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default DoctorsHeader
