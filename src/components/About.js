import React from "react";

function About(props) {
  return (
    <section className="about">
      <div className="container">
        <h1>About me...</h1>
        <div className="flex justify">
          <figure className="flex-30">
            <img src="./Images/pavan.jpg"></img>
          </figure>
          <div className="flex-60">
            <p>
              I have completed my bachelors in Electrical Engineering from PVG's
              COET. A web development enthusiast, now focusing on expanding my
              skill set. Currently Learning full stack web development at
              AltCampus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
