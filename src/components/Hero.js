import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import heroImg from '../../src/assets/7723eeb5-b592-4d7f-b508-3312d55894a2_1_-removebg-preview.png';

const Hero = () => {
  return (
    <section className="hero-section py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <motion.p
              className="text-muted small-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Achieve Your Health and Fitness Goals with
            </motion.p>

            <motion.h1
              className="display-4 fw-bold text-primary mb-4 hero-title"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <span className="shine-text">Fitpulse</span>
            </motion.h1>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
              <motion.a
                href="#"
                className="btn-download"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Get Started Now
              </motion.a>
            </div>
          </div>

          <div className="col-md-6 text-center mt-5 mt-md-0 position-relative z-2">
            <div className="background-shape"></div>
            <div className="image-wrapper position-relative">
              <div className="floating-icons">
                <motion.div
                  className="floating-circle circle1"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  10K+<br />Downloads
                </motion.div>

                <motion.div
                  className="floating-circle circle3"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  24/7<br />Support
                </motion.div>

                <motion.div
                  className="floating-circle circle4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  AI-Based<br />Workouts
                </motion.div>
              </div>

              <motion.img
                src={heroImg}
                alt="App Screenshot"
                className="img-fluid main-image"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
