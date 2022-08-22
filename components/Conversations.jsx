import React from 'react'
import {conversations} from '../utils/data';

function Conversations() {
  return (
    <div className='w-screen h-[130vh] lg:h-[80vh] flex items-center justify-center flex-col relative bg-white'>
      <div className='my-10'>
        <h1 className='font-light text-[15px] tracking-tighter'>CONVERSATIONS</h1>
      </div>

      <div className='flex flex-col items-center justify-center w-full h-3/4 lg:flex-row'>
            {conversations.map((item) => (
            <div className='flex items-center justify-center flex-col mb-8 mx-4 w-[95%] lg:h-full lg:mb-0'>
                <div className='w-3/4 h-auto flex items-center justify-center mb-4'>
                    <img className='w-full h-[14rem] xl:h-[20rem] object-cover' src={item.url} alt='NO IMAGE AVAILABLE'/>
                </div>
                <div className='flex items-start justify-start'>
                    <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitle}</h5>
                    <h5 className='text-[10px] mx-1'>•</h5>
                    <h5 className='text-[10px] cursor-pointer hover:underline'>{item.subtitleTwo}</h5>
                </div>
                <div className='w-3/4 h-1/4 flex flex-col items-center justify-center pl-4 break-all lg:pl-0 lg:text-center'>
                    <h2 className='w-full font-serif lg:text-[1.2rem]'>{item.title}</h2>
                </div>
            </div>
            ))}
      </div>


      <div className="w-screen h-[5rem] flex items-center justify-center">
        <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-light">MORE CONVERSATIONS &rarr;</button>
      </div>
    </div>
  )
}

export default Conversations