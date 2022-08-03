import React from 'react'

function Instagram() {
  return (
    <div className='bg-gray-100 w-screen h-aut flex flex-col items-center justify-center'>
        <div className='w-screen h-auto my-10 flex items-center justify-center'>
            <h1 className='font-light text-[17px] tracking-tighter'>INSTAGRAM</h1>
        </div>

        <div className='w-screen h-full grid grid-cols-2 grid-rows-4 gap-4 py-4 px-4'>
            <div className='col-span-2 row-span-2 object-cover w-full h-full'>
                <img src="https://unsplash.it/470/460" alt="" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img src="https://unsplash.it/401/400" alt="" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img src="https://unsplash.it/400/401" alt="" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img src="https://unsplash.it/402/400" alt="" />
            </div>

            <div className='col-span-1 row-span-1'>
                <img src="https://unsplash.it/400/402" alt="" />
            </div>
           
        </div>
    </div>
  )
}

export default Instagram