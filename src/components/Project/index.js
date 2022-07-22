import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        title: 'Coding Quiz',
        file_name: 'coding-quiz-gif.gif',
        alt: "gif of multiple computer screenshots of deployed application",
        github: 'emmazart/coding-quiz',
        deployment: 'https://emmazart.github.io/coding-quiz/'
    },
    {
        title: 'Untitled Project',
        file_name: 'coming-soon.png',
        alt: "colorful digital art reads 'coming soon'",
        github: 'emmazart',
        deployment: 'https://github.com/emmazart'
    }
];

function Project() {

    return(
        <section>
            {projects.map(project => {

                return(
                    <div className='project-card flex justify-center my-8'>
                        <div className='rounded-lg shadow-lg bg-tangerine max-w-sm'>
                            <img 
                                className='rounded-t-lg'
                                src={require(`../../assets/app_images/${project.file_name}`)} style={{width: "400px"}} alt={`${project.alt}`}>
                            </img>
                            <div className='p-6'>
                                <h3 className='text-xl font-medium mb-2'>{`${project.title}`}</h3>
                                <p className='text-base'>
                                    <a href={`${project.deployment}`}>
                                        View deployment
                                    </a>
                                </p>
                                <p className='text-base'>
                                    <a href={`https://github.com/${project.github}`}>
                                        Check out {`${project.title}`} on Github <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            
            })}
        </section>
    )
}



export default Project;