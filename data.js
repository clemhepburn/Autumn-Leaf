const car = {
    id: 'car',
    title: 'Land On A Car',
    map: {
        top: '40%',
        left: '30%'
    },
    image: '../assets/car.png',
    description: `You glide softly down from the canopy onto a parked car. 
    Somebody gets in and starts it up. What are you gonna do?`,
    
    choices: [{
        id: 'ride',
        description: 'Take a ride around the city',
        result: `The scenery was nice. The air is crisp. You didn't gain any hp but you got some seeds.`,
        hp: 0,
        seeds: 30
    }, {
        id: 'fly',
        description: 'Fly up into the air off of the car before it drives away',
        result: `You tumble through the air and get poked on top of one of those ornate wrought iron fences.
        You look beautiful but this is not very good for you. You lose 20hp and gain 40 seeds.`,
        hp: -20,
        seeds: 40 
    }, {
        id: 'inside',
        description: 'For some reason, you try to get inside the car.',
        result: `This plan is a disaster. You fly off the hood of the car into the road, where cars keep smushing you. You lose 70 hp and get no seeds.`,
        hp: -70,
        seeds: 0 
    }]

};

const window = {
    id: 'window',
    title: 'Fly Into an Apartment Window',
    map: {
        top: '40%',
        left: '80%'
    },
    image: '../assets/window.png',
    description: `You ride a gust into an open apartment window.`,
    
    choices: [{
        id: 'table',
        description: 'Rest on the kitchen table.',
        result: `The residents of this apartment are luckily very kind. 
        They think you look delightful on the table in the afternoon sun, and leave you be.`,
        hp: 20,
        seeds: 50
    }, {
        id: 'floor',
        description: 'You decide to try to take cover on the floor.',
        result: `Unfortunately, the residents of the apartment don't see you, and you get stepped on repeatedly
        before the cat decides to play with you for a while. You lose 30 hp, but you get 10 seeds for your troubles.`,
        hp: -30,
        seeds: 10 
    }, {
        id: 'soil',
        description: 'You attempt to hide under the canopy of a potted plant.',
        result: `This plan was alright, and you go unnoticed, but it's nearly impossible now to catch a breeze and get out. You lose 70 hp and get no seeds.`,
        hp: -20,
        seeds: 0 
    }]

};

const park = {
    id: 'park',
    title: 'Float across the street to the park',
    map: {
        top: '90%',
        left: '10%'
    },
    image: '../assets/park.png',
    description: `You can see a beautiful park across the street. Surely, there are other leaves to commune with.`,
    
    choices: [{
        id: 'bench',
        description: 'Land on a park bench.',
        result: `The bench is a nice place to land. There is an old man reading the paper, and you catch a glimpse of the weather report. 
        There's a big freeze coming next week. Gain 10 hp and 20 seeds.`,
        hp: 10,
        seeds: 20
    }, {
        id: 'pond',
        description: 'Float in the duck pond.',
        result: `The pond was a bad option. Now that you're all soggy, you can't get out of the pond. Lose 60 hp, gain 0 seeds.`,
        hp: -30,
        seeds: 0 
    }, {
        id: 'pile',
        description: 'Join the big pile.',
        result: `Aaahhhh, warm and soft. Belonging. Gain 50 hp, 20 seeds.`,
        hp: 50,
        seeds: 20 
    }]

};

const quests = [
    car,
    window,
    park,
];

export default quests;