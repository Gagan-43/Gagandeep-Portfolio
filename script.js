// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

// ==========================
// AOS INIT
// ==========================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
});

// ==========================
// TYPING EFFECT
// ==========================

new Typed("#typing", {
    strings: [
        "AI Developer",
        "Java Developer",
        "Machine Learning Enthusiast",
        "Web Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ==========================
// NAVBAR ON SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ==========================
// SCROLL TO TOP
// ==========================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// FADE IN HERO BUTTONS
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn, index) => {

    btn.style.opacity = "0";
    btn.style.transform = "translateY(30px)";

    setTimeout(() => {

        btn.style.transition = ".7s";
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0)";

    }, 600 + index * 200);

});

// ==========================
// PROFILE IMAGE TILT EFFECT
// ==========================

const profile = document.querySelector(".profile-card");

profile.addEventListener("mousemove", (e) => {

    const rect = profile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;
    const rotateX = -(y - rect.height / 2) / 18;

    profile.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "rotateX(0) rotateY(0)";

});

// ==========================
// SCROLL REVEAL FOR CARDS
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-card");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
    ".skill-card,.project-card,.timeline-item,.education-card,.about-info div"
).forEach(card => {

    card.classList.add("hidden-card");

    observer.observe(card);

});

// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
"%cWelcome to Gagandeep Singh's Portfolio 🚀",
"color:#4f8cff;font-size:18px;font-weight:bold;"
);