// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Spider-Man object
let spiderman = {
    x: 100,
    y: 500,
    width: 50,
    height: 50,
    color: "red",
    speed: 5,
};

// Handle movement (left and right)
let leftPressed = false;
let rightPressed = false;

// Add event listeners to capture key presses
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
});

// Function to draw Spider-Man
function drawSpiderman() {
    ctx.fillStyle = spiderman.color;
    ctx.fillRect(spiderman.x, spiderman.y, spiderman.width, spiderman.height);
}

// Game update function
function updateGame() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move Spider-Man based on key presses
    if (leftPressed && spiderman.x > 0) {
        spiderman.x -= spiderman.speed;
    }
    if (rightPressed && spiderman.x < canvas.width - spiderman.width) {
        spiderman.x += spiderman.speed;
    }

    // Draw Spider-Man
    drawSpiderman();

    // Repeat the update function
    requestAnimationFrame(updateGame);
}

// Start the game
updateGame();
