import React, {useEffect} from 'react'
import './Skills.css'
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
Swiper.use([Navigation, Pagination]);

function Skills() {
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
  return (
    <>
    <div className="skills-head">
        <motion.h1 initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity:0 }} ><span>Skills <br /> <span className="span">Some of my Skills</span></span></motion.h1>
    </div>
    <motion.section initial={{ y: "10px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50%", opacity: 0 }} transition={{duration: 0.2, ease: "easeInOut"}} className="container-skills" id='skills'>
      <div className="card__container swiper">
        <div className="card__content">
            <div className="swiper-wrapper">
                <article className="card__article swiper-slide" delay={0.2}>
                  <div class="co">
                    <div class="circular-progress cp-1">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide" delay={0.4}>
                  <div class="co">
                    <div class="circular-progress cp-2">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide" delay={0.6}>
                  <div class="co">
                    <div class="circular-progress cp-3">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide">
                  <div class="co">
                    <div class="circular-progress cp-4">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide">
                  <div class="co">
                    <div class="circular-progress cp-7">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide">
                  <div class="co">
                    <div class="circular-progress cp-5">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
                <article className="card__article swiper-slide">
                  <div class="co">
                    <div class="circular-progress cp-6">
                      <span class="progress-value"></span>
                    </div>
                  </div>
                </article>
            </div>
        </div>

        <div className="swiper-button-next">
            <FaRegArrowAltCircleRight className='icon'/>
        </div>
        <div className="swiper-button-prev">
            <FaRegArrowAltCircleLeft className='icon'/>
        </div>
        <div className="swiper-pagination">
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default Skills