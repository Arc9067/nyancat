import React from "react";
import barack from "../assets/barack.gif";

const About = () => {
  return (
    <section className="py-14 w-full container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-center items-center about">
      <img src={barack} alt="" className="mx-auto" />

      <div className="flex flex-col items-start gap-8">
        <p className="text-white text-lg font-normal leading-[48px]">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of memes and pop culture. With a vision to become the
          leading memecoin in the market, we believe Pepe and Toad is the
          perfect ortfolio. Join us on this journey to revolutionize the world
          of memecoins.
        </p>
        <a
          href=""
          className="px-[10.50px] pb-[3px] bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 justify-center items-center flex"
        >
          <div className="self-stretch px-8 py-4 bg-gradient-to-r from-yellow-400 via-cyan-400 to-red-600 shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-xl font-comic font-bold leading-7">
              TELEGRAM
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
