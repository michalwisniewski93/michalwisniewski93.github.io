const iconMenu = document.querySelector('.menuIco')
const menuSection = document.querySelector('section.menu')
const sectionmenunavul = document.querySelector('section.menu nav ul')

iconMenu.addEventListener('touchstart', function(){
    menuSection.classList.toggle('show')
    sectionmenunavul.classList.toggle('show')
})


