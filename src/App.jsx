import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Card/Cards";
import Tour from "./Components/Tours/Tour";
import Discount from "./Components/Discount/Discount";
import Review from "./Components/Review/Review";
import Staff from "./Components/Staff/Staff";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

const App = () =>{
  return(
    <>
      
      <Navbar/>
      <Home/>
      <Cards/>
      <Tour/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </>
  );
}

export default App