const toggle = document.getElementById('toggle');
const nav = document.getElementById('mobile-menu');
const main = document.getElementById('main');
const header = document.getElementById('navbar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

main.addEventListener('click', () => {
    nav.classList.remove('active');
})

header.addEventListener('click', () => {
    nav.classList.remove('active');
})