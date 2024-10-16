import React from "react";
import { Reviews } from "../Constant";
import Seo from "../ui/Seo";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Review = () => {
  return (
    <>
      <Seo
        title={"Client Reviews – Trusted Full-Stack Developer & Consultant"}
        description={
          "Read what clients have to say about working with Mohammed Azad Ali, a reliable full-stack developer delivering innovative and scalable tech solutions."
        }
      />

      <section className="bg-white md:px-[80px] px-[20px] py-[40px] flex flex-col justify-between gap-[50px] items-center">
        <div className="flex flex-col items-center text-center md:basis-[40%] basis-[100%]">
          <span className="text-[18px]">Who Am I?</span>
          <span className="md:text-[32px] sm:text-[26px] text-[22px] font-semibold">
            Few Words From My Clients
          </span>
        </div>
        <InfiniteMovingCards items={Reviews} speed="slow" direction="left" />
      </section>
    </>
  );
};

export default Review;
