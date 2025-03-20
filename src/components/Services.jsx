import React from "react";
import Services_content from "./Services_content";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
  integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Services = () => {
  return (
    <section className="container-fluid">
      <div className="container text-center mt-5 d-flex flex-column align-items-center gap-3 ">
        <h4>Our Services</h4>
        <h2>The services we are offering</h2>
        <span>
          Our service includes a spectrum of software development solutions from
          development to a smart decision for your business.
        </span>
        <div className="d-flex flex-column align-items-center gap-3 mt-3">
          <div className="row ">
            <div className="col">
              <Services_content
                color="bg-danger-subtle "
                heading="Blockchain Development"
                text=" We are a leading Blockchain development company in India providing
                        Blockchain services like Smart Contract development, ICO,
                        Cryptocurrency Exchanges, Distributed apps across multiple domains."
              />
            </div>
            <div className="col">
            <Services_content
                color="bg-warning-subtle"
                heading="Web-App Development"
                text="W3villa Technologies offer bespoke web app development services by harnessing a wide range of technologies to deliver robust, efficient, and scalable web app solutions."
              />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <Services_content
                 color="bg-warning-subtle"
                heading="E-commerce Developemnt"
                text="W3villa Technologies is specilized in delivering custom E-commerce based application using Spree Commerce, Shopify and many more."
              />
            </div>
            <div className="col">
              <Services_content
                 color="bg-danger-subtle"
                heading="Mobile App Development"
                text="W3villa Technologies is specilized in delivering custom E-commerce based application using Spree Commerce, Shopify and many more."
              />
            </div>
            {/* <div className="col">
            <Services_content
               color="bg-danger-subtle "
                heading="Mobile App Development"
                text= "Our expert mobile app developers are specialise in providing end-to-end solution of mobile app development lifecycle that gives better version in terms of visibility and performance."
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
