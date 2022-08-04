import React from 'react'

function HeroOne() {
  return (
    <div className="w-screen h-[140vh] relative hero bg-cover flex justify-between">

      <div className='w-full h-[24rem] flex items-center justify-center absolute top-[15rem] left-0'>
        <h1 className='text-[2.5rem] font-serif text-black'>LOREM ipsum dolor sit</h1>
      </div>

      <div className="w-screen h-32 flex items-center justify-center self-end">
        <button className="z-10 w-52 h-12 text-white border text-[11px] font-extralight">READ MORE &rarr;</button>
      </div>
    </div>
  )
}

export default HeroOne