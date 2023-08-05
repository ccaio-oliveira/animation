ScrollTrigger.create({
  trigger: "#dobra3",
  pin: true,
  scroller: "#main",
  start: "top top",
  end: "100% top",
})

const index3 = []
const frameCount3 = 100

for (let i = 1; i <= 100; i++) {
  index3.push(i)
}

const imageSeq3 = {
  frame: 1,
}

gsap.to(imageSeq3, {
  frame: frameCount3 - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#dobra3`,
    //   set start end according to preference
    start: `top top`,
    end: `100% top`,
    scroller: `#main`,
  },
  onUpdate: function () {
    if (imageSeq3.frame < 50) {
      gsap.to("#txt61", 0.1, {
        opacity: 1,
      })

      gsap.to("#txt62", 0.1, {
        opacity: 0,
      })
    } else if (imageSeq3.frame > 49 && imageSeq3.frame < 100) {
      gsap.to("#txt61", 0.1, {
        opacity: 0,
      })

      gsap.to("#txt62", 0.1, {
        opacity: 1,
        right: 0,
      })
    }
  },
})
