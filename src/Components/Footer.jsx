import React from 'react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className='bg-gray-200 md:px-[80px] px-[20px] py-[10px]  flex justify-between flex-col items-center'>
        <span className='py-[5px] sm:text-18px] text-[12px] text-center'>2024 {year != 2024 ?'-' + year + ' ':<></>} &copy; Copyright Reserved | made with <span className='text-red-500'>&hearts;</span> by MoahmmedAzadAli</span>
    </footer>
  )
}

export default Footer