// to fade out an element
fadeOut = (el) => {
    // console.log("starting", el.style.opacity);
    if (el.style.opacity == 0) {
        // console.log("everything has loaded");
    } else {
        if ((el.style.opacity -= .015) < 0) {
            el.style.display = "none";
        } else {
            // console.log(el.style.opacity);
            requestAnimationFrame(() => { this.fadeOut(el); });
        }
    }
};

let toggleMenu = (event) => {
    console.log("click")
    let content = document.querySelector(".menu-content");
    if (content.style.display === "none") {
        console.log("opening");
        content.style.display = "block";
    } else {
        console.log("closing");
        content.style.display = "none";
    }
}

window.onload = () => {
    // fade out preloader when everything has loaded
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = 1;
    fadeOut(preloader);

    // add click listener to toggle menu
    let menu = document.getElementById("menu");
    menu.addEventListener("click", toggleMenu);
    console.log("listening");

    let content = document.querySelector(".menu-content");
    // console.log(content.style.display);
};