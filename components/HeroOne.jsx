import React from 'react'

function HeroOne() {
  return (
    <div className="w-screen h-[140vh] relative hero bg-cover flex items-center justify-between lg:bg-white lg:h-[85vh]">

      <div className='w-screen h-[34rem] flex items-center justify-center text-center absolute lg:hidden'>
        <h1 className='text-[2.5rem] font-serif text-black'>LOREM ipsum dolor sit</h1>
      </div>

      <div className="w-screen h-32 flex items-center justify-center self-end lg:hidden">
        <button className="w-52 h-12 text-white border text-[11px] font-extralight">READ MORE &rarr;</button>
      </div>

      {/*iPad, Laptop, Desktop display*/}
      <div className='hidden lg:flex w-screen h-[80%] mx-8 bg-gray-100'>
        <div className='w-1/2 h-full'>
          <img className='w-full h-full object-cover' src="https://unsplash.it/1000/1000" alt="" />
        </div>
        <div className='w-1/2 h-100 flex items-center justify-around flex-col'>
          <h1 className='text-[2.5rem] font-serif text-black w-3/4'>Full Stack Web Developer & Designer</h1>
          <p className='w-[75%] text-center'>I specialize in: JavaScript, MERN Stack, Tailwind CSS, and Python/Django. Also skilled in Java, Spring Boot, MySQL, Flask, Three.js, and MicroPython.</p>
         
        <button className="w-52 h-12 text-black border border-gray-300 text-[11px] font-light">MORE ABOUT ME &rarr;</button>
      
        </div>            
      </div>
    </div>
  )
}

export default HeroOne