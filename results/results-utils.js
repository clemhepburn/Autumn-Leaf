export function scoreSeeds(seeds) {
    if (seeds === 0) {
        return 'seedless';
    } else if (seeds < 50) {
        return 'modest';
    }
    return 'rich';
}

export function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    } if (hp < 35) {
        return 'dry';
    }
    return 'thriving';
}

