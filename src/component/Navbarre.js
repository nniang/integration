import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import './Navbarre.css';
function Navbarre() {
  return (
    <Navbar bg="dark" expand="lg" className='barre'>
      <Container>
        <Navbar.Brand href="#home" className=' text-light'>BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className=' barrenav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#Product" className='text-light'>Product</Nav.Link>
            <Nav.Link href="#Pricing" className='text-light'>Pricing</Nav.Link>
            <Nav.Link href="#Contact" className='text-light'>Contact</Nav.Link>
                <Button variant="none" className='text-light bouton12 '>Light</Button>
                <Button className="btn btn-primary bouton11">JOIN US <FaArrowRight className='farr'/></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarre;