import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {

    // IMPORT PROPS FROM PORTFOLIO COMPONENT
    const { title, fileName, altText, github, deployment, description, tools } = props;

    // RENDER CARD COMPONENT FOR EACH PROJECT
                return(
                    <div className='project-card flex justify-center my-8'>
                        <div className='rounded-lg shadow-lg bg-tangerine max-w-sm'>
                            <img 
                                className='rounded-t-lg'
                                src={require(`../../assets/app_images/${fileName}`)} style={{width: "400px"}} alt={`${altText}`}>
                            </img>
                            <div className='p-6'>
                                <h3 className='text-xl font-medium mb-2'>{`${title}`}</h3>
                                <p className='text-base'>{description}</p>
                                <p className='text-sm mt-3'>Built with: {tools}</p>
                                { deployment ? 
                                    <p className='text-xs mt-3'>
                                        <a href={`${deployment}`}>
                                            View deployment
                                        </a>
                                    </p>
                                 : 
                                 <p className='text-xs m-3'>
                                    Due to changes in Heroku's deployment programs, this application's live deployment is currently unavailable. Code and further application details can be found in the README.md on GitHub.
                                </p>}
                                <p className='text-xs'>
                                    <a href={`https://github.com/${github}`}>
                                        Check out {`${title}`} on Github <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            
            }



export default Project;