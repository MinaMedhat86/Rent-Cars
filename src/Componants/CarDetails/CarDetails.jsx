import React, { useEffect, useState } from 'react'
import style from "./CarDetails.module.css"

import { useParams } from 'react-router-dom';
import axios from 'axios';

import vector from "../../Assets/landing-page/sec-5/Vector.png"
import Audi2 from "../../Assets/landing-page/sec-5/Audi 1.png"


export default function CarDetails() {


  const { id } = useParams(); 

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);


  async function getCar() {
    let {data} = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`)
    setCar(data)
    
  }
  useEffect(()=>{
 getCar()
  } , [id])

  // console.log(car);
  

  return <>

<div className={`container-fluid mb-5 ${style.CarDetails}`}>
    <div className={` ${style.margStyle} row`}>

    <div className="col-lg-6 d-flex flex-column align-items-start position-relative ">
    <img src={Audi2}  alt="car" className={` z-3 ${style.imgStyle} `}/>
        <img src={vector} alt="frame" className={`w-100   `} />
      </div>

      <div className={`col-lg-6 d-flex flex-column ${style.paddingStyle} `}>
      <div class="alert alert-primary mt-4 mb-4 py-1 w-50 text-center fs-4 " role="alert">
      WHY CHOOSE US</div>
      <h1 className='  fw-semibold fs-1 mb-3'>We offer the best experience with our rental deals</h1>
      <div className=' d-flex text-secondary '>
      <i className="fs-4 fa-solid fa-car me-3 pt-1"></i>
        <p className='fs-4'>{car?.make} {car?.model}</p>
      </div>
      <div className=' d-flex text-secondary '>
      <i className="fs-4 me-3 pt-1 fa-solid fa-paint-roller"></i>
        <p className='fs-4'>{car?.color}</p>
      </div>

      <div className=' d-flex text-secondary '>
      <i className="fs-4 me-3 pt-1 fa-solid fa-money-bill-wave"></i>
        <p className='fs-4'>{car?.price} $</p>
      </div>


      <div className=' d-flex text-secondary '>
      <i className="fs-4 fa-solid fa-network-wired  me-3 pt-1"></i>
        <p className='fs-4'> {car?.transmission }</p>
      </div>

      <div className=' d-flex text-secondary '>
      <i className="fs-4 me-3 pt-1 fa-brands fa-searchengin"></i>
        <p className='fs-4'>{car?.engine}</p>
      </div>
      </div>

      </div>

    </div>

  </>
}
