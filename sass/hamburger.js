const menu = document.querySelector('.icon');
const hamburger = document.querySelector('.header-hamburger');
const cross = document.querySelector('.cross');
const click = document.querySelector('.click');

menu.addEventListener('click', () => {
    hamburger.classList.add('click')

});

cross.addEventListener('click', () => {
    hamburger.classList.remove('click')

});
