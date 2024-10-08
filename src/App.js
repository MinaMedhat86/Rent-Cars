import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Componants/Layout/Layout"
import Home from "./Componants/Home/Home"
import AllCars from "./Componants/AllCars/AllCars"
import CarDetails from "./Componants/CarDetails/CarDetails"
import Notfound from "./Componants/Notfound/Notfound"

function App() {


  let routers = createBrowserRouter([
    {path : "" , element : <Layout/> , children : [
      {path : "Rent-Cars" , element : <Home/>},
      {path :"allCars" , element : <AllCars/>},
      {path : "/carDetails/:id" , element : <CarDetails/>},
      {path : "*" , element : <Notfound/>}
    ]}
  ])

  return <>

  <RouterProvider router={routers}></RouterProvider>
  
  </>
}

export default App;
