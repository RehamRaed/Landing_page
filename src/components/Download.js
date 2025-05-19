import React from 'react';
import appImage from '../assets/pretty-woman-feeling-puzzled-confused-doubting-weighting-choosing-different-options-with-funny-expression.png';
import '../styles/Download.css'; 
import { motion } from 'framer-motion';

function Download() {
  return (
    <section className="download-section">
      <div className="download-container">
        
        <div className="image-side">
          <img
            src={appImage}
            alt="Fitness App"
            className="app-image"
          />
        </div>

        <div className="text-side">
          <h2>Get Fit, Stay Healthy</h2>
          <p>
            Download our app and take the first step toward a better lifestyle. 
            Track your workouts, monitor your progress, and stay motivated every day!
          </p>
          <div className="download-buttons">
            <motion.a
                href="#"
                className="btn-download"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Get the App
              </motion.a>

            <motion.a
                href="#"
                className="btn-download"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Get the App
              </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Download;