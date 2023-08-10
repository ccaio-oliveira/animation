const modal5 = document.querySelector('#modal5');
const modalCont5 = document.querySelector('.modal-container5');

const openMD5 = document.querySelector('#knowTech5');
openMD5.addEventListener('click', () => {
    gsap.to(modal5, {
        duration: 0.7,
        display: 'block',
        left: 0,
        onComplete: function () {
            gsap.to(modal5, {
                duration: 1,
                height: '100%',
                top: 0,
                onComplete: function () {
                    gsap.to(modalCont5, {
                        duration: 1,
                        opacity: 1,
                        onComplete: function () {
                            gsap.to(modalCont5, {
                                duration: 1,
                                top: (window.innerWidth < 430 ? 0 : '20%'),
                                height: (window.innerWidth < 430 ? '100vh' : '70%')
                            })
                            gsap.to('.modal-header', {
                                opacity: 1,
                                duration: 0.5,
                                onComplete: function () {
                                    gsap.to('.modal-body', {
                                        opacity: 1,
                                        duration: 1
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    const closeWithBg = document.querySelector(modal5);
    closeWithBg.addEventListener('click', () => {
        gsap.to('.modal-header', {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
                gsap.to('.modal-body', {
                    duration: 0.5,
                    opacity: 0,
                    onComplete: function () {
                        gsap.to(modalCont5, {
                            duration: .9,
                            height: 10,
                            top: '50%',
                            ease: 'power2.in',
                            onComplete: function () {
                                gsap.to(modalCont5, {
                                    opacity: 0,
                                    ease: 'power2.in',
                                    duration: .3,
                                    onComplete: function () {
                                        gsap.to(modal5, {
                                            duration: 1.0,
                                            height: 10,
                                            top: '50%',
                                            onComplete: function () {
                                                gsap.to(modal5, {
                                                    left: '100%',
                                                    duration: 1.0,
                                                    display: 'none'
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
})

const closeBtn5 = document.querySelector('.btnClose5');
closeBtn5.addEventListener('click', () => {
    gsap.to('.modal-header', {
        duration: 0.5,
        opacity: 0,
        onComplete: function () {
            gsap.to('.modal-body', {
                duration: 0.5,
                opacity: 0,
                onComplete: function () {
                    gsap.to(modalCont5, {
                        duration: .9,
                        height: 10,
                        top: '50%',
                        ease: 'power2.in',
                        onComplete: function () {
                            gsap.to(modalCont5, {
                                opacity: 0,
                                ease: 'power2.in',
                                duration: .3,
                                onComplete: function () {
                                    gsap.to(modal5, {
                                        duration: 1.0,
                                        height: 10,
                                        top: '50%',
                                        onComplete: function () {
                                            gsap.to(modal5, {
                                                left: '100%',
                                                duration: 1.0,
                                                display: 'none'
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})