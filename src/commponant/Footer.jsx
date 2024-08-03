import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
<>
<footer className='foo-ter text-white py-14 text-center'>
<Container>
      <Row>
        <Col md={4} >
          <div className='text-footer'>
            <h2 className='fw-bold fs-5 py-2'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p className='py-2'>Clark, MO 65243</p>
          </div>
        </Col>
        <Col md={4} >
          <div className=' text-footer'>
          <h2 className='fw-bold fs-5 py-2'>AROUND THE WEB</h2>
          <div className='i-footer'>
          <i className="fa-brands fa-facebook mx-1"></i>
          <i className="fa-brands fa-twitter mx-1"></i>
          <i className="fa-brands fa-linkedin mx-1"></i>
          <i className="fa-solid fa-globe mx-1"></i>
          </div>
          </div>
        </Col>
        <Col md={4} >
          <div className='text-footer'>
          <h2 className='fw-bold fs-5 py-2'>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </Col>
      </Row>
    </Container>

</footer>
<div className='bg-slate-800 text-center text-white py-6'>
  <p>Copyright © Your Website 2021</p>
</div>
</>

  )
}



