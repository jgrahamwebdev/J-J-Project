import React from 'react'
import {editorials} from '../utils/data';

function Editorials() {
  return (
    <div className='w-screen h-[58rem] flex items-center justify-center flex-col relative bg-white'>
        <div className='my-10'>
            <h1 className='font-light text-[15px] tracking-tighter'>EDITORIALS</h1>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
            {editorials.map((item) => (
            <div className='flex items-center justify-center mb-8 mx-4 w-[95%]'>
                <div className='w-1/2 h-auto flex items-center justify-center'>
                    <img className='w-full h-36 object-cover' src={item.url}/>
                </div>
                <div className='w-1/2 h-auto flex flex-col items-start justify-center pl-4 break-all'>
                    <h4 className='text-[10px] mb-2'>{item.subtitle}</h4>
                    <h2 className='w-full font-serif'>{item.title}</h2>
                </div>
            </div>
            ))}
        </div>

        <div className="w-screen h-40 flex items-center justify-center">
          <button className="top-3/4 w-52 h-11 text-black border text-xs border-black font-extralight">MORE ARTICLES &rarr;</button>
        </div>
    </div>
  )
}

export default Editorials