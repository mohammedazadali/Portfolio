import React from 'react'
import Button from '../ui/Button'

const CTA = () => {
  return (
    <section className='bg-gray-50 md:px-[80px] px-[20px] py-[40px] h-[100%] flex justify-between items-center flex-col '>
        <div className='flex justify-between items-center flex-col gap-[10px] bg-[#dbf26e] btn-gradient md:w-[60%] sm:w-[80%] w-[100%] sm:py-[50px] py-[20px] text-black rounded-2xl text-center'>
        <h1 className='font-semibold sm:text-[32px] text-[26px]'>If You Have Any Idea?</h1>
        <p className='sm:text-[18px] text-[14px] font-medium text-center'>Reach out to me today and let's discuss about your project</p>
        <Button title="Let's talk" className='bg-white px-[30px]'/>
        </div>
    </section>
  )
}

export default CTA