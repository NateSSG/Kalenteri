const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 4 + 1; // Snowflake size
    const speed = Math.random() * 1 + 0.5; // Falling speed
    snowflakes.push({ x, y, radius, speed });
}

function updateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    
    for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        flake.y += flake.speed; // Move snowflake down
        
        // Reset snowflake to the top if it falls below the canvas
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    }
    
    ctx.fill();
    requestAnimationFrame(updateSnowflakes);
}

function init() {
    for (let i = 0; i < 100; i++) { // Number of snowflakes
        createSnowflake();
    }
    updateSnowflakes();
}

init();
