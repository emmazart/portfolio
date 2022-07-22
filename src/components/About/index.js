import React from "react";

function About() {
  return (
    <section id="about" className="content py-3 my-2">
      <h2 className="content-title text-2xl">About Me</h2>
      <img 
        className="my-3"
        src={require('../../assets/profile_pic.jpg')} 
        style={{ height: '200px', width: '200px', borderRadius: '10%'}}
        alt="Emma smiling at the camera"
        ></img>
      <h3 className="my-2">Hi! I'm Emma</h3>
      <p className="my-3">
        I'm a full stack web developer leveraging my theatre management and small
        business operations background to build helpful and intuitive tools for
        everyday use. 
      </p>
      <p className="my-3">
        I recently completed a certificate in full stack development
        from the University of Minnesota Coding Bootcamp, am known as a leader in group-developed projects,
        and have a passion for streamlining communication and developing clean, user-friendly
        applications. 
      </p>
      <p className="my-3">        
        In personal projects, my goal is to learn new technologies
        and use current knowledge in novel ways, not always focusing on the end
        product as the driving force. I’m looking for my next opportunity and excited to join a collaborative,
        quality and community-driven team to build applications with a purpose.
      </p>
    </section>
  );
}

export default About;
