import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import { FaMeh,FaCalculator,FaCheckDouble } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import './Header1.css'
function Header1() {
  return (
    <div className='blog_header1 bg-slate-900 '>
      <Container fluid>
      <Row>     
           <Col md={3} className='cole1'>
           <Card style={{ width: '20rem' }}>
               <Card.Body>
                   <Card.Title><div className='div1'><center><FaMeh className='fameh text-danger'/></center></div></Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">training Courses</Card.Subtitle>
                   <div className='ligne'></div>
                   <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                   </Card.Text>
               </Card.Body>
               </Card>
           </Col>
           <Col md={3} className='cole2'>
           <Card style={{ width: '20rem' }}>
               <Card.Body>
                   <Card.Title><div className='div2'><center><FaCheckDouble className='fameh text-success'/></center></div></Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">2,769 online courses</Card.Subtitle>
                   <div className='ligne'></div>
                   <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                   </Card.Text>
               </Card.Body>
               </Card>
           </Col>
           <Col md={3} className='cole3'>
           <Card style={{ width: '20rem' }} className='cartes'>
               <Card.Body>
                   <Card.Title><div className='div3'><center><FaCalculator className='fameh text-'/></center></div></Card.Title>
                   <Card.Subtitle className="mb-2 text-light">training Courses</Card.Subtitle>
                   <div className='lignee'></div>
                   <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                   </Card.Text>
               </Card.Body>
               </Card>
           </Col>
       </Row>
       
      </Container>
    </div>
  )
}

export default Header1
