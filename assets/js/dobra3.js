ScrollTrigger.create({
    trigger: "#dobra3",
    pin: true,
    scroller: '#main',
    start: 'top top',
    end: '100% top',
})

gsap.to('#txt61', {
    scrollTrigger: {
        trigger: '#dobra3',
        scroller: '#main',
        start: 'top top',
        end: '50% top',
        onEnter: function () {
            gsap.to('#txt61', {
                opacity: 1
            })

            gsap.to('#txt62', 0.0001, {
                opacity: 0
            })
        },
        onLeave: function(){
            gsap.to('#txt61', {
                opacity: 0
            })

            gsap.to('#txt62', {
                opacity: 1
            })
        },
        onEnterBack: function(){
            gsap.to('#txt61', {
                opacity: 1
            })

            gsap.to('#txt62', 0.01, {
                opacity: 0
            })
        },
        onLeaveBack: function(){
            gsap.to('#txt61', {
                opacity: 0
            })

            window.addEventListener('wheel', function(event){
                if (event.deltaY < 0){
                    gsap.to('#txt62', 0.0001, {
                        opacity: 0
                    })
                } else {
                    gsap.to('#txt62', {
                        opacity: 1
                    })
                }
            })
        }
    }
})
