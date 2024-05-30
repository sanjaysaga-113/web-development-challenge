let flashlight = document.getElementById("flashlight");
let rectangle = document.getElementById("rectangle");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const gradientCenterX = (mouseX / window.innerWidth) * 100;
    const gradientCenterY = (mouseY / window.innerHeight) * 100;

    flashlight.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    rectangle.style.background = `radial-gradient(
        circle 280px at ${gradientCenterX}% ${gradientCenterY}%,
        transparent 10%,
        rgba(0, 0, 0, 0.95)
    )`;
});
