import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

function Project() {

    return(
        <section>
            {projects.map(project => {

                return(
                    <div className='project-card'>
                        <h3>{`${project.title}`}</h3>
                        <img src={require(`../../assets/app_images/${project.file_name}`)} style={{width: "400px"}}></img>
                        <p>
                            <a href={`${project.deployment}`}>
                                View deployment
                            </a>
                        </p>
                        <p>
                            <a href={`https://github.com/${project.github}`}>
                                Check out {`${project.title}`} on Github <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </p>
                    </div>
                )
            
            })}
        </section>
    )
}


export default Project;