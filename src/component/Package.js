import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import image1 from '../images/image1.png'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import {FaAngleRight} from "react-icons/fa"
import './Package.css'
export default function Package() {
  return (
    <div className='bloc_generale'>
      <Container fluid>
        <Row>
            <Col md={4}>
            <div className='trait'></div>
                <h1>Packages that are aprodable</h1>
                <p className='h6'>Problems trying to resolve the conflict between the two major realms of Classical physics Newtonian mechanics</p>
                <Button variant='light' className='text-primary  boutone '><p className='pp'>Learn More <FaAngleRight className='fangle'/></p></Button>
            </Col>           
            <Col md={3}></Col>
            <Col md={4}>
                <img src={image1} className='img-fluid images1' alt='image1'/>
                <img src={image2} className='img-fluid rounded images2' alt='image1'/>
                <img src={image3} className='img-fluid rounded images3' alt='image1'/>
            </Col>
            <Col md={2}></Col>
        </Row>

      </Container>
    </div>
  )
}
