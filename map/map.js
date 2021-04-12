import { getUser } from '../utils.js';
import quests from '../data.js';
import loadUser from '../load-user.js';
import { piledLeaf } from '../utils.js';
import { createCompleted } from '../utils.js';
import { createQuest } from '../utils.js';
import { completedAll } from '../utils.js';

loadUser();

const user = getUser();

if (piledLeaf(user) || completedAll(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;
    if (user.completed[quest.id]) {
        questDisplay = createCompleted(quest);
    } else {
        questDisplay = createQuest(quest);
    }
    nav.appendChild(questDisplay);
}