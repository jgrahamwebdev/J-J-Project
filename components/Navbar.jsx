/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import CategoryMenu from './CategoryMenu'

const solutions = [
  {
    name: 'ART',
    href: '/art',
  },
  {
    name: 'DESIGN',
    href: '/design',
  },
  { 
    name: 'PHOTOGRAPHY', 
    href: '/photography', 
  },
  {
    name: 'ARCHITECTURE',
    href: '/architecture',
  },
  {
    name: 'TRAVEL',
    href: '/travel',
  },
  {
    name: 'CREATE ACCOUNT/LOGIN',
    href: '/account',
  },
]

const resources = [
  {
    name: 'Newsletter',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Production',
    href: '#',
  },
  { name: 'Imprint', 
    href: '#', 
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [top, setTop] = useState(true)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition === 0) {
      setTop(true)
    } else if (scrollPosition > 10) {
      setTop(false)
    } else if (scrollPosition < 10) {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const [showModal, setShowModal] = React.useState(false);

  return (
    <Popover className="fixed lg:sticky lg:top-0 z-10">
      <nav className="w-screen mx-auto items-center justify-between">
        <div className={`flex items-center py-2 px-4 justify-between ${top ? 'bg-transparent' : 'bg-white'} transition duration-300 ease-in-out lg:bg-white`}>
          <div className="flex-[.5]">
            <Popover.Button className="p-2 inline-flex items-center justify-center text-black">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6 lg:h-7 lg:w-7" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <Link href='/'><img className="h-10 lg:h-12 w-auto cursor-pointer" src="img/logo.png" alt="Logo"/></Link>
          </div>
          <div className="flex justify-end flex-[.5]">
            <div className='flex items-center justify-between w-[7rem] lg:w-[8rem]'>
              <Link href='/account'><UserIcon className="h-5 w-5 lg:h-7 lg:w-7 cursor-pointer mr-2 hover:text-slate-400" aria-hidden="true"/></Link>
              <SearchIcon className="h-5 w-5 lg:h-7 lg:w-7 cursor-pointer mr-2 hover:text-slate-400" aria-hidden="true" onClick={() => setShowModal(true)}/>
              <Link href='/cart'><ShoppingCartIcon className="h-5 w-5 lg:h-7 lg:w-7 cursor-pointer hover:text-slate-400" aria-hidden="true"/></Link>
            </div>
          </div>          
        </div>
      </nav>

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
                  <h4 className="text-[1.85rem] font-semibold">
                    LOOKING FOR SOMETHING?
                  </h4>
                  <button
                    className="p-1 bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-4"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <XCircleIcon className='text-red-700'/>
                    </span>
                  </button>
                </div> 
            {/*body*/}
                <div className="relative p-6 flex items-center justify-center">
                   <input type="text" className='border border-slate-500 rounded pl-2 w-[85%] h-12' placeholder='Search'/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <div>
                    <p className='text-[12px] text-slate-400 italic'>EX: Paintings, Handmade, Wood, Oil Paint...</p>
                  </div>
                  <button
                    className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-[.75] fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}


{/********MOBILE VIEW********/}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top-right z-10">
          <div className="bg-white w-screen h-screen flex flex-col justify-between">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="p-2 inline-flex items-center justify-center text-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6 lg:h-7 lg:w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <img
                    className="h-9 lg:h-11 w-auto"
                    src="img/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="">
                  <SearchIcon className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer" aria-hidden="true"/>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center justify-between rounded-md"
                    >          
                    <span className="ml-3 text-base font-light text-black">{item.name}</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className=" h-20 flex items-end justify-center px-5">
              <div className="flex items-center justify-around w-96 h-full">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-light text-gray-500 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
        
      {/*IPAD,LAPTOP/DESKTOP MENU*/}
      <CategoryMenu />

    </Popover>

  )
}