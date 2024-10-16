import React, { useEffect } from 'react'
import Baneranimatin from '../lib/Baneranimatin'

export const Banner = () =>{
    useEffect(()=>{
        Baneranimatin()
    },[])
    return(
        <>
        <div id='banner-1' className="bg-black min-h-screen fixed w-1/4 top-0 z-10 left-0"></div>
        <div id='banner-2' className="bg-black min-h-screen fixed w-1/4 top-0 z-10 left-1/4"></div>
        <div id='banner-3' className="bg-black min-h-screen fixed w-1/4 top-0 z-10 left-2/4"></div>
        <div id='banner-4' className="bg-black min-h-screen fixed w-1/4 top-0 z-10 left-3/4"></div>
        </>
    )
}