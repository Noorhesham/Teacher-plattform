"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useDarkMode } from "../context/DarkMode";

export const ParticlesComponent = () => {
  const { isDarkMode } = useDarkMode();

  const particlesInit = useCallback(
    async (engine: Engine) => {
      await loadSlim(engine);
    },
    [isDarkMode]
  );

  return (
    <Particles
      className=" absolute top-20 h-screen  w-full "
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 150,
            },
          },
        },
        particles: {
          color: {
            value: !isDarkMode ? "#000000" : "#FFFFFF",
          },
          links: {
            color: !isDarkMode ? "#000000" : "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 250,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
