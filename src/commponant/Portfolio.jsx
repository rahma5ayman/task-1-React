import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../commponant/poert1.png'
import img2 from '../commponant/port2.png'
import img3 from '../commponant/port3.png'

export default function Portfolio() {

  return (
    <>
<div>
  <div className='portfolio pb-4 pt-4'>
    <div className='text-center pt-4 p-por'>
        <h2 className='mb-3 fs-1 fw-bolder uppercase'>portfolio component</h2>
      </div>

      <div className='icone mb-3'> 
      <div className='line me-3 bg-slate-900'></div>
      <i class="fa-solid fa-star color" ></i>
      <div className='line ms-3 bg-slate-800'></div>
    </div>
    <div>
    <Container>
      <Row className='gap-y-8'>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img1} className='rounded-lg' alt=""  />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img2} className='rounded-lg' alt="" />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img3} className='rounded-lg' alt="" />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img1} className='rounded-lg' alt="" />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img2} className='rounded-lg' alt="" />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
        <Col md={6} lg={4}>
        <div className='liyar1'>
        <img src={img3} className='rounded-lg' alt="" />
        <div className='liyer '>
        <i class="fa-solid fa-plus "></i>
        </div>
        </div>
        </Col>
      </Row>
    </Container>



    </div>
  </div>
</div>
    </>
  )
}
