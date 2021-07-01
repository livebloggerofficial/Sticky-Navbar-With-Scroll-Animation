const stickyNavbar = document.querySelector("header.sticky-navbar");

document.addEventListener("scroll", () => {

    if (window.scrollY > 36) {
        stickyNavbar.classList.add("scrolling");
    } else {
        stickyNavbar.classList.remove("scrolling");
    }

})