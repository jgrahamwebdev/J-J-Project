import React from 'react'
import Link from 'next/link'
import {
  ArrowNarrowRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ShoppingCartIcon, TruckIcon,
} from '@heroicons/react/outline'

function cart() {
  return (
      <div className='w-screen h-screen bg-white flex items-center justify-center flex-col'>
        
        <div className='flex items-center justify-between w-[80%] lg:w-1/2 h-14'>
          <div className='bg-red-400 motion-safe:animate-bounce w-12 h-12 rounded-full flex items-center justify-center'>
            <ShoppingCartIcon className="h-8 w-8" aria-hidden="true"/>
          </div>
          <ArrowRightIcon className="h-8 w-8"/>
          <CreditCardIcon className="h-8 w-8"/>
          <ArrowRightIcon className="h-8 w-8"/>
          <TruckIcon className="h-8 w-8"/>
          <ArrowRightIcon className="h-8 w-8"/>
          <CheckCircleIcon className="h-8 w-8"/>
        </div>

        <div className='w-full lg:w-1/2 h-3/4 flex items-center justify-center flex-col bg-slate-200 lg:bg-white'>  
          <h1 className='text-[2rem] mb-4'>CART:</h1>        
            <div className='w-full h-[10rem] bg-pink-400 flex items-center justify-center mb-8'>
                <div className='h-full w-1/3 bg-yellow-300 flex items-center justify-center'>
                  ITEM BOX
                </div>
                <div className='h-full w-1/2 flex items-center justify-center bg-green-300'>
                  INFO BOX
                </div>
                <div className='h-full w-1/4 flex items-center justify-center bg-blue-300'>
                  PRICE BOX
                </div>
            </div>

            <div className='w-full h-[10rem] bg-pink-400 flex items-center justify-center mb-8'>
                <div className='h-full w-1/3 bg-yellow-300 flex items-center justify-center'>
                  ITEM BOX
                </div>
                <div className='h-full w-1/2 flex items-center justify-center bg-green-300'>
                  INFO BOX
                </div>
                <div className='h-full w-1/4 flex items-center justify-center bg-blue-300'>
                  PRICE BOX
                </div>
            </div>
            <Link href='/checkout'><button className="bg-slate-500 text-white flex items-center justify-around self-end w-[8rem] h-[2rem] mx-6">CHECKOUT <ArrowNarrowRightIcon className='w-4 h-4'/></button></Link>
        </div>
      </div>
  )
}

export default cart