import React from 'react';
import './Header.css';
import {Button,Container,Row,Col} from 'react-bootstrap'
export default function Header() {
  return (
    <div>
      <Container fluid className='bg-slate-900 heade'>
            <Row>
                <Col md={12} className=''>
                    <center className='centre'>
                        <p className="text-blue-600">welcom</p>
                        <h1 className='h1 text-light'>Selling on the <br/>  internet like a pro</h1>
                        <p className='text-light h3'>we know how large object will act ,but things <br/> on a small scale just do not act that way.</p>
                        <Button variant="primary " className='ease-in duration-300 bouton1 mt-5' >Get Quote Now</Button>
                        <Button variant="outline-primary" className='ml-5 ease-in duration-300 bouton2 mt-5'>Learn More</Button>
                    </center>
                </Col>
            </Row>
           
      </Container>
    </div>
  )
}
