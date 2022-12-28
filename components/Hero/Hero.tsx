import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/hero-cover.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" relative h-full ">
      <Image src={HeroImage} alt="Hero Cover Photo" />
      <h1 className="  absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] text-[25px] pr-4 md:text-[50px] whitespace-nowrap lg:text-[90px] font-bold ">
        <span className="text-blue-500">SHOP </span>
        <span className="text-red-500">NOW</span>
      </h1>
    </div>
  );
};

export default Hero;
