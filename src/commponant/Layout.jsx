// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from './Navbar'

// export default function Layout() {
//   return (
//     <div>
//         <Navbar></Navbar>
//     <Outlet></Outlet> 
//         <footer>Footer..</footer>
//     </div>
//   )
// }

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
