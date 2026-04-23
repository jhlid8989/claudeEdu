"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = useCallback(async (_container: unknown) => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 w-full h-full"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.6 } },
          },
        },
        particles: {
          color: { value: "#818cf8" },
          links: {
            color: "#818cf8",
            distance: 160,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 90,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
