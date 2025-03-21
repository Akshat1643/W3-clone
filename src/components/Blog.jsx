import React from "react";
import Card from "react-bootstrap/Card";


const Blog = () => {
  return (
    <section className="container-fluid">
      <div className="container text-center mt-5 d-flex flex-column align-items-center gap-2  ">
        <h6> From Our Blog</h6>       
        <h2>Recent article</h2>
        <span>
          Helping brands go digital with advanced solutions to improve the
          real-world experience for the target audience. A premium place of web
          expert
          <br />
          super committed to your success in the worldwide web.
        </span>
        <div className="container mt-4">
        <div className="row row-cols-lg-3 row-cols-md-2">
          <div className="col ">
            <div className="text-start  shadow "> 
              <Card >
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/437/posts/Generative_AI_for_automotive_industry.jpg"
                />
                <Card.Body>
                  <div className="px-3 pt-3 pb-4">
                 <div className=" mb-3">
                 <Card.Title>The Transformative Power of Generative AI in the...</Card.Title>
                 </div>
                  <Card.Text>
                  Artificial Intelligence is slowly and steadily getting accepted by different industrial...
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col">
         <div className="text-start rounded-4 shadow">
              <Card >
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/436/posts/Transforming_Your_Business_With_AI_Software.jpg"
                />
                <Card.Body>
                <div className="px-3 pt-3 pb-4">
                <div className=" mb-3">
                 <Card.Title>A Comprehensive Guide to Transforming Your Busines</Card.Title>
                 </div>
                  <Card.Text>
                  Technologies like Artificial Intelligence and Machine Learning have been playing a vital
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col">
         <div className="text-start rounded-4 shadow">
              <Card >
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/435/posts/How_AI_Is_Revolutionizing_the_Oil_and_Gas_Industry.jpg"
                />
                <Card.Body>
                <div className="px-3 pt-3 pb-4">
                <div className="mb-3">
                 <Card.Title>How AI Is Revolutionizing the Oil and Gas Industry?</Card.Title>
                 </div>
                  <Card.Text>
                  Artificial Intelligence is slowly and steadily getting accepted by different industrial...
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div> 
            
            
        </div>    
      </div>
    </section>
  );
};

export default Blog;
