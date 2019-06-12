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
    console.log(event.target.tagName);
    let content = document.querySelector(".menu-content");
    if (content.style.display === "none") {
        console.log("opening");
        content.style.display = "block";
    }
    else if (content.style.display === "block" && event.target.className === "menu-content" || event.target.tagName === 'A' || event.target.tagName === 'ION-ICON') {
        console.log("closing", event.target.className);
        content.style.display = "none";
    }
}

window.onload = () => {
    // check if page has preloader
    let preloader = document.getElementById("preloader");
    if (preloader !== null) {
        // fade out preloader when everything has loaded
        preloader.style.opacity = 1;
        fadeOut(preloader);
    };

    // add click listener to toggle menu
    let menu = document.getElementById("menu");
    menu.addEventListener("click", toggleMenu);
    // console.log("listening");

    let content = document.querySelector(".menu-content");
    // console.log(content.style.display);
};