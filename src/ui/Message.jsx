import React from 'react'
import { message } from '../assets/data'

const Message = () => {
  return (
    <section className='fixed right-0 sm:bottom-[30px] bottom-[10px]  z-[9999] p-[20px]'>
        <a href="https://wa.me/916369172940">
        <img src={message} alt="message" loading='lazy' className='message w-[50px]  cursor-pointer ' />
        </a>
    </section>
  )
}

export default Message