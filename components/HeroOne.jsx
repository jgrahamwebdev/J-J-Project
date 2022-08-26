import React from 'react'

function HeroOne() {
  return (
    <div className="w-screen h-[140vh] relative hero bg-cover flex items-center justify-between lg:bg-white lg:h-[85vh]">

      <div className='w-screen h-[34rem] flex items-center justify-center text-center absolute lg:hidden'>
        <h1 className='text-[2.5rem] font-serif text-black'>LOREM ipsum dolor sit</h1>
      </div>

      <div className="w-screen h-32 flex items-center justify-center self-end lg:hidden">
        <button className="z-10 w-52 h-12 text-white border text-[11px] font-extralight">READ MORE &rarr;</button>
      </div>

      {/*iPad, Laptop, Desktop display*/}
      <div className='hidden lg:flex w-screen h-[80%] mx-8 bg-gray-100'>
        <div className='w-1/2 h-full'>
          <img className='w-full h-full object-cover' src="https://unsplash.it/1000/1000" alt="" />
        </div>
        <div className='w-1/2 h-100 flex items-center justify-around flex-col'>
          <h1 className='text-[2.5rem] font-serif text-black'>LOREM ipsum dolor sit</h1>
          <p className='w-[75%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore sed maxime. Doloremque temporibus ratione, impedit soluta repellendus consequuntur, harum ipsam architecto vitae nemo expedita accusamus unde, dolores error.</p>
         
        <button className="w-52 h-12 text-black border border-gray-300 text-[11px] font-light">READ MORE &rarr;</button>
      
        </div>            
      </div>
    </div>
  )
}

export default HeroOne