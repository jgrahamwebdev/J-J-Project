import { useRouter } from 'next/router'
import React from 'react'
import {articles} from '../utils/data'

function Articles() {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center flex-col w-screen h-[34rem] lg:h-full relative bg-white">

        <div className='my-4'>
          <h1 className='font-light tracking-tighter'>LATEST ARTICLES</h1>
        </div>

        {/*MOBILE VIEW SCROLLER*/}
        <div className="relative flex items-center justify-center w-full h-[20rem] lg:hidden">
            <div id='slider' className='flex w-full h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth px-5'>
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
        </div>


         {/*IPAD VIEW SCROLLER*/}
      <div className="hidden relative lg:flex items-center justify-center flex-col w-screen h-[65vh] mx-5 bg-white xl:hidden">
      <div id='slider' className='flex w-full h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth px-5'>
            {articles.map((item) => (             
              <div className='w-[40rem] h-[80%]' key={item.id}>
                <img className="w-[600px] h-[270px] inline-block py-2 px-16 cursor-pointer object-cover" src={item.url} alt='NO IMAGE AVAILABLE'/>  
                <div className='w-screen h-auto flex flex-col overflow-hidden px-16 whitespace-normal break-all'>
                  <div className='flex items-start justify-start w-1/2'>
                    <h5 className='text-[11px] cursor-pointer hover:underline'>{item.subtitle}</h5>
                    <h5 className='text-[10px] mx-1'>•</h5>
                    <h5 className='text-[11px] cursor-pointer hover:underline'>{item.subtitleTwo}</h5>
                  </div>
                  <div className='w-[30rem] h-auto'>
                    <h2 className='font-serif text-[1.4rem] cursor-pointer'>{item.title}</h2>
                  </div>
                </div>
              </div>                                   
            ))} 
        </div>           
        </div>


        {/*LAPTOP>DESKTOP VIEW*/}
        <div className="hidden relative xl:flex items-center justify-center flex-col w-screen h-auto mx-5 bg-white">     
            {articles.map((item) => (             
              <div className='w-3/4 h-auto py-4' key={item.id}>
                <img className="w-full h-screen inline-block py-2 px-16 cursor-pointer object-fill" src={item.url} alt='NO IMAGE AVAILABLE'/>  
                <div className='w-full h-auto flex flex-col overflow-hidden px-16 whitespace-normal break-all'>
                  <div className='flex items-start justify-start w-1/2'>
                    <h5 className='text-[11px] cursor-pointer hover:underline'>{item.subtitle}</h5>
                    <h5 className='text-[10px] mx-1'>•</h5>
                    <h5 className='text-[11px] cursor-pointer hover:underline'>{item.subtitleTwo}</h5>
                  </div>
                  <div className='w-[30rem] h-auto'>
                    <h2 className='font-serif text-[1.4rem] cursor-pointer'>{item.title}</h2>
                  </div>
                </div>
              </div>                                   
            ))} 
                 
        </div>
        
        <div className="w-screen h-[5rem] lg:h-[14rem] flex items-center justify-center">
          <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light"><a href='/latestArticles'>MORE ARTICLES &rarr;</a></button>
        </div>
    </div>
  )
}

export default Articles