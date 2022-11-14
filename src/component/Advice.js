import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image4 from '../images/image4.jpg'
import { AiOutlineDownload } from "react-icons/ai";
import './Advice.css'
import {FaHeart,FaEye,FaShoppingCart,FaChartBar,FaStar,FaClock,FaChevronRight} from 'react-icons/fa'
export default function Advice() {
  return (
    <div >
      <Container fluid >
        <Row>
            <p className='text-primary h6'>Pratice Advice</p>
            <p className='h1 text-capitalize text-wrap'>make online education accessible</p>
            <p className='h6'>Problems trying to resolve  the conflict between <br/> the two major realms of Classical physics : Newtonian mechanics</p>
            <Col md={3} className='blog_Advice'>
              <img src={image4} className='img-fluid images4' alt='image1'/> 
              <div className='divpara'><center>Sale</center></div>
              <div className='heart1'><center><FaHeart className='heart'/></center></div>
              <div className='eye1'><center><FaEye className='eye'/></center></div>
              <div className='cart1'><center ><FaShoppingCart className='cart'/></center></div>
              <h4 className='h4'>English</h4> <div className='etoile'><FaStar className='star'/><p className='para text-light'>4.9</p></div>
              <h3 className='graphic'>Graphic Design</h3>
              <p className='parafocus'>
                we focus ergonomics <br/> and meeting you...</p>
                <p>
                <AiOutlineDownload className='aioutline'/><p className='ico'>15 Sales</p>
              </p>
              <p className='text-muted h5 para11'>$16.48</p>
              <p className='text-success h5 para1'>$16.48</p>
              <FaClock className='faclock' size={25}/><p className='paraclock'>Pro...</p>
              <FaChartBar className='fachartbar' size={25}/>
              <p className='fach'>64 Les.....</p>
              <FaClock className='faclock1' size={25}/><p className='paraclock1'>22hr..</p>
              <button class="bouton"><p className='parabouton'>Learn More</p><FaChevronRight className='fachevron'/></button>
            </Col>
            <Col md={3} className='blog_Advice'>
              <img src={image4} className='img-fluid images4' alt='image1'/> 
              <div className='divpara'><center>Sale</center></div>
              <div className='heart1'><center><FaHeart className='heart'/></center></div>
              <div className='eye1'><center><FaEye className='eye'/></center></div>
              <div className='cart1'><center ><FaShoppingCart className='cart'/></center></div>
              <h4 className='h4'>English</h4> <div className='etoile'><FaStar className='star'/><p className='para text-light'>4.9</p></div>
              <h3 className='graphic'>Graphic Design</h3>
              <p className='parafocus'>
                we focus ergonomics <br/> and meeting you...</p>
                <p>
                <AiOutlineDownload className='aioutline'/><p className='ico'>15 Sales</p>
              </p>
              <p className='text-muted h5 para11'>$16.48</p>
              <p className='text-success h5 para1'>$16.48</p>
              <FaClock className='faclock' size={25}/><p className='paraclock'>Pro...</p>
              <FaChartBar className='fachartbar' size={25}/>
              <p className='fach'>64 Les.....</p>
              <FaClock className='faclock1' size={25}/><p className='paraclock1'>22hr..</p>
              <button class="bouton"><p className='parabouton'>Learn More</p><FaChevronRight className='fachevron'/></button>
            </Col>
            <Col md={3} className='blog_Advice'>
              <img src={image4} className='img-fluid images4' alt='image4'/> 
              <div className='divpara'><center>Sale</center></div>
              <div className='heart1'><center><FaHeart className='heart'/></center></div>
              <div className='eye1'><center><FaEye className='eye'/></center></div>
              <div className='cart1'><center ><FaShoppingCart className='cart'/></center></div>
              <h4 className='h4'>English</h4> <div className='etoile'><FaStar className='star'/><p className='para text-light'>4.9</p></div>
              <h3 className='graphic'>Graphic Design</h3>
              <p className='parafocus'>
                we focus ergonomics <br/> and meeting you...</p>
                <p>
                <AiOutlineDownload className='aioutline'/><p className='ico'>15 Sales</p>
              </p>
              <p className='text-muted h5 para11'>$16.48</p>
              <p className='text-success h5 para1'>$16.48</p>
              <FaClock className='faclock' size={25}/><p className='paraclock'>Pro...</p>
              <FaChartBar className='fachartbar' size={25}/>
              <p className='fach'>64 Les.....</p>
              <FaClock className='faclock1' size={25}/><p className='paraclock1'>22hr..</p>
              <button class="bouton"><p className='parabouton'>Learn More</p><FaChevronRight className='fachevron'/></button>
            </Col>
            <Col md={3} className='blog_Advice'>
              <img src={image4} className='img-fluid images4' alt='image4'/> 
              <div className='divpara'><center>Sale</center></div>
              <div className='heart1'><center><FaHeart className='heart'/></center></div>
              <div className='eye1'><center><FaEye className='eye'/></center></div>
              <div className='cart1'><center ><FaShoppingCart className='cart'/></center></div>
              <h4 className='h4'>English</h4> <div className='etoile'><FaStar className='star'/><p className='para text-light'>4.9</p></div>
              <h3 className='graphic'>Graphic Design</h3>
              <p className='parafocus'>
                we focus ergonomics <br/> and meeting you...</p>
                <p>
                <AiOutlineDownload className='aioutline'/><p className='ico'>15 Sales</p>
              </p>
              <p className='text-muted h5 para11'>$16.48</p>
              <p className='text-success h5 para1'>$16.48</p>
              <FaClock className='faclock' size={25}/><p className='paraclock'>Pro...</p>
              <FaChartBar className='fachartbar' size={25}/>
              <p className='fach'>64 Les.....</p>
              <FaClock className='faclock1' size={25}/><p className='paraclock1'>22hr..</p>
              <button class="bouton"><p className='parabouton'>Learn More</p><FaChevronRight className='fachevron'/></button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
