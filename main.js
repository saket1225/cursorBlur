var root = document.querySelector(':root');

window.addEventListener("mousemove", (e) => {
    root.style.setProperty('--x', `${e.pageX}px`);
    root.style.setProperty('--y', `${e.pageY}px`);
})
