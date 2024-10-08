import React from 'react'
import style from "./Header.module.css"

import img1 from "../../Assets/landing-page/Frame.png"
import img2 from "../../Assets/landing-page/car 2 1.png"

import { Zoom } from "react-awesome-reveal";


export default function Header() {
  return <>
  <div className={`container-fluid `}>
    <div className={` ${style.margStyle} row`}>
      <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center ps-5">
        <h1 className=' fw-bold display-2'>Find, book and <br />
        rent a car <span className=' text-primary'>Easily</span> 
        </h1>
        <p className=' fs-5'>Get a car wherever and whenever you need it <br /> with your IOS and Android device.</p>
      </div>
      <div className="col-lg-7 d-flex flex-column align-items-end ">
        
    <img src={img2}  alt="car" className={` z-3 ${style.imgStyle} `} />

        <img src={img1} alt="frame" className={`w-50  position-relative `} />
      </div>
      </div>

    </div>
  </>
}
