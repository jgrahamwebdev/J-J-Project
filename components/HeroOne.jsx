import React from 'react'

function HeroOne() {
  return (
    <div className="w-screen h-[140vh]">
      <img className="h-full w-full" src="/img/hero-one.jpg" alt="" />

      <div className="w-screen h-40 flex items-center justify-center">
        <button className="absolute top-[52rem] w-52 h-12 text-white border text-[11px] font-extralight">READ MORE &rarr;</button>
      </div>
    </div>
  )
}

export default HeroOne