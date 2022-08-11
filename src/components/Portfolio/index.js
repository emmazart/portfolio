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
            deployment: 'https://swappers-meet.herokuapp.com/'
        },
        {
            title: 'Trip Consultant',
            file_name: 'flight-tracker-app.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/bootcamp-project-1',
            deployment: 'https://emmazart.github.io/bootcamp-project-1/'
        },
        {
            title: 'A Dish A Day',
            file_name: 'dish-a-day.png',
            alt: "computer screenshot of deployed application",
            github: 'MNlegion/A-Dish-A-Day',
            deployment: 'https://agile-ocean-35043.herokuapp.com/'
        },
        {
            title: 'Coding Quiz',
            file_name: 'coding-quiz.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/coding-quiz',
            deployment: 'https://emmazart.github.io/coding-quiz/'
        },
        {
            title: 'Note Taker',
            file_name: 'note-taken.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/note-taken',
            deployment: 'https://emmazart-note-taken.herokuapp.com/'
        },
        {
            title: 'Workday Scheduler',
            file_name: 'scheduler-app.png',
            alt: "computer screenshot of deployed application",
            github: 'emmazart/super-disco-rainbow',
            deployment: 'https://emmazart.github.io/super-disco-rainbow/'
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
                        <Project title={project.title} fileName={project.file_name} altText={project.alt} github={project.github} deployment={project.deployment} />
                        )
                })}
            </section>
        </div>
    )
};

export default Portfolio;