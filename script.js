// --- MATRIX BACKGROUND EFFECT ---
const matrix = document.getElementById('matrixCanvas');
const mCtx = matrix.getContext('2d');
matrix.width = window.innerWidth;
matrix.height = window.innerHeight;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*".split("");
const fontSize = 14;
const columns = matrix.width / fontSize;
const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function drawMatrix() {
    mCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
    mCtx.fillRect(0, 0, matrix.width, matrix.height);
    mCtx.fillStyle = "#0F0";
    mCtx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > matrix.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 35);

// --- ADVANCED TERMINAL LOGIC ---
const input = document.getElementById('cmd-input');
const output = document.getElementById('output');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let cmd = input.value.toLowerCase().trim();
        let response = `<br><span style="color:var(--neon-blue)">$ ${cmd}</span><br>`;

        if (cmd === 'help') {
            response += "AVAILABLE MODULES:<br>- 'ls': List files<br>- 'termux-info': Malayalam Guide<br>- 'whatsapp-bot': Bot Tutorial<br>- 'hack-sim': Matrix Simulation<br>- 'clear': Reset Terminal";
        } else if (cmd === 'ls') {
            response += "index.html  style.css  script.js  bots/  tools/  secret_key.txt";
        } else if (cmd === 'termux-info') {
            response += "TERMUX GUIDE (ML): Android-il hacking lab undakkan: pkg update && pkg upgrade.";
        } else if (cmd === 'hack-sim') {
            response += "<span style='color:red'>BYPASSING SECURITY... ACCESS GRANTED!</span>";
        } else if (cmd === 'clear') {
            output.innerHTML = ""; return;
        } else {
            response += "Error: Command not found. Type 'help'.";
        }
        output.innerHTML += response;
        input.value = '';
        document.getElementById('terminal-body').scrollTop = 99999;
    }
});

// --- KILL & EARN GAME LOGIC ---
function initGame() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    let coins = 0;
    setInterval(() => {
        ctx.clearRect(0, 0, 200, 300);
        ctx.fillStyle = "cyan";
        ctx.fillRect(80, 240, 40, 40); // User Car
        coins += 1;
        document.getElementById('coin-count').innerText = coins;
    }, 100);
}
