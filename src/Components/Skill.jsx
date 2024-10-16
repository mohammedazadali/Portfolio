import React, { useContext } from 'react'
import { skill, skill_mob } from '../assets/data'
import Seo from '../ui/Seo'

const Skill = () => {
  return (
    <>
    <Seo
    title={"Expert Skills in Full-Stack Development & Machine Learning"}
    description={"Explore Mohammed Azad Ali's technical skills in React, Node.js, Flask, and Machine Learning, showcasing expertise in building efficient, scalable applications."}/>
    <section className='flex  sm:flex-row flex-col justify-between bg-gray-50 md:px-[80px] px-[20px] py-[50px] gap-[30px]  items-center'>
        <h1 
        className='basis-[30%] lg:text-[32px]  text-[22px] sm:text-start text-center'>
        Technical <span className='font-semibold'>Mastery</span> in Every Line of Code
        </h1>
        <div className='basis-[60%]'>
            <img src={skill} alt="" className='w-[100%] sm:block hidden'/>
            <img src={skill_mob} alt="" className='w-[90%] sm:hidden flex m-auto'/>
        </div>
    </section>
    </>
  )
}

export default Skill