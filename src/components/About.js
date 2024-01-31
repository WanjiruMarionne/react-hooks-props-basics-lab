import React from "react";
import Links from "./Links";

function About({bio, githubLink, linkedinLink}) {
  let bioContent = null;

  if (bio && bio.trim() !== "") {
    bioContent = <p>{bio}</p>;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links githubLink={githubLink} linkedinLink={linkedinLink} />
    </div>
  );
}

export default About;
