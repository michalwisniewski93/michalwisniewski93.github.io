const iconMenu = document.querySelector('.menuIco')
const menuSection = document.querySelector('section.menu')
const sectionmenunavul = document.querySelector('section.menu ul')
const link = document.querySelector('section.menu ul li a')

iconMenu.addEventListener('touchstart', (e) => {
    menuSection.classList.toggle('show')
    sectionmenunavul.classList.toggle('show')
})

link.addEventListener('touchstart', (e) => {
    menuSection.classList.remove('show')
    sectionmenunavul.classList.remove('show')
})


