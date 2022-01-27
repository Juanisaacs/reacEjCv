import React from "react";
import "./About.css";

const About= ({ hero }) => {
  return (
    <div>
      <div className="about">
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.info}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;