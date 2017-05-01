document.addEventListener('DOMContentLoaded', () => {
  ;[...document.querySelectorAll('.righter, #hubspot-messages-iframe-container')]
      .forEach(element => element.addEventListener('mouseover', (event) => {
        event.target.style.opacity = '0'
      }))

  ;(([...document.querySelectorAll('.top-image-bg')].pop() || {}).remove || noop)()

  document.addEventListener('click', event => {
    if (!event.path.reduce((acc, element) => acc + element.className).match('top-image')) {
      return
    }
    if (event.clientX < document.querySelector('.top-image').clientWidth / 2) {
      slideBack()
    } else {
      slideForward()
    }
  })
})

function noop () {}

let slideIndex = -1
let slideFuncs = [
  nero1,
  nero2,
  aubach1,
  zonejs
]

function slideBack () {
  if (slideFuncs[slideIndex - 1]) {
    slideIndex--
    slideSwap()
  }
}

function slideForward () {
  if (slideFuncs[slideIndex + 1]) {
    slideIndex++
    slideSwap()
  }
}

function slideSwap () {
  let slides = [...document.querySelectorAll('.top-image-bg')]
  slides.forEach((element, index) => {
    element.style.opacity = 0
  })
  let slide = slides[Math.abs(slideIndex) % 2]
  let content = slideFuncs[slideIndex]()
  slide.style.backgroundImage = `url(${content.image})`
  slide.style.backgroundSize = content.size || 'cover'
  slide.style.color = content.color || 'white'
  slide.querySelector('h2').textContent = content.text
  slide.style.opacity = 1
}

function nero1 () {
  return {
    text: '',
    color: 'black',
    image: 'nero.jpg',
    size: 'cover'
  }
}

function nero2 () {
  return {
    text: 'Henry the hoover',
    color: 'black',
    image: 'nero.jpg',
    size: 'cover'
  }
}

function aubach1 () {
  return {
    text: '',
    color: 'black',
    image: 'aubach1.jpg',
    size: 'cover'
  }
}

function zonejs () {
  return {
    text: '',
    color: 'black',
    image: 'zonejs.png',
    size: 'cover'
  }
}

function tech () {
  return {
    text: 'tech',
    color: 'red',
    image: 'monk.jpg',
    size: 'contain'
  }
}

function me () {
  [...document.querySelectorAll('img')]
    .filter(element => element.src.match(/clarence/i) && element.offsetTop > 0)
    .forEach(element => {
      let limit = 10;
      (function scroll () {
        let distance = (element.offsetTop + window.windowHeight) - document.body.scrollTop
        if (limit-- < 1 || distance < 1) {
          return
        }
        document.body.scrollTop += distance / 2
        setTimeout(scroll, 20)
      })()
    })
}
