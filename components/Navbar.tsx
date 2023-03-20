// components/Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          height: 'auto',
          duration: 0.3,
          ease: 'power1.inOut',
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          ease: 'power1.inOut',
        });
      }
    }
  }, [isOpen]);

  return (
   <>
    <nav className="navbar">
       <button className='hamburger'>
         <span className='hamburger-line'></span>
         <span className='hamburger-line'></span>
         <span className='hamburger-line'></span>
       </button>
       <ul className='nav-menu' id='nav-menu'>
           <Link href="/" legacyBehavior>
              <a className="">Home</a>
           </Link>
           <Link href="/" >
              <a className="">Home</a>
           </Link>
           <Link href="/" legacyBehavior>
              <a className="">Home</a>
           </Link>
           <Link href="/" legacyBehavior>
              <a className="">Home</a>
           </Link>
       </ul>
    </nav>
    </>
  );
};

export default Navbar;

