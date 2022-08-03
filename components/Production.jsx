import React from 'react'
import Instagram from './Instagram'

function Production() {
  return (
  <div className='parallax w-screen h-auto bg-fixed bg-cover'>
    <div className='h-[32rem] w-screen flex items-center justify-center flex-col'>
        <div className=''>
            <h1 className='text-white text-[2rem]'>LOREM IPSUM DOLOR</h1>
        </div>
        <div className="w-screen h-[5rem] flex items-center justify-center">
          <button className="w-52 h-11 text-white border text-xs border-white font-extralight">WORK WITH US &rarr;</button>
        </div>
    </div>
    <Instagram />
  </div>
  )
}

export default Production