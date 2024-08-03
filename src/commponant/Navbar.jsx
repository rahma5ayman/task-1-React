// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <nav className='bg-blue-400 p-4 my-3'>
//         <div className="container">
//         <ul className='flex w-full justify-around'>
//             <li><NavLink to={'/'}>Home</NavLink></li>
//             <li><NavLink to={'/about'}>About</NavLink></li>
//             <li><NavLink to={'/portfolio'}>portfolio</NavLink></li>
//             <li><NavLink to={'/contact'}>contact</NavLink></li>
//         </ul>
//         </div>
//     </nav>
//   )
// }

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<nav className='py-4 text-white'>
  <div className="container flex justify-between nav-bar">
    <ul>
      <li className='fw-bold fs-2'><NavLink to={'/'}>START FRAMEWORK</NavLink></li>
    </ul>
    <ul className='flex ul-bar'>
      <li className='fw-bold fs-6'><NavLink to={'/about'}>ABOUT</NavLink></li>
      <li className='fw-bold fs-6'><NavLink to={'/portfolio'}>PORTFOLIO</NavLink></li>
      <li className='fw-bold fs-6'><NavLink to={'/contact'}>CONTACT</NavLink></li>
    </ul>
  </div>
</nav>
  )
}
