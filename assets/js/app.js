let openMenu = document.querySelector('.header-bar .icon-1')
let navMenu = document.querySelector('.nav-bar')
let closeMenu = document.querySelector('.icon-2')
openMenu.onclick = function () {
    navMenu.classList.add('active-nav-bar')
    closeMenu.style.display="block"
    openMenu.style.display="none"
}
closeMenu.onclick = function () {
    navMenu.classList.remove('active-nav-bar')
    openMenu.style.display="block"
    closeMenu.style.display="none"
}