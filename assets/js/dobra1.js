const btnScrollSec2 = document.querySelector('.scroll-down');

ScrollTrigger.create({
    trigger: "#dobra1",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `40% top`,
});