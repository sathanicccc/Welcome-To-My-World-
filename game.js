const gCanvas = document.getElementById('game-canvas');
const gCtx = gCanvas.getContext('2d');
let score = 0;
let souls = [];
let gameRunning = true;

// Soul Object
class Soul {
    constructor() {
        this.x = Math.random() * (gCanvas.width - 30);
        this.y = gCanvas.height;
        this.speed = 1 + Math.random() * 3;
        this.size = 20 + Math.random() * 20;
        this.opacity = 1;
    }

    draw() {
        gCtx.globalAlpha = this.opacity;
        // Sathanic Soul Visual (Red Glow)
        gCtx.fillStyle = "#ff0000";
        gCtx.shadowBlur = 15;
        gCtx.shadowColor = "#ff0000";
        gCtx.beginPath();
        gCtx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        gCtx.fill();
        
        // Eyes
        gCtx.fillStyle = "black";
        gCtx.fillRect(this.x - 5, this.y - 5, 3, 3);
        gCtx.fillRect(this.x + 2, this.y - 5, 3, 3);
        gCtx.globalAlpha = 1;
        gCtx.shadowBlur = 0;
    }

    update() {
        this.y -= this.speed;
    }
}

function runGame() {
    if (!gameRunning) return;

    gCtx.fillStyle = "rgba(0, 0, 0, 0.3)"; // Trail effect
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);

    // Spawn Souls
    if (Math.random() < 0.03) {
        souls.push(new Soul());
    }

    souls.forEach((soul, index) => {
        soul.update();
        soul.draw();

        // If soul escapes (goes to top)
        if (soul.y < -50) {
            souls.splice(index, 1);
            score = Math.max(0, score - 5); // Penalty
            updateScore();
        }
    });

    requestAnimationFrame(runGame);
}

// Click to Capture/Kill Soul
gCanvas.addEventListener('mousedown', (e) => {
    const rect = gCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    souls.forEach((soul, index) => {
        const dist = Math.hypot(soul.x - mouseX, soul.y - mouseY);
        if (dist < soul.size) {
            souls.splice(index, 1);
            score += 10;
            updateScore();
            // Terminal-il notification varaan
            if(typeof log !== 'undefined') {
                const line = document.createElement('div');
                line.style.color = "red";
                line.innerHTML = "[SYSTEM] SOUL CAPTURED: +10 Points";
                log.appendChild(line);
                document.getElementById('term-body').scrollTop = log.scrollHeight;
            }
        }
    });
});

function updateScore() {
    const scoreElement = document.getElementById('score-val');
    if(scoreElement) scoreElement.innerText = score;
}

runGame();
