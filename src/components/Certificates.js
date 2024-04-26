import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import cert1 from '../img/cert-certificate_course.jpg'
import cert2 from '../img/cert-ms_excel.jpg'
import cert3 from '../img/cert-programming.jpg'
import './Certificates.css'
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <>
      <div className="cert-head">
        <motion.h1 initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity:0 }} transition={{duration: 0.2}}><span>Certificates <br /> <span className="span">Some of my certificates</span></span></motion.h1>
      </div>
      <motion.div initial={{ y: "10px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity: 0 }} transition={{duration: 0.2, ease: "easeInOut"}} className="cert" >
        <Carousel className="cert-left">
          <Carousel.Item interval={1000}>
            <img src={cert1} text="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert2} text="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert3} text="Third slide" />
          </Carousel.Item>
        </Carousel>

        <Carousel className="cert-center">
          <Carousel.Item interval={1000}>
            <img src={cert1} text="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert2} text="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert3} text="Third slide" />
          </Carousel.Item>
        </Carousel>

        <Carousel className="cert-right">
          <Carousel.Item interval={1000}>
            <img src={cert1} text="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert2} text="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={cert3} text="Third slide" />
          </Carousel.Item>
        </Carousel>
      </motion.div>
    </>
  )
}

export default Certificates