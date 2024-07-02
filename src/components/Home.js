import React from "react";
import './Home.css'
import '../files/bootstrap.min.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhone, FaUserTie, FaRegFolderOpen, FaDownload } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import ProfileImg from '../img/profile-img.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <>
      <Container fluid className="index-row" id='home'>
        <motion.Container initial={{ y: "50%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center icons">
          <Row className="justify-content-start">
            <Col xs={4}></Col>
            <Col xs={4}> </Col>
          </Row>
          <Row
            className="justify-content-center"
            // delay={0.2}
          >
            <Col xs={4}>
                <Link to="/about">
                  <button variant="link" className="a-logo">
                  <FaUserTie />
                  <span className="icon-title"><Link to="about" >About Me</Link></span>
                  </button>
                </Link>
            </Col>
            <Col xs={4}>
                <Link to="services">
              <Button variant="link" className="s-logo">
                <MdOutlineMiscellaneousServices />
                <span className="icon-title">Services</span>
              </Button>
                </Link>
            </Col>
          </Row>
          <Row className="justify-content-end" 
          // delay={0.2}
          >
            <Col xs={4}>
                <Link to="certificates">
              <Button variant="link" className="cert-logo">
                <GrCertificate />
                <span className="icon-title"><Link to="certificates">Certificates</Link></span>
              </Button>
                </Link>
            </Col>
            <Col xs={4}></Col>
          </Row>
          <Row
            className="justify-content-start"
            // delay={0.2}
          >
            <Col xs={4}></Col>
            <Col xs={4}> </Col>
          </Row>
          <Row
            className="justify-content-center wow zoomIn"
            data-wow-delay="0.5s"
          >
            <Col xs={4}>
                <Link to="projects">
              <Button variant="link" className="p-logo">
                <FaRegFolderOpen />
                <span className="icon-title">Projects</span>
              </Button>
                </Link>
            </Col>
            <Col xs={4}>
                <Link to="contact">
              <Button variant="link" className="c-logo">
                <FaPhone />
                <span className="icon-title">Contact Me</span>
              </Button>
                </Link>
            </Col>
          </Row>
          <Row className="justify-content-end" 
          // delay={0.2}
          >
            <Col xs={4}>
              <Link to="skills">
              <Button variant="link" className="skill-logo">
                <VscGraph />
                <span className="icon-title">Skills</span>
              </Button>
                </Link>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </motion.Container>

        <div className='hiddenImg'>
                <img src={ProfileImg} width='50%' />
            </div>
            <div className="main">
                <div className='content'>
                    <h3>Hello I'm</h3>
                    <h1>Khushpreet Singh</h1>
                    <h5>A Web Developer <span>From Punjab, India.</span></h5>
                    <p>I'm creative web developer based on Punjab, and I'm very passionate and dedicated to my work.</p>
                    <button class="button">
                      <Link className="text" to="https://drive.google.com/file/d/1NNeAwm28NmlsH5Ca-ppoIkdefD0dDujx/view?usp=sharing" target="_blank">
                        RESUME
                        <FaDownload className="icon"/>
                      </Link>
                    </button>
                </div>
                <div className='img'>
                    <img src={ProfileImg} alt="Profile Image" width='45%' />
                </div>
            </div>
      </Container>
    </>
  );
};

export default Home;
