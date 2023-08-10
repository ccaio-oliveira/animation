gsap.to('#pin9', {
    ScrollTrigger: {
        trigger: "#dobra9",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `40% top`,
    }
})