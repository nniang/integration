import {useState, useRef , useEffect} from 'react'
import './Feacture.css'
import { Col, Container, Row,InputGroup,Form,Button } from 'react-bootstrap'

function Feacture() {
  const  [state,setState]=useState('your name')
  const handleInput=(e)=>{
    setState(e.target.value)
  }
  return (
    <div className='blog_principal'>
     <Container fluid>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
            <center>
                <p className='pratice text-primary'>Practice Advice</p>
                <h1 className='h1'>Feactured Products </h1>
                <p>
                &emsp;Problems trying to resolve the conflict beetween <br/> 
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </center>
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}>
            <InputGroup className="mb-5 input" value={state} onChange={handleInput}>
                <Form.Control
                placeholder="Your Email"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-primary" id="button-addon2">
                Subscribe
                </Button>
             </InputGroup>
             {/* <p className='h1'>{state}</p> */}
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Feacture
