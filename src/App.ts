// Initialize the game after the DOM is loaded.
let init = () => {
    new Start(document.getElementById("canvas") as HTMLCanvasElement);
};

// Add EventListener to load the game whenever the browser is ready
window.addEventListener("load", init);