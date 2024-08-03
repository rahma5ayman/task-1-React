import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <>
    <div>
      <div className='portfolio pb-4 pt-4'>
        <div className='text-center pt-4 p-por'>
            <h2 className='mb-3 fs-1 fw-bolder uppercase'>conatct section</h2>
          </div>
    
          <div className='icone mb-3'> 
          <div className='line me-3 bg-slate-900'></div>
          <i class="fa-solid fa-star color" ></i>
          <div className='line ms-3 bg-slate-800'></div>
        </div>

      <form className='w-1/2 mx-auto'>
        <input type="text"  placeholder='User Name' className='border-b border-b-2 w-11/12 p-2 my-3 focus:outline-none'/>
        <input type="text"  placeholder='User Age' className='border-b border-b-2 w-11/12 p-2 my-3 focus:outline-none'/>
        <input type="text"  placeholder='User Email' className='border-b border-b-2 w-11/12 p-2 my-3 focus:outline-none'/>
        <input type="text"  placeholder='User Password' className='border-b border-b-2 w-11/12 p-2 my-3 focus:outline-none'/>
        <div>
        <Button variant="outline-dark">Sent Massege</Button>
        </div>
      </form>

      </div>
    </div>
        </>
  )
}
