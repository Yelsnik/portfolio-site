const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const confetti = [];
for (let i = 0; i < 50; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 0.5,
  });
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((particle) => {
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    particle.y += particle.speed;
    if (particle.y > canvas.height) particle.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
