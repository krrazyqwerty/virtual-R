import React from "react";

import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App=()=> {
  return (
    <>
    {/* // <div>
    //   <h1 className="text-5xl font-bold underline">
    //     Hello world!
    //     </h1>
    // </div> */}
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    </div>
    <Features/>
    <WorkFlow/>
    <Price/>
    <Testimonials/>
    <Footer/>
    </>
  );
}


export default App