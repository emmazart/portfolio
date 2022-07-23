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
        title: 'Budget Tracker',
        file_name: 'budget-tracker.png',
        alt: "computer screenshot of deployed application",
        github: 'emmazart/redesigned-octo-waffle',
        deployment: 'https://warm-scrubland-56362.herokuapp.com/'
    },
    {
        title: 'Workday Scheduler',
        file_name: 'scheduler-app.png',
        alt: "computer screenshot of deployed application",
        github: 'emmazart/super-disco-rainbow',
        deployment: 'https://emmazart.github.io/super-disco-rainbow/'
    },
];

function Project() {

    return(
        <section className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {/* alternate class names columns-1 md:columns-2 md:mt-5 md:pt-2 */}
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