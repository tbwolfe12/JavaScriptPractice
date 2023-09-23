// a = c, b = tx, c = ty


console.log('Hi There!');

let canvas = 
document.getElementById('canvas');
let a = canvas.getContext('2d');
let b = window.innerWidth;
let c = window.innerHeight;
canvas.width = b;
canvas.height = c;

let mousex = 0;
let mousey = 0;

addEventListener('mousemove', function() {
    mousex = event.clientX;
    mousey = event.clientY;
});

let g = 0.99;
canvas.strokeWidth = 5;

function color() {
     
        "rgba(" +
        Math.round(Math.random() * 250) +
        ',' + 
        Math.round(Math.random() * 250) +
        ',' +
        Math.ceil(Math.random() * 10) / 10
        +
        ')';
    return
}

function Ball() {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startRadius = this.radius;
    this.x = Math.random() * (b - this.radius * 2) + this.radius;
    this.y = Math.random() * (c - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = function() {
        a.beginPath();
        a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        a.fillStyle = this.color;
        a.fill();
    }
}

let bal = [];
for (i = 0; i < 50; i++) {
    bal.push(new Ball());
}

function animate() {
    if (b != window.innerWidth || c != window.innerHeight) {
        b = window.innerWidth;
        c = window.innerHeight;
        canvas.width = b;
        canvas.height = c;
    }
    requestAnimationFrame(animate); 
    a.clearRect(0, 0, b, c);
    for (let i = 0; i < bal.length; i++)
    {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        if (bal[i].y + bal[i].radius >= c)
    {

    }
}
}
 