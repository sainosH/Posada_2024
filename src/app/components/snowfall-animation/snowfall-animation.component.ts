import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

@Component({
  selector: 'app-snowfall-animation',
  standalone: true,
  imports: [],
  templateUrl: './snowfall-animation.component.html',
  styleUrl: './snowfall-animation.component.scss'
})

export class SnowfallAnimationComponent implements OnInit, OnDestroy {
  @ViewChild('snowfallCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private snowflakes: Snowflake[] = [];
  private animationFrameId!: number;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.setupCanvas();
    this.createSnowflakes();
    this.animateSnowflakes();

    window.addEventListener('resize', this.setupCanvas);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.setupCanvas);
  }

  private setupCanvas = () => {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  private createSnowflakes() {
    const canvas = this.canvasRef.nativeElement;
    this.snowflakes = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 3 + 1,
    }));
  }

  private animateSnowflakes = () => {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.snowflakes.forEach((flake) => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();

      flake.y += flake.speed;
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
    });

    this.animationFrameId = requestAnimationFrame(this.animateSnowflakes);
  };
}
