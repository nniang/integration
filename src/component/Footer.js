import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className='blog_footer'>
      <Container fluid  className='mt-5'>
        <Row >
            <Col md={3} className='mt-5'>
                <h1 className='h1 titre '>Get In Touch</h1>
                <p className='paragraphes'>the quick fox jumps over the <br/> lazy dog</p>
                <FaFacebook className='ter' size={30}/>
                <FaInstagram className='tere'size={30}/>
                <FaTwitter className='teree'size={30}/>
            </Col>
            <Col md={3} className='mt-5'>
                <h1>Company info</h1>
                <p>Abouts Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </Col>
            <Col md={3} className='mt-5'>
                <h1>Feactures</h1>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </Col>
            <Col md={3} className='mt-5'>
                <h1>Resources </h1>
                <p>IOS & Android</p>
                <p>Watch a demo</p>
                <p>Ustomers</p>
                <p>API</p>
            </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Footer
