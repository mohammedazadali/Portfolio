import React, { useEffect } from "react";
import Textreavel from "../ui/Textreavel";
import { HeroItem } from "../Constant";
import { star } from "../assets/data";
import Button from "../ui/Button";
import Seo from "../ui/Seo";

const Hero = () => {
  return (
    <>
      <Seo
        title="Welcome to Mohammed Azad Ali's Portfolio - Full-Stack Developer"
        description="Explore the portfolio of Mohammed Azad Ali, a skilled full-stack developer proficient in React, Node.js, and Machine Learning. Discover high-quality projects and services"
      />
      <section
        id="hero"
        className="parallax-container md:px-[80px] px-[20px] py-[160px] flex justify-center items-center flex-col h-screen"
      >
        <div className="relative bg-gray-200 flex px-5 py-2 rounded-full mb-10 gap-2 items-center">
          <img src={star} className="sm:w-[22px] w-[18px] animate-pulse" alt="star" />
          <p className="sm:text-[18px] text-[12px] z-0">Available for new opportunities</p>
        </div>
        <div className="flex items-center justify-center flex-col parallax">
          {HeroItem.map((data, i) => (
            <React.Fragment key={i}>
              <span className="flex gap-2 items-center sm:text-[18px] text-[16px] font-medium">{data.name}</span>
              <h1 className="text-center sm:text-[3rem] text-[1.2rem] font-bold font-montserrat">
                <Textreavel
                  words={data.title}
                  duration={2}
                  otherclass="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.8rem] font-bold text-center xl:w-[70%] w-full m-auto"
                  className="text-black"
                  animation={true}
                  textColor={7}
                  id="text"
                />
              </h1>
              <p className="text-center sm:text-[18px] text-[16px] font-semibold">{data.para}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-[20px] flex gap-[10px]">
          <Button title="Hire Me!" className="btn-gradient font-medium" />
          <Button title="See My Works" className="border border-green-400" />
        </div>
      </section>
    </>
  );
};

export default Hero;
