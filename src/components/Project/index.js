import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Project(props) {
    const { title, fileName, altText, github, deployment } = props;

                return(
                    <div className='project-card flex justify-center my-8'>
                        <div className='rounded-lg shadow-lg bg-tangerine max-w-sm'>
                            <img 
                                className='rounded-t-lg'
                                src={require(`../../assets/app_images/${fileName}`)} style={{width: "400px"}} alt={`${altText}`}>
                            </img>
                            <div className='p-6'>
                                <h3 className='text-xl font-medium mb-2'>{`${title}`}</h3>
                                <p className='text-base'>
                                    <a href={`${deployment}`}>
                                        View deployment
                                    </a>
                                </p>
                                <p className='text-base'>
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