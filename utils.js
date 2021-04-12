export function setUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        leaf: formData.get('leaf'),
        hp: 35,
        seeds: 0,
        completed: {}
    };

    return user;
}

export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
}

export function piledLeaf(user) {
    return user.hp <= 0;
}

export function createCompleted(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

export function createQuest(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;
    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

export function completedAll(quests, user) {
    
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;
}