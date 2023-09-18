console.log('Hi There!');

let canvas = 
document.getElementById('canvas');
let x = canvas.getContext('2d');
let y = window.innerWidth;
let z = window.innerHeight;
canvas.width = y;
canvas.height = z;

let mousex = 0;
let mousey = 0;

addEventListener('mousemove', function() {
    mousex = event.clientX;
    mousey = event.clientY;
});

