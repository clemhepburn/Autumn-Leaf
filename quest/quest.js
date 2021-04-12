import loadUser from '../load-user.js';
import quests from '../data.js';
import questChoice from './quest-choice.js';
import { findById } from '../utils.js';
import questScore from './quest-score.js';
import { getUser, setUser } from '../utils.js';

loadUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = quest.image;
description.textContent = quest.description;

for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const choiceDOM = questChoice(choice);

    choices.appendChild(choiceDOM);
}
choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);

    const user = getUser();

    questScore(choice, quest.id, user);

    setUser(user);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadUser();
});
