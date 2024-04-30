import React, { useState } from 'react'
import './About.css'
import ProfileImg from '../img/profile-img.png'
import '../files/bootstrap.min.css'
import { motion } from 'framer-motion'

const About = () => {
    const [skills, setSkills] = useState(true)
    const [hobbies, setHobbies] = useState(false)
    const [edu, setEdu] = useState(false)

    const showSkills = () => {
        setSkills(true)
        setHobbies(false)
        setEdu(false)
    }

    const showHobbies = () => {
        setSkills(false)
        setHobbies(true)
        setEdu(false)
    }

    const showEdu = () => {
        setSkills(false)
        setHobbies(false)
        setEdu(true)
    }
  return (
    <motion.div initial={{ x: "0%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0 }} id="about"> 
      <div class="container wow zoomIn" data-wow-delay="0.1s">
          <div class="row">
              <motion.div 
              initial={{ y: "30%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity:0 }} 
              class="col-md-5 col-1">
                  <img src={ProfileImg} alt="" style={{position: 'relative', width: '90%', boxShadow: '0 0 40px #03a9f4', borderRadius: '100%'}}  />
              </motion.div>
              <div class="col-md-5 col-2">
                  <motion.h1 initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0 }}>About Me</motion.h1>
                  <motion.p 
                  initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0, delay: 0 }} transition={{delay: 0.3}}
                  class="para" style={{textAlign: 'justify', fontSize: '14px', fontWeight: '700'}}>This is Khushpreet Singh. I am a technical enthusiast with a passion for
                    learning. Now I'm pursuing Bachelor of
                    Computer Application (BCA). My studies have
                    given me a detailed understanding of
                    programming languages. I'm skilled in web
                    designing and basic programming. I also enjoy
                    taking part in college activities and received
                    certificates.
                    I am a technical enthusiast with a passion for
                    learning. Now I'm pursuing my Bachelor of
                    Computer Application (BCA). My studies have
                    given me a detailed understanding of
                    programming languages. I'm skilled in web
                    designing and basic programming. I also enjoy
                    taking part in college activities and received
                    certificates.</motion.p>

                  <motion.div 
                  initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0, delay: 0 }} transition={{delay:0.3}}
                  class="tab-titles">
                      <p class={`tab-links a-skill ${skills ? 'active' : ''}`} onClick={showSkills}>SKILLS</p>
                      <p class={`tab-links a-exp ${hobbies ? 'active' : ''}`} onClick={showHobbies}>HOBBIES</p>
                      <p class={`tab-links a-edu ${edu ? 'active' : ''}`} onClick={showEdu}>EDUCATION</p>
                  </motion.div>
                  {skills &&
                  <motion.div 
                  initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity:0 }} 
                  class="tab-contents active-tab about-skills">
                      <ul>
                          <li><span style={{fontSize: '16px', marginTop: '3px'}}>HARD SKILLS</span><br /><strong>EXPERIENCED : </strong>HTML, CSS, BootStrap, JavaScript, REACT.JS, Firebase, Github <br /><div style={{marginTop: '5px'}}><strong>BASIC : </strong> Python, PHP & C++</div></li>
                          <li><span style={{fontSize: '16px'}}> SOFT SKILLS</span><br />Patience, Leadership,
                            Teamwork & Problem Solver</li>
                      </ul>
                  </motion.div>}
                  {hobbies &&
                  <motion.div 
                  initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-200%", opacity:0 }} 
                  class="tab-contents about-experience" >
                      <ul>
                          <li><span style={{fontSize: '16px', textTransform: 'uppercase'}}>Songwriting</span><br />Songwriting skills involve the ability to create lyrics that effectively convey emotions, tell a story, and connect with an audience</li>
                          <li><span style={{fontSize: '16px', textTransform: 'uppercase'}}>Travelling</span><br />Enthusiastic traveler with a global perspective and a love for exploring diverse cultures.</li>
                      </ul>
                  </motion.div>}
                  {edu &&
                  <motion.div 
                  initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-200%", opacity:0 }} 
                  class="tab-contents about-education">
                    <ul>
                        <li><span>PURSUING BACHOLAR OF COMPUTER APPLICATION</span><br />FROM BABA FARID COLLEGE, BATHINDA  <br/>(2021-2024) | CGPA: 7.5</li>
                        <li><span>SENIOR SECONDARY EDUCATION ( 10TH+2 )</span><br />FROM GOVT. SEN. SEC. SCHOOL, ABOHAR <br />(2020-2021) | CGPA: 8.6</li>
                        <li><span>MATRICULATION EDUCATION ( 10TH)</span><br />FROM DIVINE LIGHT PUBLIC SEN. SEC. SCHOOL, ABOHAR <br /> (2018-2019) | CGPA: 8.4</li>
                    </ul>
                  </motion.div>}
              </div>
          </div>
      </div>
  </motion.div>
  )
}

export default About;