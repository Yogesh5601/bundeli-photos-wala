"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function IntroOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const finishedRef = useRef(false);
  const [reduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setExiting(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    let particles: {
      x: number;
      y: number;
      r: number;
      a: number;
      phase: number;
      speed: number;
      drift: number;
      gold: string;
    }[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = reduceMotion ? 28 : width < 600 ? 52 : 105;
      const cx = width / 2;
      const cy = height * 0.48;
      const rx = Math.min(width * 0.46, 650);
      const ry = Math.min(height * 0.42, 510);
      particles = Array.from({ length: count }, () => {
        const a = Math.random() * Math.PI * 2;
        const d = 0.68 + Math.random() * 0.38;
        return {
          x: cx + Math.cos(a) * rx * d,
          y: cy + Math.sin(a) * ry * d,
          r: Math.random() * 1.45 + 0.25,
          a: Math.random() * 0.5 + 0.18,
          phase: Math.random() * Math.PI * 2,
          speed: 0.00025 + Math.random() * 0.00045,
          drift: Math.random() * 10 + 4,
          gold: Math.random() > 0.28 ? "228,190,103" : "178,129,41",
        };
      });
    };

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height * 0.48;
      particles.forEach((p) => {
        const fx = reduceMotion ? 0 : Math.sin(time * p.speed + p.phase) * p.drift;
        const fy = reduceMotion ? 0 : Math.cos(time * p.speed * 0.8 + p.phase) * p.drift;
        const pulse = reduceMotion ? 1 : 0.7 + Math.sin(time * p.speed * 2 + p.phase) * 0.3;
        const dx = p.x + fx;
        const dy = p.y + fy;
        const fade = Math.max(0, 1 - Math.hypot(dx - cx, (dy - cy) * 0.88) / (Math.max(width, height) * 0.78));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.gold},${p.a * pulse * fade})`;
        ctx.arc(dx, dy, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    draw();

    const video = document.querySelector<HTMLVideoElement>(".intro-video");
    video?.play().catch(() => undefined);

    const timer = window.setTimeout(finishIntro, reduceMotion ? 1400 : 6800);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [finishIntro, reduceMotion]);

  useEffect(() => {
    if (!exiting || !introRef.current) return;
    const node = introRef.current;
    const onEnd = () => setHidden(true);
    node.addEventListener("animationend", onEnd, { once: true });
    return () => node.removeEventListener("animationend", onEnd);
  }, [exiting]);

  if (hidden) return null;

  return (
    <main
      ref={introRef}
      aria-label="Shital Gurav Makeup Studio brand introduction"
      className={cn(
        "fixed inset-0 z-100 grid place-items-center overflow-hidden bg-[#030303] text-[#e4c98b]",
        exiting && "animate-[introLeave_1.4s_cubic-bezier(0.77,0,0.18,1)_forwards]",
      )}
      aria-hidden={exiting ? "true" : undefined}
    >
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 -z-2 opacity-78" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.32)_72%,rgba(0,0,0,0.88)_100%)]"
      />
      <section className="relative flex w-[min(90vw,820px)] flex-col items-center py-[4vh] text-center">
        <div className="aspect-square w-[clamp(190px,34vw,385px)] animate-[logoReveal_2.2s_cubic-bezier(0.22,0.61,0.36,1)_0.55s_forwards] opacity-0">
          <video
            aria-hidden
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="intro-video h-full w-full object-contain"
          >
            <source src="/uploads/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div aria-label="Shital Gurav Makeup Studio" className="relative z-3 mt-[-8px] grid w-[min(90vw,720px)] grid-cols-2 items-end font-serif text-[clamp(2.65rem,10vw,7.9rem)] leading-[0.86] font-medium tracking-wide whitespace-nowrap">
          <span className="animate-[fromLeft_1.25s_cubic-bezier(0.22,0.61,0.36,1)_2.45s_forwards] pr-1 text-right opacity-0">SHITAL</span>
          <span className="animate-[fromRight_1.25s_cubic-bezier(0.22,0.61,0.36,1)_2.6s_forwards] pl-1 text-left opacity-0">GURAV</span>
          <span className="col-span-2 mt-4 animate-[fromBottom_1.15s_cubic-bezier(0.22,0.61,0.36,1)_3.05s_forwards] text-[clamp(0.56rem,1.45vw,0.86rem)] tracking-[0.32em] text-[#f0d391] opacity-0">
            MAKEUP STUDIO
          </span>
        </div>
      </section>
      <button
        type="button"
        onClick={finishIntro}
        className="fixed right-6 bottom-6 z-5 animate-[quietIn_1s_ease_4.5s_forwards] border-0 border-b border-[rgba(228,201,139,0.4)] bg-transparent px-0 py-2 text-[9px] tracking-[0.24em] text-[rgba(228,201,139,0.78)] uppercase opacity-0"
      >
        Skip intro
      </button>
    </main>
  );
}
