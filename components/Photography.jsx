import React from 'react'
import {articles} from '../utils/data'


function Photography() {
  return (
    <div className='w-screen h-[80rem] flex items-center justify-center flex-col relative bg-white'>
      <div className='my-10'>
        <h1 className='font-light text-[15px] tracking-tighter'>PHOTOGRAPHY</h1>
      </div>

      {/*MOBILE VIEW*/}
      <div className='w-screen flex items-center justify-center'>
        <img className='lg:hidden' src="https://unsplash.it/500/500" alt="" />
      </div>

      <div className='w-[95%] h-[14rem] bg-gray-100 flex items-center justify-center flex-col absolute top-[30rem] lg:hidden'>
        <div className='flex items-start justify-start mb-6'>
            <h5 className='text-[10px] cursor-pointer hover:underline'>PHOTOGRAPHY</h5>
            <h5 className='text-[10px] mx-1'>•</h5>
            <h5 className='text-[10px] cursor-pointer hover:underline'>OTHER</h5>
        </div>
        <div>
          <h1 className='cursor-pointer text-[1.7rem] text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        </div>
        <div className="w-screen h-[5rem] flex items-center justify-center">
          <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light">READ MORE &rarr;</button>
        </div>
      </div>

      {/*IPAD, LAPTOP, DESKTOP VIEW*/}
      <div className='hidden lg:flex w-[95vw] h-[41%] mx-5 pl-4 bg-gray-100'>
        <div className='h-full w-1/2 flex items-center justify-center'>
          <img className='w-full h-[90%] object-cover' src="https://unsplash.it/1000/800" alt="" />
        </div>
        <div className='h-full w-1/2 flex items-center justify-around flex-col'>
        <div className='flex items-start justify-start mb-6'>
            <h5 className='text-[12px] cursor-pointer hover:underline'>PHOTOGRAPHY</h5>
            <h5 className='text-[10px] mx-1'>•</h5>
            <h5 className='text-[12px] cursor-pointer hover:underline'>OTHER</h5>
        </div>
        <div className='flex items-center justify-center w-[90%]'>
          <h1 className='cursor-pointer text-[2.4rem] text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        </div>
        <div className='flex items-center justify-center w-[75%] font-serif text-center'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, facilis dolore minus non at dolorum vel velit enim atque perspiciatis, ipsum doloremque expedita odio animi quasi nam. Dolore.</p>
        </div>
        <div className="w-full h-[5rem] flex items-center justify-center">
          <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light">READ MORE &rarr;</button>
        </div>
        </div>
      </div>


      <div className="relative flex items-center justify-center flex-col w-full h-2/4">
            <div id='slider' className='flex w-full h-1/2 overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth px-5'>
            {articles.map((item) => (             
              <div className='w-full h-full mr-5' key={item.id}>
                <img className="w-[350px] h-[220px] inline-block p-2 cursor-pointer object-cover mr-5" src={item.url} alt='NO IMAGE AVAILABLE'/>  
                <div className='w-[350px] h-[6rem] flex flex-col overflow-hidden px-2 whitespace-normal break-all'>
                  <div className='flex items-start justify-start'>
                    <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitle}</h5>
                    <h5 className='text-[10px] mx-1'>•</h5>
                    <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitleTwo}</h5>
                  </div>
                  <h2 className='font-serif text-[16px] cursor-pointer'>{item.title}</h2>
                </div>
              </div>                                   
            ))}             
            </div>
            <div className="w-screen h-[5rem] flex items-center justify-center mt-8">
              <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light">MORE ARTICLES &rarr;</button>
            </div>
      </div>
             


    </div>
  )
}

export default Photography