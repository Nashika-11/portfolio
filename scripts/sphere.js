const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'ANGULAR', 'MONGOOSE', 'VSCODE',
    'FRONTEND', 'GITHUB',
    'GIT', 'NODEJS', 'MONGODB',
    'EXPRESS', 'MYSQL', 'BACKEND', 'JAVA'
];


var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 180,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#530332';
document.querySelector('.Sphere').style.color= color;