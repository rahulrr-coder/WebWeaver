let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let button1 = document.getElementById('weave-button')
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust parallax effect based on scroll position
    text.style.transform = `translateY(${value * 0.5}px)`;
    text2.style.transform = `translateY(${value * 0.5}px)`;
    button1.style.transform = `translateY(${value * 0.5}px)`;
    leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
    hill1.style.transform = `translateY(${value * -0.3}px)`;
    hill2.style.transform = `translateY(${value * -0.5}px)`;
    hill3.style.transform = `translateY(${value * -0.7}px)`;
    hill4.style.transform = `translateY(${value * 0.5}px)`;
    hill5.style.transform = `translateY(${value * 0.7}px)`;
    tree.style.transform = `translateY(${value * 0.3}px)`;
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
