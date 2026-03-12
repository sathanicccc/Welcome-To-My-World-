let score = 0;
const emoji = document.getElementById('world-emoji');
const scoreDisplay = document.getElementById('score');

// Emoji-ye random position-ilekk maattan ulla function
function moveEmoji() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
}

// Emoji-yil click cheyumpol score koodum, emoji move aakum
function catchWorld() {
    score++;
    scoreDisplay.innerText = score;
    moveEmoji();
}

// Oro 1.5 second-ilum emoji thaaneyum move aakum (Challenge!)
setInterval(moveEmoji, 1500);

// Game thudangumpol aadyame emoji-ye move cheyyikkuka
moveEmoji();
