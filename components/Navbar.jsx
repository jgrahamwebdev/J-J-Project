/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from '@heroicons/react/outline'

const solutions = [
  {
    name: 'ART',
    href: '#',
  },
  {
    name: 'DESIGN',
    href: '#',
  },
  { 
    name: 'PHOTOGRAPHY', 
    href: '#', 
  },
  {
    name: 'ARCHITECTURE',
    href: '#',
  },
  {
    name: 'TRAVEL',
    href: '#',
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

  return (
    <Popover className="fixed z-10">
      <nav className="w-screen mx-auto">
        <div className={`flex items-center py-2 px-4 justify-between ${top ? 'bg-none' : 'bg-white'} transition duration-300 ease-in-out lg:bg-white`}>
          <div className="w-8">
            <Popover.Button className="p-2 inline-flex items-center justify-center text-black">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <div>
            <img
              href="#"
              className="h-9 w-auto cursor-pointer"
              src="img/logo.png"
              alt="Workflow"
            />
          </div>
          <div className="">
            <SearchIcon className="h-5 w-5 cursor-pointer" aria-hidden="true"/>
          </div>          
        </div>
      </nav>




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
        <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top-right">
          <div className="bg-white w-screen h-screen">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="p-2 inline-flex items-center justify-center text-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <img
                    className="h-9 w-auto"
                    src="img/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="">
                  <SearchIcon className="h-5 w-5" aria-hidden="true"/>
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
            <div className="h-72 flex items-end justify-center px-5">
              <div className="flex items-center justify-around w-96">
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
    </Popover>
  )
}