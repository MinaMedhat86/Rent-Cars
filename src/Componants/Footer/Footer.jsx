import React from 'react'
import style from "./Footer.module.css"
import logo2 from "../../Assets/footer/logo-footer.png"

export default function Footer() {
  return <>
  
  <div className={`${style.footer} text-white`}>
    <div className='container '>
<div className='row pb-5 pt-5'>
  <div className={`col-md-3  d-flex flex-column ${style.itemDirection}`}>
    <img src={logo2} alt="logo" className=' w-50 mb-4' />
    <div className=' d-flex '>
    <i className={`fa-solid fa-location-dot ${style.iconColor} me-3 mt-1 fs-5`}></i>
    
      <p>25566 Hc 1, Glenallen,
        <br />
        Alaska, 99588, USA
      </p>
    </div>

    <div className=' d-flex  '>
    <i className={`fa-solid fa-phone ${style.iconColor} me-3 mt-1 fs-5`}></i>
    
      <p>+603 4784 273 12 &nbsp; &nbsp; &nbsp;</p>
    </div>

    <div className=' d-flex  '>
    <i className={`fa-solid fa-envelope ${style.iconColor} me-3 mt-1 fs-5`}></i>
    
      <p>rentcars@gmail.com</p>
    </div>
  </div>
  <div className={`col-md-2 d-flex flex-column ${style.itemDirection}`}>
    <h5 className=' fw-semibold mb-5'>Our Product</h5>
    <p className={`${style.linePara}`}>Career</p>
    <p className={`${style.linePara}`}>Car</p>
    <p className={`${style.linePara}`}>Packages</p>
    <p className={`${style.linePara}`}>Features</p>
    <p className={`${style.linePara}`}>Priceline</p>
  </div>
  <div className={`col-md-2 d-flex flex-column ${style.itemDirection}`}>
  <h5 className=' fw-semibold mb-5'>Resources</h5>
    <p className={`${style.linePara}`}>Download</p>
    <p className={`${style.linePara}`}>Help Centre</p>
    <p className={`${style.linePara}`}>Guides</p>
    <p className={`${style.linePara}`}>Partner Network</p>
    <p className={`${style.linePara}`}>Cruises</p>
    <p className={`${style.linePara}`}>Developer</p>
  </div>
  <div className={`col-md-2 d-flex flex-column ${style.itemDirection}`}>
  <h5 className=' fw-semibold mb-5'>About Rentcars</h5>
    <p className={`${style.linePara}`}>Why choose us</p>
    <p className={`${style.linePara}`}>Our Story</p>
    <p className={`${style.linePara}`}>Investor Relations</p>
    <p className={`${style.linePara}`}>Press Center</p>
    <p className={`${style.linePara}`}>Advertise</p>
  </div>
  <div className={`col-md-3 d-flex flex-column ${style.itemDirection}`}>
  <h5 className=' fw-semibold mb-5'>Follow Us</h5>
  <div className={` ${style.iconColor} d-flex`}>
  <i class="fa-brands fa-facebook-f fs-5"></i>
  <i class="fa-brands fa-instagram mx-3 fs-5"></i>
  <i class="fa-brands fa-youtube fs-5"></i>
  </div>
  </div>
</div>
<hr />
<p className='pb-4 mb-0'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
    </div>
  </div>
  </>
}
