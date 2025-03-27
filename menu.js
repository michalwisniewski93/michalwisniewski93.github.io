const iconMenu = document.querySelector('.menuIco')
const menuSection = document.querySelector('section.menu')
const sectionmenunavul = document.querySelector('section.menu ul')

iconMenu.addEventListener('touchstart', (e) => {
    menuSection.classList.toggle('show')
    sectionmenunavul.classList.toggle('show')
})


