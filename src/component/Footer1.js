import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer1.css'
function Footer1() {
  return (
    <div className='blog_footer1'>
      <Container fluid>
        <Row>
            <Col md={12}>
               <center><p className='parafooter1'>Made With Love By Figmaland All Right Reserved</p></center>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer1
