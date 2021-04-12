// import functions and grab DOM elements
import { setUser } from './utils.js';
import { makeUser } from './utils.js';

const userSignUp = document.querySelector('#user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignUp);

    const user = makeUser(formData);

    setUser(user);

    window.location = 'map';
});
// initialize state

// set event listeners to update state and DOM