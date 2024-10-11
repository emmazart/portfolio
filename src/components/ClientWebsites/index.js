import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ClientWebsite(props) {

    // IMPORT PROPS FROM PORTFOLIO COMPONENT
    const { title, fileName, altText, deployment, description } = props;

    // RENDER CARD COMPONENT FOR EACH PROJECT
                return(
                    <div className='project-card flex justify-center my-8'>
                        <div className='rounded-lg shadow-lg bg-ltpink max-w-sm'>
                            <img 
                                className='rounded-t-lg'
                                src={require(`../../assets/app_images/${fileName}`)} style={{width: "400px"}} alt={`${altText}`}>
                            </img>
                            <div className='px-6 pt-6'>
                                <h3 className='text-xl font-medium mb-2'>{`${title}`}</h3>
                                <p className='text-base'>{description}</p>                               
                            </div>
                            <button type='button' className='text-s m-3 p-2 mb-5 bg-primary text-white border-solid rounded-xl'>
                                <a href={`${deployment}`}>
                                  Click to view live website
                                </a>
                            </button>
                            {/* <p className='text-s m-4'>
                                        <a href={`${deployment}`}>
                                            Click to view
                                        </a>
                            </p> */}
                        </div>
                    </div>
                )
            
            }



export default ClientWebsite;