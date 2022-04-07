import * as flsFunctions from './modules/isWebp.js'
flsFunctions.isWebp()

// Навигационное меню
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
})

// Меняем фон Хедера при скролле
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)
