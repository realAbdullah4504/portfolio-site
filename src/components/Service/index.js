import React from "react";

const Service = ({ services }) => {
  //console.log(services);
  return (
    <>
      <section className="main-section" id="service">
        <div className="container">
          <h2>Services</h2>
          <h6>We Provide Full Stack Web and Mobile Solutions</h6>
          <div className="row">
            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
              {services?.map(({ _id, name, description, isActive }) => (
                <div key={_id} className="service-list">
                  {isActive && (
                    <div>
                      <div className="service-list-col1">
                        <i className="fa-gear"></i>
                      </div>
                      <div className="service-list-col2">
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
              <img src="img/macbook-pro.png" alt="" />
            </figure>
          </div>
        </div>
      </section>

      {/* <div className="service-list">
                                <div className="service-list-col1">
                                    <i className="fa-apple"></i>
                                </div>
                                <div className="service-list-col2">
                                    <h3>Node.js and Express.js:</h3>
                                    <p>Leverage the speed and efficiency of Node.js and Express.js to build robust and scalable server-side solutions.</p>
                                </div>
                            </div>
                            <div className="service-list">
                                <div className="service-list-col1">
                                    <i className="fa-medkit"></i>
                                </div>
                                <div className="service-list-col2">
                                    <h3>API Integration:</h3>
                                    <p>Seamlessly integrate APIs to enhance the functionality of your applications and improve overall efficiency.</p>
                                </div>
                            </div>
                            <div className="service-list">
                                <div className="service-list-col1">
                                    <i className="fa-paw"></i>
                                </div>
                                <div className="service-list-col2">
                                    <h3>Testing and Quality Assurance:</h3>
                                    <p>Our rigorous testing processes ensure your applications perform flawlessly across different platforms and devices.</p>
                                </div>
                            </div> */}

      <section className="main-section alabaster">
        <div className="container">
          <div className="row">
            <figure className="col-lg-5 col-sm-4 wow fadeInLeft">
              <img src="img/iphone.png" alt="" />
            </figure>
            <div className="col-lg-7 col-sm-8 featured-work">
              <h2>featured work</h2>
              <p className="padding-b">
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt. Proin iaculis purus consequat sem cure digni ssim.
                Donec porttitora entum suscipit.
              </p>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-02s">
                  <i className="fa-magic"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-02s">
                  <h3>magic of theme development</h3>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim. Donec
                    porttitora entum suscipit aenean rhoncus posuere odio in
                    tincidunt.{" "}
                  </p>
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-04s">
                  <i className="fa-gift"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-04s">
                  <h3>neatly packaged</h3>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim. Donec
                    porttitora entum suscipit aenean rhoncus posuere odio in
                    tincidunt.{" "}
                  </p>
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-06s">
                  <i className="fa-dashboard"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-06s">
                  <h3>SEO optimized</h3>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim. Donec
                    porttitora entum suscipit aenean rhoncus posuere odio in
                    tincidunt.{" "}
                  </p>
                </div>
              </div>
              <a className="Learn-More" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
