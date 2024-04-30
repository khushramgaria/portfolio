import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import cert1 from '../img/cert-certificate_course.jpg'
import cert2 from '../img/cert-ms_excel.jpg'
import cert3 from '../img/cert-programming.jpg'
import cert4 from "../img/cert4.jpg"
import cert5 from "../img/cert5.jpg"
import cert6 from "../img/cert6.jpg"
import cert7 from "../img/cert8.jpg"
import cert8 from "../img/cert9.jpg"
import cert9 from "../img/cert10.jpg"
import './Certificates.css'
import { motion } from "framer-motion";

const Certificates = () => {
  const certificateLeft = [cert9, cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8]
  const certificateCenter = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9]
  const certificateRight = [cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert1]
  return (
    <>
      <div className="cert-head">
        <motion.h1 initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity:0 }} transition={{duration: 0.2}}><span>Certificates <br /> <span className="span">Some of my certificates</span></span></motion.h1>
      </div>
      <motion.div initial={{ y: "10px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity: 0 }} transition={{duration: 0.2, ease: "easeInOut"}} className="cert" >
        <Carousel className="cert-left">
          {certificateLeft.map((cert) => (
            <Carousel.Item interval={1000}>
              <img src={cert} text="First slide" width="100%" height="150vh" />
            </Carousel.Item>
          ))}
        </Carousel>

        <Carousel className="cert-center">
          {certificateCenter.map((cert) => (
            <Carousel.Item interval={1000}>
              <img src={cert} text="First slide" width="100%" height="400vh" />
            </Carousel.Item>
          ))}
        </Carousel>

        <Carousel className="cert-right">
          {certificateRight.map((cert) => (
            <Carousel.Item interval={1000}>
              <img src={cert} text="First slide" width="100%" height="150vh" />
            </Carousel.Item>
          ))}
        </Carousel>
      </motion.div>
    </>
  )
}

export default Certificates