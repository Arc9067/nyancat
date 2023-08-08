import React from "react";

const Buy = () => {
  return (
    <section className="w-full py-20 container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10">
      <article className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-5xl">
          <h1 className="text-white font-comic font-bold leading-[57.60px] tracking-wide">
            HOW TO BUY
          </h1>
          <h1 className="text-white  font-comic font-bold leading-[57.60px] tracking-wide">
            BUY $NYAN
          </h1>
        </div>
        <div className=" text-white text-xl font-bold leading-loose tracking-wide">
          Purchase $NYAN with STEEZE! Lower the slippage, JaredFromSubway been
          FEASTING. Trade your moooonieS for some $NYAN and WATCH US reach ETHER
          SPACE. NYANGANG4LYFE
        </div>
      </article>

      <iframe
        src="https://voltichange.net/api/widget/?chain=1&
darktheme=false&
tokenin=Native&
tokenout=0x7f792db54B0e580Cdc755178443f0430Cf799aCa&
slippage=1"
        frameborder="0"
        className="voltichange-widget"
      ></iframe>
    </section>
  );
};

export default Buy;
