import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            title: 'Swappers Meet',
            file_name: 'swappers-meet.png',
            github: 'MNlegion/Swappers-Meet',
            deployment: 'https://swappers-meet.herokuapp.com/'
        },
        {
            title: 'Trip Consultant',
            file_name: 'flight-tracker-app.png',
            github: 'emmazart/bootcamp-project-1',
            deployment: 'https://emmazart.github.io/bootcamp-project-1/'
        },
        {
            title: 'Coding Quiz',
            file_name: 'coding-quiz-gif.gif',
            github: 'emmazart/coding-quiz',
            deployment: 'https://emmazart.github.io/coding-quiz/'
        },
        {
            title: 'Untitled Project (Coming Soon)',
            file_name: 'coming-soon.png',
            github: 'emmazart',
            deployment: 'https://github.com/emmazart'
        }
    ];

    return(
        <div id='portfolio'>
            <h2 className='test'>Portfolio</h2>
            {projects.map(project => 
                {<Project title={project.title} fileName={project.file_name} github={project.github} deployment={project.deployment} />}
            )}
        </div>
    )
};

export default Portfolio;