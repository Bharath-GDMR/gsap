import gsap from "gsap";

const showToastLoop = () => {

    gsap.to(".toast", {
        y: -120,
        opacity: 1,
        duration: 1,
        ease: "power4.Out",
        duration: 0.5,
        onComplete: () => {
            gsap.to(".toast", {
                y: 0,
                opacity: 0,
                duration: 1,
                ease: "power.In",
                delay: 2,
                onComplete: showToastLoop
            });
        }
    })

}

showToastLoop();