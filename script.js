// const scroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true
// });

const textArray = ['Web Application', 'Mobile App', 'Cloud services'];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;
let element = document.getElementById('element');

function type() {
    let fullText = textArray[currentIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    element.textContent = currentText;

    let typeSpeed = isDeleting ? 50 : 50;

    if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    type();
});


  document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('crsr');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#nav-section>h5');
    const magnetArea = 100; // Area in pixels around the item to activate the magnet effect
    const strength = 15; // Strength of the magnet effect

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        navItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemX = rect.left + rect.width / 3;
            const itemY = rect.top + rect.height / 3;
            const deltaX = mouseX - itemX;
            const deltaY = mouseY - itemY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < magnetArea) {
                const magnetX = (deltaX / distance) * strength;
                const magnetY = (deltaY / distance) * strength;
                item.style.transform = `translate(${magnetX}px, ${magnetY}px)`;
            } else {
                item.style.transform = `translate(0, 0)`;
            }
        });
    });
});

const hamburger = document.getElementById('ham-nav');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

})


