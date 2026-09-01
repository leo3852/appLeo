import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { UI } from './i18n/i18n';
import { LanguageService } from './services/language.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  /** rgb triplet — most particles are cyan, a few violet for depth. */
  color: string;
  /** Phase and speed of the slow brightness pulse. */
  phase: number;
  phaseSpeed: number;
}

const CYAN = '34, 211, 238';
const VIOLET = '167, 139, 250';

/** Particles closer than this get a connecting line. */
const LINK_DISTANCE = 130;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'appLeo';
  readonly ui = UI;

  constructor(public lang: LanguageService, private zone: NgZone) {}

  @ViewChild('particleCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId?: number;
  private particleCount = 38;

  /** Canvas dimensions, cached so the render loop never touches the DOM. */
  private width = 0;
  private height = 0;

  private onResize = () => {
    this.initCanvas();
    this.createParticles();
  };

  private onVisibilityChange = () => {
    if (document.hidden) {
      this.stop();
    } else if (!this.animationId) {
      this.zone.runOutsideAngular(() => this.animate());
    }
  };

  ngAfterViewInit(): void {
    this.initCanvas();
    this.createParticles();

    // A still field is enough when the user asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.draw();
    } else {
      // zone.js patches requestAnimationFrame, so running the loop inside
      // Angular would fire change detection 60 times a second for nothing.
      this.zone.runOutsideAngular(() => this.animate());
      document.addEventListener('visibilitychange', this.onVisibilityChange);
    }

    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  private stop(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    // The canvas is position: fixed, so it only ever shows one viewport.
    // Sizing it to the full scroll height would allocate and repaint several
    // screens worth of pixels every frame for nothing.
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    canvas.width = this.width;
    canvas.height = this.height;
  }

  private createParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      // Depth drives size, brightness and speed together, so nearer
      // particles read as nearer instead of just bigger.
      const depth = Math.random();

      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * (0.25 + depth * 0.4),
        vy: (Math.random() - 0.5) * (0.25 + depth * 0.4),
        size: depth * 1.9 + 0.7,
        opacity: depth * 0.4 + 0.18,
        color: Math.random() < 0.22 ? VIOLET : CYAN,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.004 + Math.random() * 0.008
      });
    }
  }

  private animate(): void {
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private draw(): void {
    const ctx = this.ctx;
    const particles = this.particles;
    const width = this.width;
    const height = this.height;

    ctx.clearRect(0, 0, width, height);

    for (const particle of particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Slow brightness pulse so the field feels alive rather than static
      particle.phase += particle.phaseSpeed;
      const alpha = particle.opacity * (0.72 + 0.28 * Math.sin(particle.phase));

      // Soft halo, then a brighter core on top of it
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color}, ${alpha * 0.13})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color}, ${alpha})`;
      ctx.fill();
    }

    // Connections. Indexed loops keep this allocation-free, and the squared
    // distance check avoids a sqrt for every pair that is too far apart.
    ctx.lineWidth = 0.6;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < LINK_DISTANCE_SQ) {
          const distance = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${CYAN}, ${0.16 * (1 - distance / LINK_DISTANCE)})`;
          ctx.stroke();
        }
      }
    }
  }
}
