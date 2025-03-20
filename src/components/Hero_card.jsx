import React from "react";
import Button from "react-bootstrap/Button";

const Hero_card = ({ heading_1, heading_2, heading_3, sub_head_1, sub_head_2 }) => {
    return (

    <div className="test px-3">
      <div className="hero_left">
        <div>
          <h1>{heading_1}</h1>
          <h1>{heading_2}</h1>
          <h1>{heading_3}</h1>
        </div>
        <div>
          <h5>{sub_head_1}</h5>
          <h5>{sub_head_2}</h5>
        </div>
        <div>
          <Button variant="primary">Primary</Button>
        </div>
      </div>
      <div className="hero_img">
        <img src="/a.jpg" alt="Hero" className="hero_image" />
      </div>
    </div>
  );
};

export default Hero_card;