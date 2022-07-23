import React from 'react';
import Navigation from '../Navigation';

function Header(props) {

    // IMPORT STATE VARIABLES FROM APP AND PASS TO NAVIGATION COMPONENT
    const { currentCategory, setCurrentCategory, categories } = props;

    return (
        <header className='bg-primary rounded-md py-2'>
            <h1 className='text-3xl py-1 text-lightest'>Emma Olson-Rossow</h1>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Navigation>
        </header>
    );
};

export default Header;