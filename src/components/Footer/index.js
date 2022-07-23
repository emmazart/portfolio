import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function Footer() {

    return(
        <footer className='footer'>
            <ul className='footer-list'>
                <li>
                    <a href="https://github.com/emmazart">
                    <FontAwesomeIcon icon={ faGithub } size="lg" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/emma-c-olson-a1340889">
                    <FontAwesomeIcon icon={ faLinkedinIn } size="lg" />
                    </a>
                </li>
                <li>
                    <a href="mailto:emma.olson794@gmail.com">
                    <FontAwesomeIcon icon={ faPaperPlane } size="lg" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/emmazart/">
                    <FontAwesomeIcon icon={ faInstagram } size="lg" />
                    </a>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;