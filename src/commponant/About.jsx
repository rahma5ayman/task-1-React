import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <>
    <div>
      <div className='test py-11'>
    <div className='ab-text  text-white'>
      <h2 className='mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
    </div>
    <div className='icone mb-3'> 
      <div className='line me-3 bg-white'></div>
      <i class="fa-solid fa-star" ></i>
      <div className='line ms-3 bg-white'></div>
    </div>
    <div className='about text-white'>
    <Container>
      <Row>
        <Col md={6}>
        <p className='py-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </Col>
        <Col md={6}>
          <p className='py-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></Col>
      </Row>
    </Container>
    </div>
      </div>
    </div>
      </>
  )
}