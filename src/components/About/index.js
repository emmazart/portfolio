import React from "react";

function About() {
  return (
    <section id="about" className="content py-3 my-2">
      <h2 className="content-title text-2xl">About Me</h2>

      {/* CONTAINER HOLDS IMAGE AND TEXT CONTAINER */}
      <div className="py-1 my-1 flex flex-col md:flex-row">
        <div className="flex flex-row flex-none justify-center mx-2">
          <img 
            className="my-3"
            src={require('../../assets/profile_pic.jpg')} 
            style={{ height: '200px', width: '200px', borderRadius: '10%'}}
            alt="Emma smiling at the camera"
          ></img>
        </div>

        {/* ABOUT ME TEXT */}
        <div className="md:px-5 md:mx-2 flex-column align-top justify-center">
          <h3 className="my-2">Hi! I'm Emma</h3>
          <p className="my-3">
          I'm a front-end web developer leveraging my theatre management and small business operations background to build helpful and intuitive tools for everyday use.
            
          </p>
          <p className="my-3">
            I received a certificate in full stack development
            from the University of Minnesota Coding Bootcamp, am known as a leader among my colleagues & classmates,
            and have a passion for streamlining communication and developing clean, user-friendly
            applications. 
          </p>
          <p className="my-3">        
            In personal projects, my goal is to learn new technologies
            and use current knowledge in novel ways, not always focusing on the end
            product as the driving force. I’m looking for my next opportunity and excited to join a collaborative,
            quality and community-driven team to build applications with a purpose.
          </p>
          <p className="my-3">        
            <span 
            className="font-bold"
            >Languages: </span> <br />
            Javascript & JQuery • MySQL & NoSQL • HTML & CSS
          </p>
          <p className="my-3">        
            <span
            className="font-bold"
            >Tools & Methodologies: </span> <br />
            MERN Stack • OOP • API Design • Git & Github
          </p>
          <img 
            src={require('../../assets/badge.png')}
            style={{ height: '400px', width: '400px', display: 'inline'}}
            alt="gold and maroon badge reads: University of Minnesota Full Stack Web Development, College of Continuing & Professional Studies"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
