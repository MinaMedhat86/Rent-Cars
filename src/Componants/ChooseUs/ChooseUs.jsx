import React from 'react'
import style from "./ChooseUs.module.css"

import vector from "../../Assets/landing-page/sec-5/Vector.png"
import Audi2 from "../../Assets/landing-page/sec-5/Audi 1.png"

export default function ChooseUs() {

  let chooseArr = [
    {id : 1 , icon : "fa-solid fa-user-check" , text : "Best price guaranteed" , subText : "Find a lower price? We’ll refund you 100% of the difference." },
    {id : 2 , icon : "fa-solid fa-user-check" , text : "24 hour car delivery" , subText : "Book your car anytime and we will deliver it directly to you." },
    {id : 3 , icon : "fa-solid fa-hourglass-half" , text : "Best price guaranteed" , subText : "Find a lower price? We’ll refund you 100% of the difference." },
    {id : 4 , icon : "fa-solid fa-comments" , text : "24/7 technical support" , subText : "Have a question? Contact Rentcars support any time when you have problem." },
  ]
  return <>
    <div className={`container-fluid mb-5`}>
    <div className={` ${style.margStyle} row`}>

    <div className="col-lg-6 d-flex flex-column align-items-start position-relative ">
    <img src={Audi2}  alt="car" className={` z-3 ${style.imgStyle} `}/>
        <img src={vector} alt="frame" className={`w-100   `} />
      </div>

      <div className={`col-lg-6 d-flex flex-column ${style.paddingStyle} `}>
      <div class="alert alert-primary mt-4 mb-4 py-1 w-50 text-center fs-4 " role="alert">
      WHY CHOOSE US</div>
      <h1 className='  fw-semibold display-6 mb-3'>We offer the best experience with our rental deals</h1>


{
  chooseArr.map((item)=>{
    return <>
            <div className=' d-flex mb-4' key={item.id}>
        <div   
  className={`border-0 rounded-3 alert alert-primary text-center  ${style.paddingStyle2} d-flex justify-content-center align-items-center`}
   role="alert">
  <i className={` ${item.icon} text-primary fs-5  `}></i>
   </div>
   <div className='ms-4'>
    <h3 className=' fw-semibold'>{item.text}</h3>
    <p className=' fs-5 text-secondary lh-sm'>{item.subText} </p>
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
