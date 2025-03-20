import React from "react";
import "../styles/Hero.css";
import Carousel from "react-bootstrap/Carousel";

import Hero_card from "./Hero_card";
import ErrorBoundary from "./ErrorBoundary"; // Import the Error Boundary

const Hero = () => {
  return (
    <div className="hero_bg">
      <div className="container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <div>
              {/* Wrap Hero_content in ErrorBoundary */}
              <ErrorBoundary>
                <Hero_card
                  heading_1="Our digital solution"
                  heading_2="helps companies to"
                  heading_3="scale their business"
                  sub_head_1="We have built enormous solutions for startups and"
                  sub_head_2="enterprise across the world."
                  
                />
              </ErrorBoundary>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div>
              {/* Wrap Hero_content in ErrorBoundary */}
              <ErrorBoundary>
                <Hero_card
                  heading_1="Experience the power of"
                  heading_2="Web 3.0 with our scalable"
                  heading_3="digital solutions"
                  sub_head_1="Empower your business on the decentralized web with our"
                  sub_head_2="comprehensive end-to-end digital solutions."
                  
                />
              </ErrorBoundary>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div>
              {/* Wrap Hero_content in ErrorBoundary */}
              <ErrorBoundary>
                <Hero_card
                  heading_1="Explore Bittensor"
                  heading_2="Development Services and"
                  heading_3="Experience Decentralized Ai"
                  sub_head_1="Experience innovation and efficiency with our Bittensor development"
                  sub_head_2="services for your projects."
                  
                />
              </ErrorBoundary>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="hero_footer">
          <img src="https://www.w3villa.com/production/assets/landing_page/aws-4-52d80c8eec25f6cb354e51438fff2b69cd59d1a0368f5461553a990759bf4e0d.png" alt="" />           
          <img src="https://www.w3villa.com/production/assets/landing_page/adobe-4-5a6302ef3237aafcb0f7832df87b62a29284f52af943a4aea920903c4cce6c9d.png" alt="" />
          <img src="https://www.w3villa.com/production/assets/landing_page/new-relic-4-1ec5ce3f4cf08b4db0ff61df3d6a8bb0d84709a6e333ddaaad454dee91945ccb.png" alt="" />
          <img src="https://www.w3villa.com/production/assets/landing_page/gorgias-4-2b8fac76ade5e9f07b89dfdecbccb8526f911ef4182b54a742fad3c71d7f7ad1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
