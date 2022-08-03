import { useRouter } from 'next/router'
import React from 'react'
import {articles} from '../utils/data'

function Articles() {

  const router = useRouter();

  return (
    <nav className="flex items-center justify-center flex-col w-screen h-[34rem] relative bg-white">

        <div className='my-4'>
          <h1 className='font-light tracking-tighter'>LATEST ARTICLES</h1>
        </div>

        <div className="relative flex items-center justify-center w-full h-[20rem]">
            <div id='slider' className='flex w-full h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth px-5'>
            {articles.map((item) => (             
              <div className='w-full h-full mr-5' key={item.id}>
                <img className="w-[350px] h-[220px] inline-block p-2 cursor-pointer object-cover mr-5" src={item.url} alt='/'/>  
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
        
        <div className="w-screen h-[5rem] flex items-center justify-center">
          <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light">MORE ARTICLES &rarr;</button>
        </div>
    </nav>
  )
}

export default Articles