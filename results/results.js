import loadUser from '../load-user.js';
import { getUser } from '../utils.js';
import { scoreHp, scoreSeeds } from './results-utils.js';
import { hpMessages, aliveSeeds, deadSeeds } from './messages.js';

loadUser();

const user = getUser();

const storyDisplay = document.getElementById('story-div');
const hpResult = scoreHp(user.hp);
const seedsResult = scoreSeeds(user.seeds);
const hpMessage = hpMessages[hpResult];
const resultImage = document.createElement('img');
resultImage.src = '../assets/pile-of-leaves.jpeg';
resultImage.classList.add('leaf-pic');
const main = document.querySelector('main');

let seedMessages = null;
if (hpResult === 'dead') {
    seedMessages = deadSeeds;
} else {
    seedMessages = aliveSeeds;
}

const seedMessage = seedMessages[seedsResult];

let story = 'After drifting about on this October day, ';
story += user.name + ' the ' + user.leaf + ', ';
story += hpMessage + ' ' + seedMessage;

storyDisplay.textContent = story;
main.append(resultImage);
