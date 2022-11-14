import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Practice.css'
import  image10 from '../images/image10.jpg'
import  image9 from '../images/image9.jpg'
import { FaStar } from "react-icons/fa";
export default function Practice() {
  return (
    <div className='diver'>
      <Container fluid >
        <Row>
            <p className='paragraphe'>Practice Advice</p>
            <h1 className='title'>Our Experts Teacher</h1>
            <p className='paragrapher'>Problems trying to resolve the conflict between <br/>the two major realms of Classical physics : Newtonian mechanics</p>
            <Col md={2}></Col>
            <Col md={4} className='marge'>
                <img src={image10} className='images rounded-circle' alt='image'/>
                <p className='cole text-muted'>Slate helps you see how many more days <br/>
                  you need to work to reach your financial <br/>
                  &emsp;&emsp; goal for the month and year. 
                </p>  
                &emsp; <FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastarte '/>
                <p className='pa text-dark'>Regina Miles</p>
                <p className='h6 pas text-muted'>Designer</p>
            </Col>
            <Col md={4} className='marge'>
                <img src={image9} className='images rounded-circle' alt='image'/>
                <p className='cole text-muted'>Slate helps you see how many more days <br/>
                  you need to work to reach your financial <br/>
                  &emsp;&emsp; goal for the month and year. 
                </p>  
                &emsp; <FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastart '/>
                &emsp;<FaStar className='fastarte '/>
                <p className='pa text-dark'>Regina Miles</p>
                <p className='h6 pas text-muted'>Designer</p>
            </Col>

        </Row>
      </Container>
    </div>
  )
}
