import React from "react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo.webp";

const Hero = () => {
  return (
    <section className="py-20 gap-16 w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <article className="flex flex-col gap-6">
        <h1 className="font-comic text-white text-5xl md:text-6xl texture  font-bold lg:leading-[76.80px] tracking-wider">
          Let’s Meet DeFido! Token inspired by a Tweet
        </h1>
        <p className="text-white text-base font-normal leading-loose tracking-tight">
          Floki, Meet DeFido! This brand new token was born merely moments after
          Coinbase tweeted their dog named “DeFido” at Elon Musk. & this French
          Bulldog is ready for lift off! Come join him on his journey to the
          Moon base and beyond!
        </p>
        <div className="items-stretch flex-col md:flex-row md:items-start gap-5 inline-flex">
          <a
            href=""
            className="px-[10.50px] pb-[3px] bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 justify-center items-center flex"
          >
            <div className="self-stretch px-8 py-4 bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 shadow justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-xl font-comic font-bold leading-7">
                JOIN TELEGRAM
              </div>
            </div>
          </a>
          <a
            href=""
            className="px-[10.50px] pb-[3px] bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 justify-center items-center flex"
          >
            <div className="self-stretch px-8 py-4 bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 shadow justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-xl font-comic font-bold leading-7">
                JOIN TWITTER
              </div>
            </div>
          </a>
        </div>
      </article>
      <img src={logo2} alt="" />
    </section>
  );
};

export default Hero;
