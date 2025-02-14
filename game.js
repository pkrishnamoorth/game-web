const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(update);
}

update();
