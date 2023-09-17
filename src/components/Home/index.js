import React from "react";

const Home = ({mainLogoName}) => {
//console.log('URL',`${process.env.REACT_APP_BASE_URL}settings/GhaniSoftMainLogo.png`);
  return (
    <div style={{ overflow: "hidden" }}>
      
      <header className="header" id="header">
        <div className="container">
          <figure className="logo animated fadeInDown delay-07s">
            <a href="#">
              <img src={`${process.env.REACT_APP_BASE_URL}/settings/${mainLogoName}`} alt="" />
            </a>
          </figure>
          <h1 className="animated fadeInDown delay-07s">
            Welcome To Ghani Soft
          </h1>
          <ul className="we-create animated fadeInUp delay-1s">
            <li>
              Empowering Your Digital Journey
            </li>
          </ul>
          
        </div>
      </header>
    </div>
  );
};
export default Home;
