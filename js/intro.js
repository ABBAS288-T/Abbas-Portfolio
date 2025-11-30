/**
 * Intro Animation Script
 * Simulates a single dot exploding into particles that form the user's name.
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('intro-container');
    const canvas = document.getElementById('intro-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 100;
    let animationFrameId;
    let stage = 'dot'; // dot, explode, form, done

    // Center of screen
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // The initial dot
    let dot = {
        x: centerX,
        y: centerY,
        radius: 5,
        color: '#8a2be2' // Purple
    };

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 10;
            this.vy = (Math.random() - 0.5) * 10;
            this.life = 100;
            this.color = `hsl(${Math.random() * 60 + 260}, 100%, 50%)`; // Purple to Blue range
            this.size = Math.random() * 3 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;
            this.size *= 0.95;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (stage === 'dot') {
            // Draw pulsing dot
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fillStyle = dot.color;
            ctx.shadowBlur = 20;
            ctx.shadowColor = dot.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            dot.radius += Math.sin(Date.now() / 100) * 0.2;

            // Transition to explode after 1.5 seconds
            if (Date.now() - startTime > 1500) {
                stage = 'explode';
                createExplosion();
            }
        } else if (stage === 'explode') {
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                if (p.life <= 0) particles.splice(index, 1);
            });

            if (particles.length === 0) {
                stage = 'form';
                showContent();
            }
        }

        if (stage !== 'done') {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    function createExplosion() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(centerX, centerY));
        }
    }

    function showContent() {
        const content = document.querySelector('.intro-content');
        if (content) {
            content.classList.add('visible');
        }

        // Finish intro after showing content for a bit
        setTimeout(() => {
            container.style.opacity = '0';
            container.style.visibility = 'hidden';
            stage = 'done';
            cancelAnimationFrame(animationFrameId);
        }, 3000);
    }

    let startTime = Date.now();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
