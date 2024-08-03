import React from 'react'
import img from '../commponant/boy-avatar-png-removebg-preview.png'
export default function Home() {
  return (
    <>
  <div>
    <div className='test '>
    <div className='im-g '>
      <img src={img} alt="" />
    </div>
    <div className='i-text text-center pt-4 text-white'>
    <h2 className='mb-3 fs-1 fw-bolder'>start Framework</h2>
    </div>
    <div className='icone mb-3'> 
      <div className='line me-3 bg-white'></div>
      <i class="fa-solid fa-star" ></i>
      <div className='line ms-3 bg-white'></div>
    </div>
    <div className='text-center text-white'>
    <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  </div>
    </>
  )
}
