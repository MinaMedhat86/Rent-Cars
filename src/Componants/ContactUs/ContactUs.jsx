import React from 'react'
import style from "./ContactUs.module.css"

import android from "../../Assets/landing-page/andriod.png"
import ios from "../../Assets/landing-page/ios.png"

import iPhone14 from "../../Assets/landing-page/sec-7/iPhone-14.png"

export default function ContactUs() {
  return <>
  <div className=' container mt-5'>
    <h1 className=' fw-semibold display-3'>Download Rentcars App for <span className='text-primary'>FREE</span>     </h1>
 <p className=' lh-sm fs-5'>For faster, easier booking and exclusive deals. </p>

 <div className='row'>
  <div className=' col-md-6 pb-3 '>
    <div className=' d-flex justify-content-center mb-4'>
    <img src={android} alt="android" className='me-3 w-25'/>
    <img src={ios} alt="ios" className='w-25' />
    </div>

    <div className=' d-flex align-items-center flex-column'>
      <input type="text" placeholder='Name' className={` ps-4 fs-4 text-secondary rounded-5 border-0  py-1 w-75 ${style.bgInput}`} />
      <input type="tel" placeholder='Phone Number' className={` ps-4 fs-4 text-secondary rounded-5 border-0 my-3  py-1 w-75 ${style.bgInput}`} />
      <input type=" email" placeholder='Email' className={` ps-4 fs-4 text-secondary rounded-5 border-0  py-1 w-75 ${style.bgInput}`} />
  <button className='btn btn-primary w-25 fs-4 py-0 mt-3 rounded-1'>Send </button>
    
    </div>

  </div>

  <div className={`col-md-6 ${style.positionStyle}`}>
    <img src={iPhone14} alt="iphone 14 " className='w-50 h-100 ' />
  </div>
 </div>
  </div>
  </>
}
