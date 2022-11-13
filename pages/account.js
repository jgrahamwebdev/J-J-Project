import React from 'react'

function account() {
  return (
    <div className='w-screen h-screen lg:h-1/2 bg-white flex items-center justify-center'>
        <div className='h-full flex-1 flex items-center lg:items-start justify-center lg:pt-8'>
          <div className='w-full lg:w-1/2 px-4'>
            <h1 className='text-[1.1rem] mb-8 underline lg:text-[1.9rem]'>CREATE AN ACCOUNT:</h1>
            <div className='flex flex-col mb-4'>
              <label className='mb-2'>Name:</label>
              <input type="text" className='h-[2rem] border border-slate-500'></input>
            </div>
            <div className='flex flex-col mb-4'>
              <label className='mb-2'>Email:</label>
              <input type="text" className='h-[2rem] border border-slate-500'></input>
            </div>
            <div className='flex flex-col mb-4'>
              <label className='mb-2'>Password:</label>
              <input type="password" className='h-[2rem] border border-slate-500'></input>
            </div>
            <div className='flex flex-col mb-6'>
              <label className='mb-2'>Password Confirmation:</label>
              <input type="password" className='h-[2rem] border border-slate-500'></input>
            </div>
            <button class="bg-slate-500 text-white w-[5rem] h-[2rem]">Create</button>
          </div>
        </div>
        <div className='h-full flex-1 flex items-center lg:items-start justify-center lg:pt-8'>
          <div className='w-full lg:w-1/2 px-4'>
            <h1 className='text-[1.1rem] mb-8 underline lg:text-[1.9rem]'>LOGIN:</h1>
            <div className='flex flex-col mb-4'>
              <label className='mb-2'>Email:</label>
              <input type="text" className='h-[2rem] border border-slate-500'></input>
            </div>
            <div className='flex flex-col mb-6'>
              <label className='mb-2'>Password:</label>
              <input type="password" className='h-[2rem] border border-slate-500'></input>
            </div>
            <button class="bg-slate-500 text-white w-[5rem] h-[2rem]">Login</button>
          </div>
        </div>
    </div>
  )
}

export default account