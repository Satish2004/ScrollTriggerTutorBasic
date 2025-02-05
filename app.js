gsap.registerPlugin(ScrollTrigger);

// gsap.set(".square", {
//   x: 0,
//   opacity: 0,
// });

// gsap.to(".square", {
//   // rotate: "360deg",
//   // x:
//   x: 500,
//   opacity: 1,
//   duration: 4,
//   scrollTrigger: {
//     trigger: ".square2",
//     start: "top 80%",
//     end: "top 30%",
//     start: "top 20%",
//     scrub: true,
//     ToggleActions: "play none none none",
//     end: () => `+=${document.querySelector(".square").offsetHeight}`,
//     scrub: 1,
//     markers: true,
//     // toggleClass: "red",
//     pin: ".square",
//     // pin: true,
//     pinSpacing: true,
//   },
// });
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".square",
    start: "40% 2%",
    end: "40% 50%",
    scrub: true,
    markers: true,
  },
});
tl.to(".square", {
  x: 500,
  // opacity: 1,
  duration: 3,
});
// tl.to(".square", {
//   y: 500,
//   // opacity: 1,
//   duration: 3,
// });
// tl.to(".square", {
//   x: 0,
//   // opacity: 1,
//   duration: 3,
// });
// tl.to(".square", {
//   y: 0,
//   // opacity: 1,
//   duration: 3,
// });
