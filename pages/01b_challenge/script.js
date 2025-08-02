import gsap from "gsap";

gsap.to(".card", {
    opacity: 1,
    rotate: 360,
    borderRadius: "20px",
    duration: 2,
    ease: "power2.inOut",
    ease: 'bounce',
    repeat: -1,
    yoyo: true,
    scale: 1.2,
});