import React from "react";
import "./App.css";
import HomeLayout  from "./HomeLayout";
import Dashboard from "./pages/Dashboard";
import MyOrders from "./pages/Myorders";
import Explore from "./pages/Explore";
import Products from "./pages/Products";



function App ({Routes, Route}) {
 return (
          <Routes>
            <Route path = "" element = {<HomeLayout />}/>
            <Route path =  "/dashboard" index element = {<Dashboard />} />
            <Route path = "/myorders" element = {<MyOrders />} />
            <Route path = "/explore" element = {<Explore />} />
            <Route path = "/products" element = {<Products />} />
          </Routes>


  )
}


export default App;