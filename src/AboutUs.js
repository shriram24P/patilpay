import React, { useState } from "react";
import HowToUseApp from "./API/HowToUse";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(HowToUseApp);
  // console.log(aboutUs)
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div
              className="col-12 col-lg-5 text-center
                our-service-leftside-img"
            >
              <img src="./images/hero3.jpg" alt="aboutUsImg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutUs.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------second prt of section------ */}

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content
            d-flex justify-content-center align-item-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutUs.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
            <div
              className="col-12 col-lg-5 
                our-service-rightside-img"
            >
              <img src="./images/callcenter.jpg" alt="aboutUsImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
