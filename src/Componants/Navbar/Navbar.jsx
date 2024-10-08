import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/nav/logo.png"

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg my-3 position-absolute top-0 start-0 end-0">
  <div className="container">
  <Link className="navbar-brand" to="/Rent-Cars">
        <img src={logo} alt="logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${style.navColor}`} id="navbarSupportedContent">


      <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 `}>
        <li className="nav-item">
          <Link className={`nav-link fs-5 text-black  fw-semibold ${style.linkStyle}`} to="#">Become a renter</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link fs-5 text-black fw-semibold ${style.linkStyle}`} to="#">Rental deals</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link fs-5 text-black fw-semibold ${style.linkStyle}`} to="#">How it work</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link fs-5 text-black fw-semibold ${style.linkStyle}`} to="#">Why choose us</Link>
        </li>
      </ul>
      <div className=' d-flex justify-content-center z-3'>
      <button className='btn border-0 fs-5 me-2'>Sign in</button>
      <button className='btn btn-primary fs-5'>Register</button>
    </div>
    </div>


  </div>
</nav>
  
  </>
}
