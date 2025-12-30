import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.progress-bar');
          bars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = bar.getAttribute('data-width');
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.5 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-light py-5" ref={skillsRef}>
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4>HTML</h4>
            <div className="progress">
              <div className="progress-bar bg-success" data-width="90%"></div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h4>CSS</h4>
            <div className="progress">
              <div className="progress-bar bg-info" data-width="85%"></div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h4>JavaScript</h4>
            <div className="progress">
              <div className="progress-bar bg-warning" data-width="80%"></div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h4>React</h4>
            <div className="progress">
              <div className="progress-bar bg-danger" data-width="75%"></div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Bootstrap</h4>
            <div className="progress">
              <div className="progress-bar bg-primary" data-width="85%"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
