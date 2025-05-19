import React from 'react';
import "../styles/Features.css";

function Features() {
  const features = [
    {
      iconClass: 'bi bi-fire',
      title: 'Calorie Tracker',
      description: 'Track every bite with precision. Know what you consume and how it impacts your health every day.',
    },
    {
      iconClass: 'bi bi-heart-pulse',
      title: 'Activity Monitoring',
      description: 'Stay on top of your fitness routine by tracking workouts, steps, and active minutes seamlessly.',
    },
    {
      iconClass: 'bi bi-bell',
      title: 'Reminder Alerts',
      description: 'Timely reminders for meals, hydration, and exercise to keep your health goals on track.',
    },
    {
      iconClass: 'bi bi-calendar-check',
      title: 'Custom Schedule',
      description: 'Create your own fitness calendar that fits your lifestyle and health aspirations.',
    },
    {
      iconClass: 'bi bi-emoji-smile',
      title: 'Mood Tracking',
      description: 'Record your mood daily and discover patterns to improve mental wellness over time.',
    },
    {
      iconClass: 'bi bi-cup-straw',
      title: 'Hydration Goals',
      description: 'Never miss a sip! Track your daily water intake and get reminders to stay hydrated.',
    },
  ];

  return (
    <section className="features-section text-center">
      <h2 className="features-title">Get Ready for Your Journey With Us</h2>
      <div className="mixed-underline">
        <div className="solid-part"></div>
    <div className="dashed-part">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </div>


      <div className="features-container row justify-content-center mt-5">
        {features.map((item, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-5 d-flex justify-content-center">
            <div className={`feature-card p-4 shadow rounded bg-white ${
              idx % 2 === 0 ? 'card-pattern-a' : 'card-pattern-b'
            }`}>
              <div className="icon-wrapper mb-3">
                <i className={`${item.iconClass} feature-icon`}></i>
              </div>
              <h5>{item.title}</h5>
              <p className="text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
