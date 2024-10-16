import React, { useEffect, useState } from 'react';
import { ServiceItem } from '../Constant';
import Seo from '../ui/Seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  useEffect(()=>{
    const div0 = document.getElementById('service-div0')
    const div1 = document.getElementById('service-div1')
    const div2 = document.getElementById('service-div2')
    const div3 = document.getElementById('service-div3')
    const tl = gsap.timeline({
        scrollTrigger:{
          trigger:'#service',
          start:'top center',
          end:'bottom center',
          scrub:1,
        }
    })

    if(div0 && div1 && div2 && div3){
      tl.set([div0,div1,div2,div3],{
        yPercent:100,
      }).to([div0,div1,div2,div3],{
        yPercent:0,
        stagger:0.2,
        duration:2,
        ease:'power1.out'
      })
    }
  },[])
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getCardClass = (index) => {
    if (hoveredIndex === null && index === 0) {
      return 'bg-greengradient-default';
    }
    if (hoveredIndex === index) {
      return 'bg-greengradient-default';
    }
    return 'bg-white';
  };

  return (
    <>
    <Seo
    title={"Professional Web Development & Software Solutions – Mohammed Azad Ali"}
    description={"Offering comprehensive web development services, including full-stack development, API creation, machine learning integration, and custom software solutions."}/>
      <section className='sm:px-[6%] px-[2%] py-[50px]' id='service'>
        <h1 className="text-stroke-fill-black font-semibold md:text-[32px] sm:text-[22px] text-[20px] text-center mb-[50px]">
          Our Services
        </h1>
        <div className={`grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px] items-center sm:py-[50px] py-[0]`}>
          {
            ServiceItem.map((data, i) => {
              return (
                <div key={i}>
                  <div
                  id={`service-div${i}`}
                    className={`flex gap-[20px] justify-between ${i % 2 !== 0 ? 'sm:flex-col-reverse flex-col' : 'flex-col '} `}
                    onMouseEnter={() => setHoveredIndex(i)}  
                    onMouseLeave={() => setHoveredIndex(null)} 
                  >
                    <div
                      className={`shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-[15px] flex items-center flex-col text-center ${getCardClass(i)} transition-all hover:bg-greengradient-default rounded-lg min-h-[220px]`}
                    >
                      <div className='bg-white border border-green-gradient-default p-[10px] rounded-full'>
                        <img src={data.icon} alt={data.icon} className='sm:h-[52px] h-[32px] sm:w-[52px] w-[32px]' />
                      </div>
                      <h1 className='text-2xl font-semibold'>{data.title}</h1>
                      <p>{data.body}</p>
                    </div>
                    <div className='font-outline sm:text-[45px] text-[22px] font-semibold text-center sm:block hidden'>
                      {data.no}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </>
  );
};

export default Services;
