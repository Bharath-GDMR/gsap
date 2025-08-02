import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        button.classList.add("show");

        if (!isFloating) {
            gsap.to(button, {
                y: -10,
                duration: .5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            isFloating = true;
        }
    } else {
        button.classList.remove("show");
    }
});

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        backgroundColor: "#ff6347",
        ease: "sine.inOut",
    });
})

button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
        backgroundColor: "#007bff",
        ease: "sine.inOut",
    });
})

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})