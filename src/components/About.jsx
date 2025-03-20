import React from "react";
import "../styles/About.css";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const About = () => {
  return (
    <section className="container-fluid bg-light about">
      <div className="container ">
        <div className="row gx-5">
          <div className="col">
            <div className="about_img">
              <img
                src="https://www.w3villa.com/production/assets/landing_page/who_we_are_image-2.0-2f0adc5481a3332c4fb5247b79b5ac355bd2642f088587aafbc6085665d9f60d.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div>
              <h4>About Us</h4>
              <h2>Who are we</h2>
              <p>
                We are a CMMi Level 3 appraised software development company that
                offers state-of-the-art technological solutions to startups,
                SMEs, and enterprises across the globe. We bring a design-led
                approach to integrate digital transformation by incorporating
                innovative solutions to improve customer experience. Our 100+
                dedicated engineers are well-trained to deploy on any complexity
                development project with unparalleled results. 
                <br /><br />
                We do believe in structured and automated support systems by implementing 
                agile and scrum methodology in our day-to-day operations that keep our 
                clients accurate in any delivery.
              </p>
                 
              {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Click <strong>Me</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">View More</Button>
        </OverlayTrigger>
      ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
