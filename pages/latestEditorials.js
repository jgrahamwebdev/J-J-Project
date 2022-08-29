import React from 'react'
import {articles} from '../utils/data'

function latestEditorials() {
    return (
        <div className='w-screen h-auto bg-white'>
            <div className='flex items-center justify-center flex-wrap pt-[4.7rem] lg:pt-0'>
            <div className='w-screen h-[6rem] flex items-center justify-center'>
                <h1 className='font-serif text-[2.4rem] lg:text-[3rem]'>Latest Editorials</h1>
            </div>
            {articles.map((item) => (             
                  <div className='w-auto h-full mx-5 my-5 flex items-center justify-center flex-col' key={item.id}>
                    <img className="w-[450px] lg:w-[550px] h-[320px] lg:h-[420px] inline-block p-2 cursor-pointer object-cover" src={item.url} alt='NO IMAGE AVAILABLE'/>  
                    <div className='w-[450px] lg:w-[550px] h-[6rem] flex flex-col overflow-hidden px-2 whitespace-normal break-all'>
                      <div className='flex items-start justify-start'>
                        <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitle}</h5>
                        <h5 className='text-[10px] mx-1'>•</h5>
                        <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitleTwo}</h5>
                      </div>
                      <h2 className='font-serif text-[1.1rem] lg:text-[1.4rem] cursor-pointer'>{item.title}</h2>
                    </div>
                  </div>                                   
                ))}             
            </div>
        </div>
      )
}

export default latestEditorials