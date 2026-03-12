const canvas = document.getElementById("raceGame");
const ctx = canvas.getContext("2d");
let score = 0;
let carX = 130;
let gameRunning = false;

function drawCar(x) {
    ctx.fillStyle = "#00f3ff";
    ctx.fillRect(x, 350, 40, 40); // User Car
}

function startGame() {
    gameRunning = true;
    score = 0;
    updateGame();
}

function updateGame() {
    if(!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Road lines
    ctx.strokeStyle = "white";
    ctx.setLineDash([20, 20]);
    ctx.beginPath();
    ctx.moveTo(150, 0); ctx.lineTo(150, 400);
    ctx.stroke();

    drawCar(carX);
    requestAnimationFrame(updateGame);
}

// Control
window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft" && carX > 0) carX -= 10;
    if(e.key === "ArrowRight" && carX < 260) carX += 10;
});
