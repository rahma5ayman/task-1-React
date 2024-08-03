
// import React from 'react'
// import './App.css'
// import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Layout from './commponant/Layout'
// import Home from './commponant/Home'
// import About from './commponant/About'
// import Notfount from './commponant/Notfount'
// import Portfolio from './commponant/Portfolio'

// let router = createBrowserRouter([
//     {path:'/', element:<Layout></Layout> , children:[
//     {index:true , element:<Home></Home>},
//     {path:'/about' , element:<About></About>},
//     {path:'/portfolio' , element:<Portfolio></Portfolio>},
//     {path:'*' , element:<Notfount></Notfount>},
//     ]}
// ])

// function App() {
//     return (
//     <RouterProvider router={router}></RouterProvider>
//     )
// }

// export default App

import React from 'react'
import Layout from './commponant/Layout'
import Home from './commponant/Home'
import About from './commponant/About'
import Portfolio from './commponant/Portfolio'
import Contact from './commponant/Contact'
import Notfound from './commponant/Notfount'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

export default function App() {

let routes =    createBrowserRouter([
        {path:'/', element:<Layout></Layout> , children:[
            {index:true , element:<Home></Home>},
            {path:'/about' , element:<About></About>},
            {path:'/portfolio' , element:<Portfolio></Portfolio>},
            {path:'/contact' , element:<Contact></Contact>},
            {path:'*' , element:<Notfound></Notfound>},
        ]}
    ])
    return (
    <RouterProvider router={routes}></RouterProvider>
    )
}
