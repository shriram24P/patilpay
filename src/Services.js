import React, { useState } from "react";
import ServiceApi from "./API/ServiceApi";

const Services = () => {
  const [serviceApi, setServiceApi] = useState(ServiceApi);
  // console.warn(serviceApi)

  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money?
          </h1>
          <div className="row">
            {serviceApi.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                  key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">
                        {info}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
