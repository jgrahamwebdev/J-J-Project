import { Fragment, useState, useEffect } from 'react'

//SCROLL HOOK
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};


function CategoryMenu() {
  //VARIABLE TO CALL SCROLL HOOK
  const scrollDirection = useScrollDirection();

  return (
    <div className='hidden lg:inline-block'>

        <div className={`fixed bg-white w-screen h-[4rem] top-[3.3rem] z-[1] ${ scrollDirection === "down" ? "opacity-0" : "opacity-1"} transition duration-300 ease-in-out`}>
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