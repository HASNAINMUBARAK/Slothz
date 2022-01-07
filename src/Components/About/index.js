import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <div className="contain">
        <div className="left1">
          <div className="inner">
            <h2 className="heading"> Upload Images</h2>
            <div className="btns">
              <button className="bttn">Choose from Device</button>
              <button className="bttn">Camera</button>
            </div>
          </div>
        </div>
        <div clasName="right1">
          <h2 className="heading1">Previous Records</h2>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur minus ullam quam voluptates, aspernatur beatae itaque
            tempora sunt modi harum qui doloremque omnis pariatur delectus hic,
            alias dicta facilis. Harum.lo Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis placeat hic ducimus eaque dolores
            necessitatibus eligendi, error tempora sint quae odit repellendus,
            inventore, explicabo dolorum eius iusto ullam veritatis voluptatem.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
