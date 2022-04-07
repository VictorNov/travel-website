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

// Swiper Slider
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
})

// VIDEO
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
  if (videoFile.paused) {
    videoFile.play()
    videoIcon.classList.remove('ri-play-line')
    videoIcon.classList.add('ri-pause-line')
  } else {
    videoFile.pause()
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
  }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', finalVideo)

// Show Scroll Up
function showScroll() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= window.innerHeight) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', showScroll)

// Отметить ссылку на активную секцию
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 50
    const sectionId = section.getAttribute('id')

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// Переключение темная/светлая темы
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


















