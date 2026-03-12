const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const chars = "SATHANICOS01V1HUB";
const drops = Array(Math.floor(canvas.width / 16)).fill(1);
function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#0F0"; ctx.font = "16px monospace";
    drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*16, y*16);
        if(y*16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 35);
