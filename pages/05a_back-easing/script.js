import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

function updateIndicator(tab) {
    const tabBounds = tab.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();

    const offset = tabBounds.left - rowBounds.left;
    const width = tabBounds.width;

    gsap.to(indicator, {
        x: offset,
        width: width,
        duration: 0.3,
        ease: "back.out(1.7)",
    });
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        updateIndicator(tab);
    });
});

updateIndicator(document.querySelector('.tab.active')); 