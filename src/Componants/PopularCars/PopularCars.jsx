import React, { useEffect, useState } from 'react'
import style from "./PopularCars.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import img2 from "../../Assets/landing-page/car3.png"

export default function PopularCars() {

   let [cars , setCars] = useState([]);
   const [query, setQuery] = useState(''); 

   const navigate = useNavigate();


  async function getCars() {
    
    let {data} = await axios.get(`https://freetestapi.com/api/v1/cars?search=${query}`)
    setCars(data)
    
  }

   // Handle search input changes
  //  const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };


  useEffect(() => {

      getCars();



  }, []);

  // console.log(cars);
  
  const goToAllCars = () => {
    navigate('/allCars');
  };

  return <>
  <div className='mt-5 container'>
<div className=' d-flex'>
  <div className={` ${style.colorStyle} d-flex align-items-center justify-content-center py-2 px-4 rounded-start-2`}>
  <i className=" text-black fa-solid fa-location-dot"></i>
  </div>
<input type="text" className='form-control fs-5 shadow-lg '       
value={query}
onChange={(e) => setQuery(e.target.value)} 
           placeholder='Search by name'  />

<button className=' btn btn-primary fs-5 ' onClick={getCars}>Search</button>
</div>

<div class="alert alert-primary mt-5 mb-4 py-1 w-25 text-center fs-4 mx-auto" role="alert">
POPULAR RENTAL DEALS </div>

<h1 className=' text-center fw-semibold display-4 mb-3'>Most popular cars rental deals</h1>

<div className='row gy-3 d-flex justify-content-center'> 
  {
    cars?.splice(0,7).map((item)=>{
      return <>
      <div className="col-md-3 " key={item.id}>
  <div className="card shadow-lg p-2" >
  <img src={img2} className="card-img-top w-75 mx-auto my-3" alt="pics"/>
  <div className="card-body">
    <h4 className="card-title">{item.make} {item.model}   </h4>
    <div className='d-flex align-items-center'>
    <i className={` ${style.starStyle} fs-5 fa-solid fa-star`}></i>
    <p className='fw-semibold fs-5 ms-2 pt-4'>4.6</p>
    <p className='ms-2 fs-6 pt-4'>(1345 reviews)</p>
    </div>

    <div className='d-flex justify-content-between'>
      <div className="d-flex">
      <i className={` ${style.parColor} me-1 fs-5 fa-solid fa-user`}></i>
        <p className={`${style.parColor} fs-5`}>2 Passenger</p>
      </div>
      <div className="d-flex">
      <i className={` ${style.parColor} me-1 fs-5 fa-solid fa-snowflake`}></i>
        <p className={`${style.parColor} fs-5`}>2 Air conditioning</p>
      </div>    </div>

      <div className='d-flex justify-content-between'>
      <div className="d-flex">
      <i className={` text-black me-1 fs-5 fa-solid fa-calendar-days`}></i>
        <p className={`${style.parColor} fs-5`}>{item.year}</p>
      </div>
      <div className="d-flex">
      <i className={` ${style.parColor} me-1 fs-5 fa-solid fa-network-wired`}></i>
        <p className={`${style.parColor} fs-5`}>{item.transmission}</p>
      </div>    </div>

      <hr />

      <div className='d-flex justify-content-between'>
        <h4 className={`${style.parColor}`}> Price</h4>
        <h4 className={`${style.parColor}`}> <span className=' fw-semibold text-black'> ${item.price}/</span> day</h4>
      </div>


  </div>
</div>
  </div>
      </>
    })
  }
  
</div>


<button
 className='btn btn-outline-secondary fs-5 w-25 my-5 position-relative start-50 translate-middle-x'
 onClick={goToAllCars}
> Show all vehicles 
<i className=" ms-2 fa-solid fa-arrow-right"></i>
</button>

  </div>
  </>
}
