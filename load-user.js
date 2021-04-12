import { getUser } from './utils.js';
import { piledLeaf } from './utils.js';

function loadUser() {
    const name = document.getElementById('name');
    const picture = document.getElementById('picture');
    const hp = document.getElementById('hp');
    const seeds = document.getElementById('seeds');

    const user = getUser();
    if (!user) {
        window.location = './';


    }

    name.textContent = user.name;
    picture.src = '../assets/' + user.leaf + '.png';
    seeds.textContent = user.seeds;

    if (piledLeaf(user)) {
        hp.textContent = 'You have joined the big pile in the sky.';
    } else {
        hp.textContent = user.hp;
    }
}

export default loadUser;