import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div className="relative min-h-screen w-full  whole  text-white ">
      <section className="fixed  min-h-screen ml-[2.5%] mt-[1%] rounded-2xl opacity-30 w-[95%]  bg-[#0D00FB]"></section>

      <div className="relative min-h-screen w-full z-[10] pt-10 container flex flex-col gap-10 ">
        <Hero />
        <About />
        <img src={logo} alt="" className="mx-auto animate-pulse" />
      </div>
    </div>
  );
};

export default App;
