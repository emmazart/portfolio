import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // useState for setting error message and form data
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState; // deconstruct formState to variables

    // function runs on blur event of form elements
    function handleChange(e) {
        // if target is 'email', run validateEmail helper function to determine correct email format
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // if email does not fit pattern, set error message
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        // if either of the other form elements have no content, set error message
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }

        // if there's no error message, set blurred data to form state
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // on form submit, console log data (for now)
    // eventually, send this data to backend?
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return(
        <section id='contact'>
            <h2 className='test'>Contact Me</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                    <label>Name:</label>
                    <input type="text" name='name' defaultValue={name} onBlur={handleChange}></input>

                </div>
                <div>
                    <label>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <p>{errorMessage}</p>
                )}
                <button data-testid='button' type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;