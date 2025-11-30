/**
 * Neural Network Background Animation
 * Creates a connecting particle network with pulsing effects.
 */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Configuration
const particleCount = 80; // Number of nodes
const connectionDistance = 150; // Max distance to connect
const particleSpeed = 0.5; // Movement speed
const baseColor = 'rgba(138, 43, 226, 0.5)'; // Purple
const pulseColor = 'rgba(255, 255, 255, 0.8)'; // White pulse

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.size = Math.random() * 2 + 1;
        this.pulse = Math.random() * Math.PI; // Random start phase
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Pulse effect
        this.pulse += 0.05;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Pulsing opacity
        const opacity = (Math.sin(this.pulse) + 1) / 2 * 0.5 + 0.2;
        ctx.fillStyle = `rgba(138, 43, 226, ${opacity})`;
        ctx.fill();
    }
}

function init() {
    resize();
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);

                // Opacity based on distance
                const opacity = 1 - (distance / connectionDistance);
                ctx.strokeStyle = `rgba(138, 43, 226, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
init();
animate();
