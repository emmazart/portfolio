import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 


function Navigation(props) {

    const { categories = [], currentCategory, setCurrentCategory } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    // bootstrap version
    return(
        <Nav className='justify-content-center bg-light'>
                <Nav.Item><Nav.Link href='#about' onClick={() => {setCurrentCategory(categories[0])}}>About Me</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='#portfolio' onClick={() => setCurrentCategory(categories[2])}>Portfolio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='#contact' onClick={() => setCurrentCategory(categories[1])}>Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='#resume' onClick={() => setCurrentCategory(categories[3])}>Resume</Nav.Link></Nav.Item>
        </Nav>
    )
}

export default Navigation;