/**
 * AMEVA Neural Fabric - Particle Compute Visualizer
 * Canvas 2D implementation of a neural/galaxy background.
 */
class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = window.innerWidth < 768 ? 100 : 300;
    this.mouseX = -1000;
    this.mouseY = -1000;
    
    this.init();
  }

  init() {
    this.canvas.id = 'particle-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.zIndex = '0'; // Behind the graph (z=1)
    this.canvas.style.pointerEvents = 'none';
    
    document.body.insertBefore(this.canvas, document.body.firstChild);
    
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    
    this.resize();
    this.createParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Cyberpunk accent colors from CSS
    this.ctx.fillStyle = 'rgba(0, 239, 255, 0.5)';
    this.ctx.strokeStyle = 'rgba(124, 58, 237, 0.15)';
    this.ctx.lineWidth = 0.5;

    for (let i = 0; i < this.numParticles; i++) {
      let p = this.particles[i];
      
      // Update
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;
      
      // Mouse interact (repel slightly)
      let dx = this.mouseX - p.x;
      let dy = this.mouseY - p.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        p.x -= dx * 0.01;
        p.y -= dy * 0.01;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < this.numParticles; j++) {
        let p2 = this.particles[j];
        let ddx = p.x - p2.x;
        let ddy = p.y - p2.y;
        let ddist = Math.sqrt(ddx*ddx + ddy*ddy);
        
        if (ddist < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.particleSystem = new ParticleSystem();
});
