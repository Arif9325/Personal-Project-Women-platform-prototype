document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Add class when scrolling
        } else {
            navbar.classList.remove("scrolled"); // Remove class when at top
        }
    });
});
