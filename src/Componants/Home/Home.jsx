import React from 'react'
import style from "./Home.module.css"
import Header from "../Header/Header"
import PopularCars from '../PopularCars/PopularCars'
import Work from "../Work/Work"
import ChooseUs from "../ChooseUs/ChooseUs"
import Testimonials from "../Testimonials/Testimonials"
import ContactUs from '../ContactUs/ContactUs'


export default function Home() {
  return <>
    <Header/>
    <PopularCars/>
    <Work/>
    <ChooseUs/>
    <Testimonials/>
    <ContactUs/>
  </>
}
