const toggle = document.getElementById('toggle');
const nav = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});