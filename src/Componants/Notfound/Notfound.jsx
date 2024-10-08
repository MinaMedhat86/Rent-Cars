import React from 'react'
import style from "./Notfound.module.css"
import notFound from "../../Assets/not-found/404-not-found.png"
import { useNavigate } from 'react-router-dom'

export default function Notfound() {

  let navigate = useNavigate();

  function goToHome (){
    navigate("/Rent-Cars")
  }

  return <>
  <div className=' d-flex flex-column justify-content-center align-items-center vh-100'>
<img src={notFound} alt="not found page" className={` ${style.notFoundStyle} `} />
<button
  onClick={goToHome}
  className=' btn btn-primary w-25 py-1 fs-4 mb-5'> Home</button>
  </div>



  </>
}
