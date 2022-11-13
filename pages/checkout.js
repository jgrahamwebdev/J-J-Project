import React from 'react'
import Link from 'next/link'
import {
    ArrowNarrowRightIcon,
    ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  CreditCardIcon,
  ShoppingCartIcon, TruckIcon,
} from '@heroicons/react/outline'

function checkout() {
  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center flex-col lg:flex-row'>

        <div className='flex items-center justify-between w-[80%] h-14'>
          <div className='bg-green-400 w-12 h-12 rounded-full flex items-center justify-center'>
          <Link href='/cart'><ShoppingCartIcon className="h-8 w-8 cursor-pointer" aria-hidden="true"/></Link>
          </div>
          <CheckIcon className="h-8 w-8"/>
          <div className='bg-red-400 motion-safe:animate-bounce w-12 h-12 rounded-full flex items-center justify-center'>
            <CreditCardIcon className="h-8 w-8"/>
          </div>
          <ArrowRightIcon className="h-8 w-8"/>
          <TruckIcon className="h-8 w-8"/>
          <ArrowRightIcon className="h-8 w-8"/>
          <CheckCircleIcon className="h-8 w-8"/>
        </div>

        <div className='w-full h-3/4 flex items-center justify-center flex-col bg-slate-200'>  
          <h1 className='text-[2rem] mb-4'>PAYMENT:</h1>        
            
            <Link href='/shipping'><button className="bg-slate-500 text-white flex items-center justify-around self-end w-[8rem] h-[2rem] mx-6">SHIPPING <ArrowNarrowRightIcon className='w-4 h-4'/></button></Link>
        </div>
    </div>
  )
}

export default checkout