const circles = document.querySelectorAll(".circle")

document.addEventListener("DOMContentLoaded", () => {
  circles.forEach(circle => {
    circle.style.opacity = 0
  })

  document.addEventListener("wheel", event => handleLargeScreen(event))

  // bodyEl = document.querySelector("body")

  // const observerCallback = () => {
  //   const isLargeScreen = window.matchMedia("(min-width: 576px)").matches

  //   if (isLargeScreen) {
  //     document.removeEventListener("touchmove", event =>
  //       handleSmallScreen(event)
  //     )
  //     document.addEventListener("wheel", event => handleLargeScreen(event))
  //   } else {
  //     document.removeEventListener("wheel", event => handleLargeScreen(event))
  //     document.addEventListener("touchmove", event => handleSmallScreen(event))
  //   }
  // }

  // const observer = new MutationObserver(observerCallback)
  // observer.observe(bodyEl, { attributes: true })
})

let scrollY = 0

function handleLargeScreen(event) {
  scrollY += event.deltaY

  if (scrollY < 0) {
    scrollY = 0
  }

  for (let index = 1; index <= 8; index++) {
    const circle = circles[index - 1]

    if (index <= circles.length / 2) {
      circle.style.transform = `rotate(${(scrollY * 0.2) / index}deg)`
    }

    if (index > circles.length / 2) {
      circle.style.transform = `rotate(${
        (scrollY * 0.2) / (index - circles.length / 2)
      }deg)`
    }

    circle.style.opacity = `${scrollY * 0.05}%`
  }
}

// function handleSmallScreen(event) {
//   scrollY = event.target.scrollingElement.scrollTop

//   for (let index = 1; index <= 12; index++) {
//     const circle = circles[index - 1]

//     if (index <= 4) {
//       circle.style.transform = `rotate(${(scrollY * 0.2) / index}deg)`
//     }

//     if (index > 4 && index <= 8) {
//       circle.style.transform = `rotate(${(scrollY * 0.2) / (index - 4)}deg)`
//     }

//     if (index > 8) {
//       circle.style.transform = `rotate(${(scrollY * 0.2) / (index - 8)}deg)`
//     }

//     circle.style.opacity = `${scrollY}%`
//   }
// }
