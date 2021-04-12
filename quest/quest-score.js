function questScore(choice, questId, user) {
    user.hp += choice.hp;
    user.seeds += choice.seeds;
    user.completed[questId] = true;
}

export default questScore;