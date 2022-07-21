import React from "react";

function About() {
  return (
    <section id="about">
      <h2 className="test">About Me</h2>
      <img src={require('../../assets/profile_pic.jpg')} style={{ height: '200px', width: '200px', borderRadius: '10%'}}></img>
      <h3>Hi! I'm Emma</h3>
      <p>
        I'm a full stack web developer leveraging my theatre management and small
        business operations background to build helpful and intuitive tools for
        everyday use. <br className="py-3" /> I recently completed a certificate in full stack development
        from the University of Minnesota Coding Bootcamp, am known as a leader in group-developed projects,
        and have a passion for streamlining communication and developing clean, user-friendly
        applications. <br className="py-3"/> In personal projects, my goal is to learn new technologies
        and use current knowledge in novel ways, not always focusing on the end
        product as the driving force. I’m looking for my next opportunity and excited to join a collaborative,
        quality and community-driven team to build applications with a purpose.
      </p>
    </section>
  );
}

export default About;
