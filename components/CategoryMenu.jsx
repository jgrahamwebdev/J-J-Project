import { Fragment, useState, useEffect } from 'react'

function CategoryMenu() {

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
    <div className='hidden lg:inline-block'>

        <div className={`fixed w-screen h-[6rem] top-[3.3rem] z-[1] ${top ? 'opacity-1 bg-white' : 'opacity-0'} transition duration-300 ease-in-out`}>
            <div className='w-screen h-[1px] bg-gray-100 absolute'></div>
            <ul className='w-full h-full flex items-center justify-center'>
                <li className='m-4 text-[11px] hover:underline'><a href="/art">ART</a></li>
                <li className='m-4 text-[11px] hover:underline'><a href="/design">DESIGN</a></li>
                <li className='m-4 text-[11px] hover:underline'><a href="/photography">PHOTOGRAPHY</a></li>
                <li className='m-4 text-[11px] hover:underline'><a href="/architecture">ARCHITECTURE</a></li>
                <li className='m-4 text-[11px] hover:underline'><a href="/travel">TRAVEL</a></li>
            </ul>
        </div>

    </div>
  )
}

export default CategoryMenu