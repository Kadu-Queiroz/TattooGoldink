import Particles from "@tsparticles/react";

export function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          opacity: 0,
        },
        particles: {
          color: {
            value: "#D4AF37",
          },
          links: {
            color: "#D4AF37",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
