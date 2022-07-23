import React, { useEffect } from 'react';

function Navigation(props) {

    // IMPORT CATEGORY STATE VARIABLES
    const { categories = [], currentCategory, setCurrentCategory } = props;

    // USE EFFECT TO SET DOCUMENT.TITLE AND RE-RENDER PAGE WHEN CURRENT CATEGORY IS UPDATED
    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    // FOR EACH <li>
    // if current category is selected, set classNames to tailwind classes for formatting "active"
    // on click of any <li>, setCurrentCategory to the corresponding category in the array
    return(
        <nav className='nav py-2'>
            <ul className='nav-list text-xl text-lightest'>
                <li className={`${currentCategory.name === categories[0].name && 'text-darkest italic'}`}><a href='#about' onClick={() => {setCurrentCategory(categories[0])}}>About Me</a></li>
                <li className={`${currentCategory.name === categories[2].name && 'text-darkest italic'}`}><a href='#portfolio' onClick={() => setCurrentCategory(categories[2])}>Portfolio</a></li>
                <li className={`${currentCategory.name === categories[1].name && 'text-darkest italic'}`}><a href='#contact' onClick={() => setCurrentCategory(categories[1])}>Contact</a></li>
                <li className={`${currentCategory.name === categories[3].name && 'text-darkest italic'}`}><a href='#resume' onClick={() => setCurrentCategory(categories[3])}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;