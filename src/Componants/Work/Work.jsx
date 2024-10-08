import React from 'react'
import style from "./Work.module.css"

import audi from "../../Assets/landing-page/audi.png"
import nissan from "../../Assets/landing-page/nissan.png"
import volvo from "../../Assets/landing-page/volvo.png"
import jaguar from "../../Assets/landing-page/jaguar.png"

export default function Work() {

  let iconArr =[
    {id :1 , icon :"fa-solid fa-location-dot" , text : "Choose Location" , subText1 : " Choose your and find" , subText2 : "your best car"},
    {id :2 , icon :"fa-solid fa-car" , text : "Pick-up date" , subText1 : "Select your pick up date" , subText2 :"and time to book your car"},
    {id :3 , icon :"fa-solid fa-location-dot" , text : "Book your car" , subText1 : "Book your car and we will" , subText2 : "deliver it directly to you"},

  ]

  let imgArr = [
    {id : 1 , img : jaguar , alt : "Jaguar"},
    {id : 2 , img : nissan , alt : "Nissan"},
    {id : 3 , img : volvo , alt : "Volvo"},
    {id : 4 , img : audi , alt : "Audi"},
  ]

  return <>
  <div className=' container'>

  <div class="alert alert-primary mt-5 mb-4 py-1 w-25 text-center fs-4 mx-auto" role="alert">
  HOW IT WORK </div>

  <h1 className=' text-center fw-semibold display-4 mb-3'>Most popular cars rental deals</h1>

<div className='row'>
{
  iconArr.map((item)=>{
    return <>
      <div key={item.id} className="col-md-4 d-flex flex-column justify-content-center align-items-center">
  <div 
  
  className={`border-0 rounded-3 alert alert-primary w-25 text-center fs-4 mx-auto ${style.paddingStyle} d-flex justify-content-center align-items-center`}
   role="alert">
  <i className={`${item.icon} text-primary display-5 `}></i>
   </div>
  <h2 className=' fw-semibold'>{item.text}</h2>
  <p className='fs-5 text-secondary text-center lh-sm '>
  {item.subText1} <br /> {item.subText2}
  </p>
  </div>
    </>
  })
}
</div>

<div className=' d-flex justify-content-around my-5'>
  {
    imgArr.map((item)=>{
  return <>
  <img src={item.img} alt={item.alt}  />
  </>
    })
  }

</div>

  </div>
  
  </>
}
