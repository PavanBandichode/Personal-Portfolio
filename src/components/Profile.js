import React from "react";
import { useState } from "react";
function Profile(props) {
  const [proffesion, setProfession] = useState("Full Stack Developer");

  setInterval(function () {
    setProfession("MERN Stack Developer");
  }, 6000);
  return (
    <section className="home " id="home">
      <div className="max-width container">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">
            <span>P</span>avan <span>B</span>andichode
          </div>
          <div className="text-3">
            {"And I'm a"}
            <p className="line-1 anim-typewriter">{proffesion}</p>
          </div>
          <a href="https://github.com/PavanBandichode">
            <i className="fa fa-github"></i> Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
