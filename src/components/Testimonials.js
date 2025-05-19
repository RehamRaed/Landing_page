import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Ali",
    role: "Fitness Coach",
    feedback: "I noticed a change in just one week! This app keeps me on track and makes healthy living simple.",
  },
  {
    id: 2,
    name: "Mahmoud Salem",
    role: "University Student",
    feedback: "Never thought I’d enjoy daily movement. The design is relaxing and the routines are actually doable.",
  },
  {
    id: 3,
    name: "Reham Nasser",
    role: "Mom of Two",
    feedback: "Finally found time for myself. The home workouts are flexible and easy to follow.",
  },
  {
    id: 4,
    name: "Omar Tayeh",
    role: "Developer",
    feedback: "It fits my schedule perfectly. I can stay active even during work hours.",
  },
  {
    id: 5,
    name: "Lina Hossam",
    role: "Yoga Instructor",
    feedback: "Love how customizable the routines are. I use it every morning!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState({
    users: 0,
    ratings: 0,
    workouts: 0,
    challenges: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const animateCounts = () => {
    let users = 0, ratings = 0, workouts = 0, challenges = 0;

    const interval = setInterval(() => {
      users += 10;
      ratings += 5;
      workouts += 7;
      challenges += 1;

      setStats({
        users: users <= 2500 ? users : 2500,
        ratings: ratings <= 1800 ? ratings : 1800,
        workouts: workouts <= 1009 ? workouts : 1009,
        challenges: challenges <= 55 ? challenges : 55,
      });

      if (users >= 2500 && ratings >= 1800 && workouts >= 1200 && challenges >= 85) {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <>
      <section className="testimonials-section">
         <h2 className="carousel-title">What Our Users Say</h2>
  <div className="underline-wrapper">
    <div className="mixed-underline">
      <div className="solid-part"></div>
      <div className="dashed-part">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
        <div className="coverflow-container">
          <button className="arrow-circle left" onClick={prev}>
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="cards-wrapper">
            {testimonials.map((item, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              const isInactive = Math.abs(offset) <= 2 && !isActive;

              const transformStyle =
                offset === 0
                  ? "translateX(0) scale(1) rotateY(0deg) z-index: 3;"
                  : `translateX(${offset * 220}px) scale(0.85) rotateY(${
                      offset > 0 ? -30 : 30
                    }deg) z-index: ${2 - Math.abs(offset)};`;

              return (
                <div
                  key={item.id}
                  className={`testimonial-card ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                  style={{
                    transform: `perspective(1000px) ${transformStyle.split(' z-index')[0]}`,
                    zIndex: parseInt(transformStyle.split('z-index:')[1]),
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <i className="bi bi-star-fill star-icon"></i>
                  <p className="feedback-text">“{item.feedback}”</p>
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-role">{item.role}</p>
                </div>
              );
            })}
          </div>

          <button className="arrow-circle right" onClick={next}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>

      <div className="stats-section mt-5" ref={statsRef}>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <i className="bi bi-emoji-smile stat-icon"></i>
            <h2 className="stat-number">{stats.users}+</h2>
            <p className="stat-label">Happy Users</p>
          </div>
          <div className="col-md-3 mb-4">
            <i className="bi bi-star stat-icon"></i>
            <h2 className="stat-number">{stats.ratings}+</h2>
            <p className="stat-label">Positive Reviews</p>
          </div>
          <div className="col-md-3 mb-4">
            <i className="bi bi-bar-chart-line stat-icon"></i>
            <h2 className="stat-number">{stats.workouts}+</h2>
            <p className="stat-label">Workouts Completed</p>
          </div>
          <div className="col-md-3 mb-4">
            <i className="bi bi-bullseye stat-icon"></i>
            <h2 className="stat-number">{stats.challenges}+</h2>
            <p className="stat-label">Active Challenges</p>
          </div>
        </div>
      </div>
    </>
  );
}
