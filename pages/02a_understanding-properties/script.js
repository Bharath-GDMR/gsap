import gsap from "gsap";

gsap.to(".box", {
    opacity: 1,
    rotate: 360,
    borderRadius: "20px",
    duration: 2,
    ease: "power2.inOut",
    ease: 'elastic.out(1, 0.3)',
    repeat: -1,
    yoyo: true,
    scale: 1.2,
});