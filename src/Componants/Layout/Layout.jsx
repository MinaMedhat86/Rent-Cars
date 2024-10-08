import React, { useState } from 'react'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Layout() {
  const[showArrow , setShowArrow]=useState(false)
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY >200){
      setShowArrow(true)
    }else{
      setShowArrow(false)
    }
  })

  return <div id="up">
  <Navbar/>
  <Outlet ></Outlet>
  <Footer/>
  <div style={{opacity: showArrow ? 1 : 0}} className={`${style.backToTop} cursor-pointer d-flex  rounded-circle position-fixed justify-content-center align-items-center bottom-0 end-0 mb-4 me-4`}>
  
  <a href="#up" >
    <i class=" fa-solid fa-arrow-up fw-semibold fs-5 text-white "></i>
  </a>
  

</div>
  </div>
}
