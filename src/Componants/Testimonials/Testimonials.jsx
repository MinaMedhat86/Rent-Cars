import React from 'react'
import style from "./Testimonials.module.css"
import bgImg from "../../Assets/landing-page/sec-6/bg-sec6.png"
import boy from "../../Assets/landing-page/sec-6/Rectangle8.png"
import girl from "../../Assets/landing-page/sec-6/girl.png"

export default function Testimonials() {

  let cartImgArr = [
    {id : 1 , img : boy , alt : "Boy"},
    {id : 2 , img : girl , alt : "Girl"}  
  ]

  return <>
  <div className={`${style.testimonials} position-relative`}>

<img src={bgImg} alt="background img" className='w-25 position-absolute top-0 end-0 ' />
  
  <div className=' container pt-5 z-3'>

<div class="alert alert-primary mb-4 py-1 w-25 text-center fs-4 mx-auto" role="alert">
TEST IMONIALS </div>

<h1 className=' text-center fw-semibold display-4 mb-3'>Most popular cars rental deals</h1>

<div className=' d-flex justify-content-between'>
{
  cartImgArr.map((item)=>{
    return <>
    <div className={`card mb-3 shadow-lg ${style.widthCard} `} key={item.id} >
  <div className="row g-0">
    <div className="col-md-5">
      <img src={item.img} className="img-fluid rounded-start-1 h-100" alt={item.alt}/>
    </div>
    <div className="col-md-7 ps-1 pe-5">
      <div className="card-body">
        <h3 className="card-title "> <span className='display-4 fw-semibold me-1'>5.5</span> Stars <br />
        <div className='d-flex lh-sm mb-5'>
        <i className={` ${style.iconColor} fa-solid fa-star fs-5 `}></i>
        <i className={` ${style.iconColor} fa-solid fa-star fs-5 `}></i>
        <i className={` ${style.iconColor} fa-solid fa-star fs-5 `}></i>
        <i className={` ${style.iconColor} fa-solid fa-star fs-5 `}></i>
        <i className={` ${style.iconColor} fa-solid fa-star fs-5 `}></i>

        </div>
        </h3>
        <p className="card-text fs-4">
        “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”
          </p>
        <p className="card-text lh-sm"><span className=' fs-3 fw-semibold'>Charlie Johnson</span>  <br /><small className="fs-6 text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  })
}
</div>
  </div>
  </div>

  </>
}
