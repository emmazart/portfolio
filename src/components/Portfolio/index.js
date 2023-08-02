import React from 'react';
import Project from '../Project';

function Portfolio() {

    // PROJECTS ARRAY holds all project data
    // github link gets appended to 'https://github.com/' in Project component
    // deployment link needs full link
    // all fields are required

    const projects = [
        {
            title: 'Swappers Meet',
            file_name: 'swappers-meet.png',
            alt: "computer screenshot of deployed application",
            github: 'MNlegion/Swappers-Meet',
            deployment: 'https://swappers-meet.herokuapp.com/',
            description: 'Inspired by the Buy Nothing movement, this app aims to take their mission to a wider audience. This is a place for users to post and give away items they no longer need. In an act of mutual aid, items are given and taken freely, without the need for the exchange of money or other goods.',
            tools: 'Javascript, Node & Express, MySQL, Bootstrap, Handlebars.js'
        },
        {
            title: 'Trip Consultant',
            file_name: 'flight-tracker-app.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/trip-consultant',
            deployment: 'https://emmazart.github.io/trip-consultant/',
            description: 'This application allows users to enter a flight number and destination city for their trip and have flight & weather information returned. Due to incompatibility in the security of the AviationStack API fetch calls, that element does not currently work on live deployment.',
            tools: 'Javascript, Tailwind CSS, AviationStack API, OpenWeather API'
        },
        {
            title: 'A Dish A Day',
            file_name: 'dish-a-day.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/a-dish-a-day',
            deployment: 'https://dish-a-day.herokuapp.com/',
            description: 'Inspired by a love of food, this app was created for foodies & independent recipe developers to share, save, and review recipes posted on the site.',
            tools: 'React, MongoDB & Mongoose, GraphQL, Apollo'
        },
        {
            title: 'Coding Quiz',
            file_name: 'coding-quiz.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/coding-quiz',
            deployment: 'https://emmazart.github.io/coding-quiz/',
            description: 'This quiz is built entirely in vanilla JavaScript. It prompts students through a series of questions, responds to correct & incorrect answers, and allows users to save their score.',
            tools: 'Javascript, HTML, CSS'
        },
        {
            title: 'Note Taker',
            file_name: 'note-taken.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/note-taken',
            deployment: 'https://emmazart-note-taken.herokuapp.com/',
            description: 'An application that allows users to write, save, delete, and view their notes. It stores all notes in a JSON file and uses CRUD API endpoints.',
            tools: 'Javascript, Node & Express, HTML, CSS'
        },
        {
            title: 'Workday Scheduler',
            file_name: 'scheduler-app.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/super-disco-rainbow',
            deployment: 'https://emmazart.github.io/super-disco-rainbow/',
            description: 'This is a daily scheduling application written in JQuery. It allows users to add and keep track of their daily events, updating in real time with Day.js.',
            tools: 'JQuery, Bootstrap, Day.js'
        },
    ];

    return(
        <div id='portfolio' className="content py-3 my-2">
            <h2 className="content-title text-2xl">Portfolio</h2>
            <section className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {/* alternate class names columns-1 md:columns-2 md:mt-5 md:pt-2 */}

                {/* MAP OVER PROJECTS ARRAY */}
                {/* for each project in array, return <Project /> with props passed for each key/value in project object */}
                {projects.map(project => {
                    return(
                        <Project title={project.title} fileName={project.file_name} altText={project.alt} github={project.github} deployment={project.deployment} description={project.description} tools={project.tools} />
                        )
                })}
            </section>
        </div>
    )
};

export default Portfolio;