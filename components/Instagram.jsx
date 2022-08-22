import React from 'react'

function Instagram() {
  return (
    <div className='bg-gray-100 w-screen h-auto flex flex-col items-center justify-center'>
        <div className='w-screen h-[5rem] my-10 flex items-center justify-center'>
            <h1 className='font-light text-[17px] tracking-tighter'>INSTAGRAM</h1>
        </div>

        <div className='w-screen grid grid-cols-2 lg:grid-cols-5 grid-rows-4 lg:grid-rows-3 gap-4 py-4 px-4'>
            <div className='col-span-2 row-span-2'>
                <img className='w-full h-full' src="/img/img-one.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-two.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-three.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-four.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-five.jpg" alt="NO IMAGE AVAILABLE" />
            </div>


            <div className='hidden lg:inline-block col-span-2 row-span-2'>
                <img className='w-full h-full' src="/img/img-six.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='hidden lg:inline-block col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-seven.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='hidden lg:inline-block col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-eight.jpg" alt="NO IMAGE AVAILABLE" />
            </div>

            <div className='hidden lg:inline-block col-span-1 row-span-1'>
                <img className='w-full h-full' src="/img/img-nine.jpg" alt="NO IMAGE AVAILABLE" />
            </div>
           
        </div>
    </div>
  )
}

export default Instagram