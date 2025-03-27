const iconMenu = document.querySelector('.menuIco')
const menuSection = document.querySelector('section.menu')
const sectionmenunavul = document.querySelector('section.menu nav ul')

iconMenu.addEventListener('click', (e) => {
    menuSection.classList.toggle('show')
    sectionmenunavul.classList.toggle('show')
})


