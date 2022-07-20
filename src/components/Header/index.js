import React from 'react';
import Navigation from '../Navigation';

function Header(props) {

    const { currentCategory, setCurrentCategory, categories } = props;

    return (
        <header>
            <h1>Emma Olson-Rossow</h1>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Navigation>
        </header>
    );
};

export default Header;