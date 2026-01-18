gsap.from(".hero-text", {
  opacity: 0,
  y: 60,
  duration: 1,
});


gsap.from(".feature", {
  opacity: 0,
  y: 50,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
  },
});



gsap.to(".layer-back", {
  y: -60,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".layer-front", {
  y: -120,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});


const words = ["Practice", "Upskill", "Play", "Improve"];
let currentIndex = 0;

setInterval(() => {
  const text = document.querySelector(".hero-text");

  text.style.opacity = 0;

  setTimeout(() => {
    text.innerText = words[currentIndex];
    text.style.opacity = 1;

    currentIndex = (currentIndex + 1) % words.length;
  }, 300);
}, 2000);
