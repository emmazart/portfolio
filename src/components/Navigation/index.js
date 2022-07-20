import React, { useEffect } from 'react';

function Navigation(props) {

    const { categories = [], currentCategory, setCurrentCategory } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return(
        <nav className='nav'>
            <ul className='nav-list'>
                <li><a href='#about' onClick={() => {setCurrentCategory(categories[0])}}>About Me</a></li>
                <li><a href='#portfolio' onClick={() => setCurrentCategory(categories[2])}>Portfolio</a></li>
                <li><a href='#contact' onClick={() => setCurrentCategory(categories[1])}>Contact</a></li>
                <li><a href='#resume' onClick={() => setCurrentCategory(categories[3])}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;