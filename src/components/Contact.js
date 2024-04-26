import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion, useScroll } from 'framer-motion';

function Contact() {
  const [showSuccessMessage, setSuccessMessage] = useState(false)

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs
      .sendForm('service_b5j3enu', 'template_vw48w1h', form.current, {
        publicKey: 'L2X8ituZloP8_o9re',
      })
      .then(
        () => {
          setSuccessMessage(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className="contact-us">
      <div className="container contact-details">
        <div className="contact-heading">
          <motion.h1 initial={{ x: "15%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0 }}>Contact Us</motion.h1>
        </div>
        <motion.div 
        initial={{ y: "30%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity:0 }}
        className="contact-links">
          <div className="info">
            <div className="icon"><IoLocationSharp /></div>
            <div className="content">
              <h3>Address</h3>
              <Link to="#" className="links">Kothi Faiz, Ganganagar Road,<br />Abohar, Punjab, India</Link>
            </div>
          </div>
          <div className="info">
            <div className="icon"><FaPhoneAlt /></div>
            <div className="content">
              <h3>Phone</h3>
              <Link to="tel:+916283637070" className="links">+91 6283637070</Link>
            </div>
          </div>
          <div className="info">
            <div className="icon"><IoIosMail /></div>
            <div className="content">
              <h3>Mail</h3>
              <Link to="mailto:example@mail.com" className="links">khushramgaria@gmail.com</Link>
            </div>
          </div>
          <div className="info">
            <div className="icon"><FaLinkedin /></div>
            <div className="content">
              <h3>Linkedin</h3>
              <Link to="#" className="links">@khush_ramgaria</Link>
            </div>
          </div>
          <div className="info">
            <div className="icon"><FaGithub /></div>
            <div className="content">
              <h3>Github</h3>
              <Link to="#" className="links">@khushramgaria</Link>
            </div>
          </div>
          <div className="info">
            <div className="icon"><FaInstagram /></div>
            <div className="content">
              <h3>Instagram</h3>
              <Link to="#" className="links">@khush_ramgaria_</Link>
            </div>
          </div>
        </motion.div>
      </div>
  
      <div className="container form-details">
        <div className="contact-heading">
            <motion.h1 initial={{ x: "15%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0 }}>Get In Touch</motion.h1>
        </div>
        <motion.div 
        initial={{ y: "15%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity:0 }}
        className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col">
                <input ref={nameRef} type="text" className="form-control" name="user_name" placeholder="Enter Your Name Here" required />
              </div>
              <div className="col">
                <input ref={emailRef} type="email" className="form-control" name="user_email" placeholder="Enter Your Mail Here" required />
              </div>
            </div>
            <div className="textarea">
              <textarea ref={messageRef} className="form-control" name='message' placeholder="Enter Your Message Here" required></textarea>
            </div>
            {showSuccessMessage &&
            <div className='successMessage'>
              <p>Message Send Successfully !!</p>
            </div>
            }
            <div className="submit">
              <button type='submit'>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Contact