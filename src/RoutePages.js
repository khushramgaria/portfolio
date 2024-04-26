import React from 'react'
import About from "./components/About.js"
import App from './App.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import Certificates from './components/Certificates.js';
import Services from './components/Services.js';
import Projects from './components/Projects.js'
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import { AnimatePresence } from 'framer-motion';

function RoutePages() {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<Skills />} />
                </Route>
            </Routes>
        </AnimatePresence>
  )
}

export default RoutePages