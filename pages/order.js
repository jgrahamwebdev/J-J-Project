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

function order() {
const [showModal, setShowModal] = React.useState(false);
  return (
      <div className='w-screen h-screen bg-white flex items-center justify-center flex-col lg:flex-row'>
        
        <div className='flex items-center justify-between w-[80%] h-14'>
          <div className='bg-green-400 w-12 h-12 rounded-full flex items-center justify-center'>
            <Link href='/cart'><ShoppingCartIcon className="h-8 w-8 cursor-pointer" aria-hidden="true"/></Link>
          </div>
          <CheckIcon className="h-8 w-8"/>
          <div className='bg-green-400 w-12 h-12 rounded-full flex items-center justify-center'>
            <Link href='/checkout'><CreditCardIcon className="h-8 w-8 cursor-pointer"/></Link>
          </div>
          <CheckIcon className="h-8 w-8"/>
          <div className='bg-green-400 w-12 h-12 rounded-full flex items-center justify-center'>
          <Link href='/shipping'><TruckIcon className="h-8 w-8 cursor-pointer"/></Link>
          </div>
          <CheckIcon className="h-8 w-8"/>
          <div className='bg-red-400 motion-safe:animate-bounce w-12 h-12 rounded-full flex items-center justify-center'>
          <CheckCircleIcon className="h-8 w-8"/>
          </div>
        </div>

        <div className='w-full h-3/4 flex items-center justify-center flex-col bg-slate-200'>  
          <h1 className='text-[2rem] mb-4'>REVIEW ORDER:</h1>        
            
            <button className="bg-slate-500 text-white flex items-center justify-around self-end w-[8rem] h-[2rem] mx-6" onClick={() => setShowModal(true)}>PLACE ORDER</button>

    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-3xl font-semibold">
                    ORDER HAS BEEN PLACED!
                  </h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> 
            {/*body*/}
                <div className="relative p-6 flex-auto">
                    <label>ORDER #:</label>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    1gwd828ehq0dch
                    </p>
                </div>
                <div className="relative p-6 flex-auto">
                    <label>SHIPPING TO:</label>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Random Name
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    1234 S. Random St.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Somewhere, US. 123456
                    </p>
                </div>
                <div className="relative p-6 flex-auto">
                    <label>PAYMENT METHOD:</label>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Visa **** **** 1234
                    </p>
                </div>
                <div className="relative p-6 flex-auto">
                    <label>ORDER SUMMARY:</label>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Painting $400
                    </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Link href='/'><button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    RETURN HOME
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}
                       
        </div>   
      </div>
  )
}

export default order