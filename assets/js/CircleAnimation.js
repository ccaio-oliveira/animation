const circles = document.querySelectorAll(".circle")
const mainEl = document.getElementById("main")

document.addEventListener("DOMContentLoaded", () => {
  circles.forEach(circle => {
    circle.style.opacity = 0
  })
})

let scrollY = 0

mainEl.addEventListener("wheel", event => {
  scrollY += event.deltaY

  if (scrollY < 0) {
    scrollY = 0
  }

  for (let index = 1; index <= 12; index++) {
    const circle = circles[index - 1]

    if (index <= 4) {
      circle.style.transform = `rotate(${(scrollY * 0.5) / index}deg)`
    }

    if (index > 4 && index <= 8) {
      circle.style.transform = `rotate(${(scrollY * 0.5) / (index - 4)}deg)`
    }

    if (index > 8) {
      circle.style.transform = `rotate(${(scrollY * 0.5) / (index - 8)}deg)`
    }

    circle.style.opacity = `${scrollY * 0.8}%`
  }
})
