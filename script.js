// Preloader

// to fade out
fade = (el) => {
    console.log("starting", el.style.opacity);
    if (el.style.opacity == 0) {
        console.log("everything has loaded");
    } else {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            console.log(el.style.opacity);
            requestAnimationFrame(() => { this.fade(el); });
        }
    }
};

window.onload = () => {
    // fade out preloader when everything has loaded
    let preloader = document.getElementById("preloader");

    preloader.style.opacity = 1;

    fade(preloader);
};