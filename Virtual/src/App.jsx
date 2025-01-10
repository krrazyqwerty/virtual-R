import React from "react";

import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";

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
    </>
  );
}


export default App