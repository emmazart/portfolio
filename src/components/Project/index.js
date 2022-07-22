import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// function Project() {

//     return(
//         <section>
//             {projects.map(project => {

//                 return(
//                     <div className='project-card'>
//                         <h3>{`${project.title}`}</h3>
//                         <img src={require(`../../assets/app_images/${project.file_name}`)} style={{width: "400px"}}></img>
//                         <p>
//                             <a href={`${project.deployment}`}>
//                                 View deployment
//                             </a>
//                         </p>
//                         <p>
//                             <a href={`https://github.com/${project.github}`}>
//                                 Check out {`${project.title}`} on Github <FontAwesomeIcon icon={faGithub}/>
//                             </a>
//                         </p>
//                     </div>
//                 )
            
//             })}
//         </section>
//     )
// }


function Project(props) {
    const { title, fileName, github, deployment } = props;

                return(
                    <div className='project-card'>
                        <h3>{`${title}`}</h3>
                        <img src={require(`../../assets/app_images/${fileName}`)} style={{width: "400px"}}></img>
                        <p>
                            <a href={`${deployment}`}>
                                View deployment
                            </a>
                        </p>
                        <p>
                            <a href={`https://github.com/${github}`}>
                                Check out {`${title}`} on Github <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </p>
                    </div>
                )
}


export default Project;