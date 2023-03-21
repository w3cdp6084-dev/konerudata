import React from 'react'

function Navbar() {
  return (
    <div className='hambergerMenu'>
      <div className='hambergerMenu-overlay-01'></div>
      <div className='hambergerMenu-overlay-02'></div>
      <button className='hambergerMenu-btn js-click-target'>
         <span className='hambergerMenu-hover'>
            <span className='hambergerMenu-openarea'>
               <span className='hambergerMenu-openarea-line hambergerMenu-openarea-line-01'></span>
               <span className='hambergerMenu-openarea-line hambergerMenu-openarea-line-02'></span>
            </span>
         </span>
      </button>
    </div>
  )
}

export default Navbar
