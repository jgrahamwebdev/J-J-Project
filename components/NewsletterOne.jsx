import React from 'react'

const navigation = {
    main: [
      { name: 'CONTACT', href: '#' },
      { name: 'NEWSLETTER', href: '#' },
      { name: 'PRODUCTION', href: '#' },
      { name: 'PRIVACY POLICY', href: '#' },
      { name: 'IMPRINT', href: '#' },
    ],
    social: [
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg className="h-[2.2rem] w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg className="h-[1.75rem] w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
          </svg>
        ),
      }, 
    ],
  }

function NewsletterOne() {
  return (
    <div className='flex bg-gray-100 w-screen lg:h-[27rem]'>
    <div className='w-screen lg:w-1/2 h-[19rem] lg:h-full flex items-center justify-center flex-col'>
        <div className='relative w-full flex items-center justify-center flex-col'>
            <h1 className='mb-[2rem] font-serif text-lg'>Subscribe to my newsletter:</h1>
            <div className='w-3/4 lg:w-1/2 h-auto flex items-center justify-center'>
              <input className='w-full h-[3rem] bg-gray-100 border border-gray-300 pl-4 font-serif' type="text" placeholder='Email'/>
              <button className='h-[3rem] w-[4rem] bg-gray-100 border border-gray-300 hover:bg-green-400 hover:text-white'>&rarr;</button>
            </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6 lg:hidden">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-500 hover:text-black">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </a>
          ))}
        </div>
    </div>

    <div className='hidden lg:flex items-center justify-center flex-col w-1/2 h-full'>
        <h1 className='font-light text-[1.2rem]'>FIND ME ON:</h1>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-500 hover:text-black">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </a>
          ))}
        </div>
    </div>
    </div>
  )
}

export default NewsletterOne