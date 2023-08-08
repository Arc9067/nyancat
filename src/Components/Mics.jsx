import React from "react";
import emoji from "../assets/emoji.png";

const Mics = () => {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center">
      <img src={emoji} className="pointer-events-none" alt="" />
      <h1 className="text-white text-4xl font-bold font-comic leading-[80px] tracking-wider">
        TOKENOMICS
      </h1>
      <div className="flex-col md:flex-row mt-16 justify-center items-center gap-[73px] inline-flex">
        <div className="flex-col w-full justify-center items-center gap-3 inline-flex">
          <div className="text-black texture-white text-[64px] font-bold leading-[70px]">
            xx420Mxx
          </div>
          <div className="text-black texture-white text-[40px] font-bold leading-[48px]">
            Total Supply
          </div>
        </div>{" "}
        <div className="flex-col text-center texture-white justify-start items-center gap-3 inline-flex">
          <div className="text-black text-[64px] font-bold leading-[70px]">
            xx2%xx
          </div>
          <div className="text-black text-[40px] font-bold leading-[48px]">
            Max Wallet
          </div>
        </div>{" "}
        <div className="flex-col justify-start texture-white items-center gap-3 inline-flex">
          <div className="text-black text-[64px] font-bold leading-[70px]">
            1/1
          </div>
          <div className="text-black text-[40px] font-bold leading-[48px]">
            Tax
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Mics;
