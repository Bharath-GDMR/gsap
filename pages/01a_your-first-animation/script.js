gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 3,
    onComplete: () => {
        gsap.to('.card', {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: .5,
        });
    }
})