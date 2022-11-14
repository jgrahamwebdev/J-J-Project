import React from 'react'
import Link from 'next/link'
import {
  ArrowNarrowRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CreditCardIcon,
  ShoppingCartIcon, TruckIcon,
} from '@heroicons/react/outline'

function cart() {
  return (
      <div className='w-screen h-auto bg-white flex items-center justify-center flex-col lg:flex-row pt-[7rem] lg:pt-4'>
        

        <div className='w-full lg:flex-1 h-3/4 flex items-center justify-around flex-col bg-white px-4'>  
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
            <h1 className='text-[2rem] my-8'>CART(2):</h1>
                 
            <div className='w-full h-[10rem] flex items-center justify-center mb-8'>
                <div className='h-full flex-1 flex items-center justify-center'>
                  <img className='w-full h-full object-cover' src='/img/product-1.jpg'/>
                </div>
                <div className='h-full flex-[2] flex items-center justify-center bg-white'>
                  <div className='h-full flex items-start justify-between flex-col flex-[2] lg:flex-1 pl-2'>
                    <h4 className='text-[1.4rem]'>Ceramic Mug</h4>
                    <p className='text-slate-400'>Tricolored</p>
                    <p className=''>$45.00</p>
                    <p className=''>In Stock</p>
                  </div>
                  <div className='h-full flex items-center justify-around lg:justify-between flex-[2] flex-col lg:flex-row'>
                    <div className='w-3/4 lg:w-1/2 flex items-center justify-between'>
                      <p className='mr-2'>Qty:</p>
                      <input className='border w-3/4' type="number"/>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                    <button className='w-[6rem] h-[2rem] border border-black rounded-full'>REMOVE</button>
                    </div>
                  </div>
                </div>
            </div>

            <div className='w-full h-[10rem] flex items-center justify-center mb-8'>
                <div className='h-full flex-1 flex items-center justify-center'>
                <img className='w-full h-full object-cover' src='/img/product-2.jpg'/>
                </div>
                <div className='h-full flex-[2] flex items-center justify-center bg-white'>
                <div className='h-full flex items-start justify-between flex-col flex-[2] lg:flex-1 pl-2'>
                    <h4 className='text-[1.4rem]'>Hand Carved Spoon Set</h4>
                    <p className='text-slate-400'>Cherry Wood</p>
                    <p className=''>$75.00</p>
                    <p className=''>In Stock</p>
                  </div>
                  <div className='h-full flex items-center justify-around lg:justify-between flex-[2] flex-col lg:flex-row'>
                    <div className='w-3/4 lg:w-1/2 flex items-center justify-between'>
                      <p className='mr-2'>Qty:</p>
                      <input className='border w-3/4' type="number"/>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                    <button className='w-[6rem] h-[2rem] border border-black rounded-full'>REMOVE</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        <div className='lg:flex-1 bg-slate-100 w-full h-full flex items-start justify-center flex-col'>
          <div className='w-full flex items-center justify-center flex-col'>
            <div className='border-b-2 border-slate-500 w-3/4 mb-8 h-[4rem] flex items-end justify-start'>
              <h1 className='text-[2rem]'>ORDER SUMMARY:</h1>
            </div>
            <div className='border-b-2 border-slate-500 w-3/4 mb-8 flex items-center justify-between h-[4rem]'>
              <h3 className=''>SUBTOTAL:</h3>
              <p>$120.00</p>
            </div>
            <div className='border-b-2 border-slate-500 w-3/4 mb-8 flex items-center justify-between h-[4rem]'>
              <h3 className=''>SHIPPING:</h3>
              <p>Calculated at Shipping</p>
            </div>
            <div className='border-b-2 border-slate-500 w-3/4 mb-8 flex items-center justify-between h-[4rem]'>
              <h3 className=''>TAX:</h3>
              <p>$0.00</p>
            </div>
            <div className='border-b-2 border-slate-500 w-3/4 mb-8 flex items-center justify-between h-[4rem]'>
              <input type="text" className='w-3/4 h-full mb-4 border border-slate-300 rounded pl-4' placeholder='Enter coupon code'/>
              <button className='h-full mb-4'><ChevronRightIcon className='h-8 w-8'/></button>
            </div>
            <div className='border-b-2 border-slate-500 w-3/4 mb-12 flex items-center justify-between h-[4rem]'>
              <h3 className=''>TOTAL:</h3>
              <p>$120.00</p>
            </div>
          </div>
            <Link href='/checkout'><button className="bg-slate-500 text-white items-center justify-around self-end w-[9rem] h-[3rem] mr-[5rem] mb-4 flex">CHECKOUT <ArrowNarrowRightIcon className='w-4 h-4'/></button></Link>
        </div>
      </div>
  )
}

export default cart