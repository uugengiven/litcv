const particles = () => {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#777",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#f5f5f5",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        // color: '#945050',
        // color: "#783434",
        color: "#777",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      life: {
        duration: {
          sync: false,
          value: 3,
        },
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
};
