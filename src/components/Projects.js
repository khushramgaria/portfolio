import React, {useEffect} from 'react';
import project1 from "../img/vce-admin-panel.png"
import project2 from "../img/vce-student-panel.png"
import project3 from "../img/pets-club.png"
import project4 from "../img/imperial-spice.png"
import project5 from "../img/dashboard.png"
import project6 from "../img/password-generator.png"
import project7 from "../img/random-jokes.png"
import project8 from "../img/cover-webpage.png"
import project9 from "../img/expense-manager.png"
import project10 from "../img/data-validation.png"
import project11 from "../img/Todo-contextAPI.png"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Projects.css'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);

const projects = [
  {
    id: '11',
    name: 'ToDo- With ContextAPI',
    description: 'React.js',
    img: project11,
    link: 'https://to-do-with-context-api.vercel.app/'
  },
  {
    id: '9',
    name: 'Expense Manager',
    description: 'React.js',
    img: project9,
    link: 'https://expense-manager-practice.vercel.app/'
  },
  {
    id: '10',
    name: 'Data Validation',
    description: 'React.js',
    img: project10,
    link: 'https://data-validation-practice.vercel.app/'
  },
  {
    id: '1',
    name: 'VCE - Admin Panel',
    description: 'HTML, CSS & Bootstrap',
    img: project1,
    link: 'https://vce-admin-panel.vercel.app/'
  },
  {
    id: '2',
    name: 'VCE - Student Panel',
    description: 'HTML, CSS & Bootstrap',
    img: project2,
    link: 'https://vce-student-panel.vercel.app/'
  },
  {
    id: '3',
    name: 'PetsClub',
    description: 'HTML, CSS, Bootstrap & PHP',
    img: project3,
    link: 'https://petsclubofficial.000webhostapp.com/index.php'
  },
  {
    id: '4',
    name: 'Imperial Spice',
    description: 'HTML & CSS',
    img: project4,
    link: 'https://imperialspice.vercel.app/'
  },
  {
    id: '5',
    name: 'Dashboard',
    description: 'HTML, CSS & Bootstrap',
    img: project5,
    link: 'https://student-dashboard-page.vercel.app/'
  },
  {
    id: '6',
    name: 'Password Generator',
    description: 'HTML, CSS & JS',
    img: project6,
    link: 'https://passwordgeneratorpractice.vercel.app/'
  },
  {
    id: '7',
    name: 'Random Jokes',
    description: 'HTML, CSS & JS',
    img: project7,
    link: 'https://batmanrandomjokes.vercel.app/'
  },
  {
    id: '8',
    name: 'Cover Webpage',
    description: 'HTML & CSS',
    img: project8,
    link: 'https://coverpage.vercel.app/'
  },
]

const Projects = () => {
  useEffect(() => {
    const swiperCards = new Swiper(".card__content", {
      loop: true,
      spaceBetween: 32,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        600: {
          slidesPerView: 2,
        },
        968: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiperCards.destroy();
    };
  }, []);

  return(
    <>
    <div className="projects-head">
        <motion.h1 initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity: 0 }}><span>Projects <br /> <span className="span">Some of my Projects</span></span></motion.h1>
    </div>
    <section className="container-projects">
      <div className="card__container swiper">
        <div className="card__content">
            <div className="swiper-wrapper">
              {projects.map((project) => (
                <motion.article 
                initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity: 0 }}
                className="card__article swiper-slide">
                  <div className="card__image">
                    <img src={project.img} alt={project.name} className="card__img" />
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">{project.name}</h3>
                    <p className="card__description">
                        {project.description}
                    </p>
                    <Link to={project.link} target='_blank' className="cta">
                      <span>Visit Now</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
        </div>

        <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-pagination">
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects