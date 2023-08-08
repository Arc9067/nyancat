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
      <div className="fixed z-50 gap-5 min-h-screen w-full flex-col flex justify-center items-center  text-white bg-[#0D00FB] bg-black b]g2">
        <img
          src={play}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            setOpen(true);
            const audio = new Audio("/audio.mp3");
            audio.play();
            audio.loop = true;
          }}
        />
        <div
          onClick={() => {
            setOpen(true);
            const audio = new Audio("/audio.mp3");
            audio.play();
            audio.loop = true;
          }}
          className="cursor-pointer h-24 px-2 pt-[9px] pb-2 border-2 border-teal-400 justify-center items-center inline-flex"
        >
          <div className="grow shrink basis-0 self-stretch px-2.5 pt-2.5 pb-[9px] border-2 border-yellow-400 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-black shadow justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-comic font-bold leading-7 tracking-tight">
                CLICK ME
              </div>
            </div>
          </div>
        </div>
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
