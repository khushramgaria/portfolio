import React from 'react'
import styles from './Services.module.css'
import { FaLaptopCode } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { TbEditOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className={styles.services}>
        <div className={styles["services-head"]}>
            <motion.h1 initial={{ y: "35%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity:0 }}><span>Services <br /> <span className={styles.span}>Some of my EXPERTISE</span></span></motion.h1>
        </div>
        <div className={styles["service-container"]}>
          <motion.div initial={{ x: "35%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{delay: 0.3}} className={styles.box} style={{'--clr': '#03a9f4' }}>
              <div className={styles.content}>
                  <div className={styles.icon}>
                      <FaLaptopCode />
                  </div>
                  <div className={styles.text}>
                      <h3>FRONTEND DEVELOPER</h3>
                      <p>Proficient in React.js, HTML, CSS, Tailwind CSS, and Bootstrap, dedicated to creating visually appealing and user-friendly interfaces for seamless web experiences.</p>
                      {/* <Link to="#" className={styles.readmore}>Read More..</Link> */}
                  </div>
              </div>
          </motion.div>
          <motion.div initial={{ x: "35%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{delay: 0.4}} className={styles.box} style={{'--clr':'#ff3e7f'}}>
              <div className={styles.content}>
                  <div className={styles.icon}>
                      <IoLogoCodepen />
                  </div>
                  <div className={styles.text}>
                      <h3>BACKEND DEVELOPER</h3>
                      <p>Skilled in Node.js, Express.js, MongoDB, C++, and JavaScript, specializing in crafting efficient server-side solutions for seamless web application functionality.</p>
                      {/* <Link to="#" className={styles.readmore}>Read More..</Link> */}
                  </div>
              </div>
          </motion.div>
          <motion.div initial={{ x: "35%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5}} className={styles.box}  style={{'--clr':'#009688'}}>
              <div className={styles.content}>
                  <div className={styles.icon}>
                      <TbEditOff />
                  </div>
                  <div className={styles.text}>
                      <h3>DESIGNER</h3>
                      <p>Skilled in logo design and web design, with a keen eye for detail and a passion for crafting visually striking elements that elevate web design aesthetics.</p>
                        {/* <Link to="#" className={styles.readmore}>Read More..</Link> */}
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Services;