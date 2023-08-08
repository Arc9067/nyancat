import React, { useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import logo from "./assets/logo.svg";
import Mics from "./Components/Mics";
import Buy from "./Components/Buy";
import Footer from "./Components/Footer";
import play from "./assets/play.gif";

const App = () => {
  const [open, setOpen] = useState(false);

  function Notopen() {
    return (
      <div className="relative min-h-screen w-full flex justify-center items-center  text-white bg-[#0D00FB] bg-black b]g2">
        <img src={play} alt="" className="cursor-pointer" />
      </div>
    );
  }
  if (open) {
    return (
      <div className="relative min-h-screen w-full  whole  text-white ">
        <section className="fixed  min-h-screen ml-[2.5%] mt-[1%] rounded-2xl opacity-30 w-[95%]  bg-[#0D00FB]"></section>

        <div className="relative min-h-screen w-full z-[10] pt-10 container flex flex-col gap-10 ">
          <Hero />
          <About />
          <img src={logo} alt="" className="mx-auto animate-pulse" />
          <Mics />
          <Buy />
          <Footer />
        </div>
      </div>
    );
  }
  if (!open) {
    return <Notopen />;
  }
};

export default App;
