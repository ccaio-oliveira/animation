const circles = document.querySelectorAll(".circle")

document.addEventListener("DOMContentLoaded", () => {
  circles.forEach(circle => {
    circle.style.opacity = 0
  })
})

let scrollY = 0

document.addEventListener("scroll", event => {
  scrollY += event.deltaY

  if (scrollY < 0) {
    scrollY = 0
  }

  for (let index = 1; index <= 12; index++) {
    const circle = circles[index - 1]

    if (index <= 4) {
      circle.style.transform = `rotate(${(scrollY * 0.2) / index}deg)`
    }

    if (index > 4 && index <= 8) {
      circle.style.transform = `rotate(${(scrollY * 0.2) / (index - 4)}deg)`
    }

    if (index > 8) {
      circle.style.transform = `rotate(${(scrollY * 0.2) / (index - 8)}deg)`
    }

    circle.style.opacity = `${scrollY * 0.8}%`
  }
})
