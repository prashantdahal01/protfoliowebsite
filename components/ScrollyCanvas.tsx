"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  type MotionValue,
  useReducedMotion,
  useMotionValueEvent,
  useTransform
} from "framer-motion";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

type LoadedFrame = {
  img: HTMLImageElement;
  loaded: boolean;
};

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number
) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;

  const scale = Math.max(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = (w - dw) / 2;
  const dy = (h - dh) / 2;

  ctx.drawImage(img, dx, dy, dw, dh);
}

export function ScrollyCanvas({
  stickyRef,
  scrollYProgress
}: {
  stickyRef: React.RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const latestFrameRef = useRef(0);
  const reducedMotion = useReducedMotion();

  const frameUrls = useMemo(() => {
    // If you later add more frames, update the count.
    const count = 60;
    return Array.from({ length: count }, (_, i) => {
      const idx = String(i).padStart(2, "0");
      return `/sequence/frame_${idx}_delay-0.066s.webp`;
    });
  }, []);

  const [frames, setFrames] = useState<LoadedFrame[] | null>(null);

  const frameIndex = useTransform(
    scrollYProgress,
    (v) => (reducedMotion ? 0 : Math.round(v * (frameUrls.length - 1)))
  );

  function render(idx: number) {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;
    if (!frames || frames.length === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const rect = sticky.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    const dpr = clamp(window.devicePixelRatio || 1, 1, 2);

    const targetW = Math.floor(cssW * dpr);
    const targetH = Math.floor(cssH * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
    }

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, cssW, cssH);

    const safe = clamp(idx, 0, frames.length - 1);
    const chosen =
      frames[safe]?.loaded === true
        ? frames[safe].img
        : frames.find((f) => f.loaded)?.img;
    if (chosen) drawCover(ctx, chosen, cssW, cssH);

    ctx.restore();
  }

  useEffect(() => {
    let cancelled = false;

    const loadedFrames: LoadedFrame[] = frameUrls.map((src) => ({
      img: new Image(),
      loaded: false
    }));

    loadedFrames.forEach((f, i) => {
      f.img.decoding = "async";
      f.img.loading = "eager";
      f.img.src = frameUrls[i]!;
    });

    (async () => {
      await Promise.allSettled(
        loadedFrames.map(async (f) => {
          try {
            await f.img.decode();
            f.loaded = true;
          } catch {
            // decode can fail on some browsers; fall back to onload
            await new Promise<void>((resolve) => {
              f.img.onload = () => resolve();
              f.img.onerror = () => resolve();
            });
            f.loaded = true;
          }
        })
      );

      if (cancelled) return;
      setFrames(loadedFrames);

      // Draw the first frame immediately once we have something decoded.
      render(0);
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameUrls]);

  useEffect(() => {
    if (!frames) return;

    const onResize = () => render(latestFrameRef.current);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frames]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    latestFrameRef.current = latest;
    render(latest);
  });

  return (
    <canvas ref={canvasRef} className="h-full w-full" />
  );
}

