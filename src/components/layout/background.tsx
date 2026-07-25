import { useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";

export interface BackgroundProps {
  className?: string;
  children?: ReactNode;
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  glowColor?: string;
  proximity?: number;
  glowIntensity?: number;
  waveSpeed?: number;
  driftAmount?: number;
  driftSpeed?: number;
}

type RGB = {
  r: number;
  g: number;
  b: number;
};

type Dot = {
  baseX: number;
  baseY: number;
  baseOpacity: number;
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  movement: number;
};

function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

function Background({
  className = "",
  children,
  dotSize = 2,
  gap = 24,
  baseColor = "#404040",
  glowColor = "#8b5cf6",
  proximity = 120,
  glowIntensity = 1,
  waveSpeed = 0.5,
  driftAmount = 2.5,
  driftSpeed = 1,
}: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);

  const mouseRef = useRef({
    x: -1000,
    y: -1000,
  });

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef(Date.now());

  const baseRgb = useMemo(() => {
    return hexToRgb(baseColor);
  }, [baseColor]);

  const glowRgb = useMemo(() => {
    return hexToRgb(glowColor);
  }, [glowColor]);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const context = canvas.getContext("2d");

    if (context) {
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const cellSize = dotSize + gap;
    const columns = Math.ceil(rect.width / cellSize) + 1;
    const rows = Math.ceil(rect.height / cellSize) + 1;

    const offsetX = (rect.width - (columns - 1) * cellSize) / 2;

    const offsetY = (rect.height - (rows - 1) * cellSize) / 2;

    const dots: Dot[] = [];

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        dots.push({
          baseX: offsetX + column * cellSize,
          baseY: offsetY + row * cellSize,
          baseOpacity: 0.3 + Math.random() * 0.2,
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          speedX: 0.25 + Math.random() * 0.35,
          speedY: 0.25 + Math.random() * 0.35,
          movement: driftAmount * (0.4 + Math.random() * 0.6),
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap, driftAmount]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    context.clearRect(0, 0, width, height);

    const elapsedSeconds = (Date.now() - startTimeRef.current) / 1000;

    const waveTime = elapsedSeconds * waveSpeed;

    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;
    const proximitySquared = proximity * proximity;

    for (const dot of dotsRef.current) {
      const animatedX =
        dot.baseX +
        Math.sin(elapsedSeconds * dot.speedX * driftSpeed + dot.phaseX) *
          dot.movement;

      const animatedY =
        dot.baseY +
        Math.cos(elapsedSeconds * dot.speedY * driftSpeed + dot.phaseY) *
          dot.movement;

      const differenceX = animatedX - mouseX;
      const differenceY = animatedY - mouseY;

      const distanceSquared =
        differenceX * differenceX + differenceY * differenceY;

      const wave =
        Math.sin(animatedX * 0.02 + animatedY * 0.02 + waveTime) * 0.5 + 0.5;

      const waveOpacity = dot.baseOpacity + wave * 0.15;

      const waveScale = 1 + wave * 0.2;

      let opacity = waveOpacity;
      let scale = waveScale;

      let red = baseRgb.r;
      let green = baseRgb.g;
      let blue = baseRgb.b;

      let glow = 0;

      if (distanceSquared < proximitySquared) {
        const distance = Math.sqrt(distanceSquared);
        const progress = 1 - distance / proximity;

        const easedProgress = progress * progress * (3 - 2 * progress);

        red = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * easedProgress);

        green = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * easedProgress);

        blue = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * easedProgress);

        opacity = Math.min(1, waveOpacity + easedProgress * 0.7);

        scale = waveScale + easedProgress * 0.8;

        glow = easedProgress * glowIntensity;
      }

      const radius = (dotSize / 2) * scale;

      if (glow > 0) {
        const gradient = context.createRadialGradient(
          animatedX,
          animatedY,
          0,
          animatedX,
          animatedY,
          radius * 4,
        );

        gradient.addColorStop(
          0,
          `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.4})`,
        );

        gradient.addColorStop(
          0.5,
          `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.1})`,
        );

        gradient.addColorStop(
          1,
          `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0)`,
        );

        context.beginPath();

        context.arc(animatedX, animatedY, radius * 4, 0, Math.PI * 2);

        context.fillStyle = gradient;
        context.fill();
      }

      context.beginPath();

      context.arc(animatedX, animatedY, radius, 0, Math.PI * 2);

      context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

      context.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [
    baseRgb,
    glowRgb,
    dotSize,
    glowIntensity,
    proximity,
    waveSpeed,
    driftSpeed,
  ]);

  useEffect(() => {
    buildGrid();

    const container = containerRef.current;

    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(buildGrid);

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [buildGrid]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [draw]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: -1000,
        y: -1000,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden={!children}
      className={`
        pointer-events-none
        fixed inset-0 z-0
        overflow-hidden
        bg-parchment
        ${className}
      `}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10, 10, 10, 0.6) 100%)",
        }}
      />

      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}

export default Background;
