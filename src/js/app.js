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

























