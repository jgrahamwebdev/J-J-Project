import React from 'react'

function HeroOne() {
  return (
    <div className="w-screen h-[140vh] relative">
      <img className="h-full w-full" src="/img/hero-one.jpg" alt="" />

      <div className='w-full h-[20rem] flex items-center justify-center absolute top-[15rem] left-0'>
        <h1 className='text-[2.5rem] font-serif text-black'>Lorem ipsum dolor sit</h1>
      </div>

      <div className="w-screen h-40 flex items-center justify-center">
        <button className="absolute top-[52rem] w-52 h-12 text-white border text-[11px] font-extralight">READ MORE &rarr;</button>
      </div>
    </div>
  )
}

export default HeroOne