import React, { useState } from "react";
import "./About.css";
import ProfileImg from "../img/profile-img.png";
import "../files/bootstrap.min.css";
import { motion } from "framer-motion";

const About = () => {
  const [skills, setSkills] = useState(true);
  const [hobbies, setHobbies] = useState(false);
  const [edu, setEdu] = useState(false);

  const showSkills = () => {
    setSkills(true);
    setHobbies(false);
    setEdu(false);
  };

  const showHobbies = () => {
    setSkills(false);
    setHobbies(true);
    setEdu(false);
  };

  const showEdu = () => {
    setSkills(false);
    setHobbies(false);
    setEdu(true);
  };
  return (
    <motion.div
      initial={{ x: "0%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      id="about"
    >
      <div class="container wow zoomIn" data-wow-delay="0.1s">
        <div class="row">
          <motion.div
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            class="col-md-5 col-1"
          >
            <img
              src={ProfileImg}
              alt=""
              style={{
                position: "relative",
                width: "90%",
                boxShadow: "0 0 40px #03a9f4",
                borderRadius: "100%",
              }}
            />
          </motion.div>
          <div class="col-md-5 col-2">
            <motion.h1
              initial={{ x: "5%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ x: "5%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0, delay: 0 }}
              transition={{ delay: 0.3 }}
              class="para"
              style={{
                textAlign: "justify",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              This is Khushpreet Singh, a web developer. I've completed my Bachelor's degree in Computer Applications (BCA). Over the past few years, I've honed my skills in frontend and backend development using a variety of tools, frameworks, and languages. I've gained practical experience through working on numerous projects aimed at mastering these technologies, from creating responsive websites to improving user interfaces with the latest web tools. Outside of academics, I've actively participated in college competitions, earning certificates for my achievements. These experiences have helped me grow and learn.
            </motion.p>

            <motion.div
              initial={{ x: "5%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0, delay: 0 }}
              transition={{ delay: 0.3 }}
              class="tab-titles"
            >
              <p
                class={`tab-links a-skill ${skills ? "active" : ""}`}
                onClick={showSkills}
              >
                SKILLS
              </p>
              <p
                class={`tab-links a-exp ${hobbies ? "active" : ""}`}
                onClick={showHobbies}
              >
                HOBBIES
              </p>
              <p
                class={`tab-links a-edu ${edu ? "active" : ""}`}
                onClick={showEdu}
              >
                EDUCATION
              </p>
            </motion.div>
            {skills && (
              <motion.div
                initial={{ x: "5%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                class="tab-contents active-tab about-skills"
              >
                <ul>
                  <li>
                    <span style={{ fontSize: "16px", marginTop: "3px" }}>
                      HARD SKILLS
                    </span>
                    <br />
                    <strong>Frontend : </strong>React.js, HTML, CSS, Tailwind CSS, Bootstrap <br />
                    <div style={{ marginTop: "5px" }}>
                      <strong>Backend : </strong> Node.js, Express.js, MongoDB
                    </div>
                    <div style={{ marginTop: "5px" }}>
                      <strong>Programming Languages : </strong> JavaScript, C++
                    </div>
                    <div style={{ marginTop: "5px" }}>
                      <strong>Tools & Technologies : </strong> Git, GitHub, Firebase, VSCode, Postma
                    </div>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}> SOFT SKILLS</span>
                    <br />
                    Patience, Leadership, Teamwork & Problem Solver
                  </li>
                </ul>
              </motion.div>
            )}
            {hobbies && (
              <motion.div
                initial={{ x: "5%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-200%", opacity: 0 }}
                class="tab-contents about-experience"
              >
                <ul>
                  <li>
                    <span
                      style={{ fontSize: "16px", textTransform: "uppercase" }}
                    >
                      Lyricsts
                    </span>
                    <br />
                    This skills involve the ability to create lyrics that
                    effectively convey emotions, tell a story, and connect with
                    an audience.
                  </li>
                  <li>
                    <span
                      style={{ fontSize: "16px", textTransform: "uppercase" }}
                    >
                      CUE SPORTS
                    </span>
                    <br />
                    Cue sports skills involve strategic thinking, and hand-eye coordination, allowing for control and accuracy in games such as snooker and billiards.
                  </li>
                </ul>
              </motion.div>
            )}
            {edu && (
              <motion.div
                initial={{ x: "5%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-200%", opacity: 0 }}
                class="tab-contents about-education"
              >
                <ul>
                  <li>
                    <span>BACHOLAR OF COMPUTER APPLICATION</span>
                    <br />
                    CGPA: 7.4 | BABA FARID COLLEGE, BATHINDA | (2021-2024) 
                    
                  </li>
                  <li>
                    <span>SENIOR SECONDARY EDUCATION ( 10TH+2 )</span>
                    <br />
                    CGPA: 8.6 | GOVT. SEN. SEC. SCHOOL, ABOHAR | (2020-2021)
                     
                  </li>
                  <li>
                    <span>MATRICULATION EDUCATION ( 10TH)</span>
                    <br />
                    CGPA: 8.4 | DIVINE LIGHT PUBLIC SEN. SEC. SCHOOL, ABOHAR | (2018-2019) 
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
