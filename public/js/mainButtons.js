const btnSideOpen = document.querySelector('#nav-button');
const btnSideClose = document.querySelector('.close-button');
const sideBar = document.querySelector('.sidebar');

const imgLogo = document.querySelector('#imgLogo');

btnSideOpen.onclick = () => {
    sideBar.classList.add('open');
}

btnSideClose.onclick = () => {
    sideBar.classList.remove('open');
}

const dobra3 = document.querySelector('#dobra3')

gsap.to('#imgLogo', {
    scrollTrigger: {
        trigger: dobra3,
        start: `+499% top `,
        end: `1100% top`,
        onEnter: function() {
            imgLogo.src = '/static/logo/logo-white.png'
            gsap.to('.btn-contato', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })
            
            gsap.to('#nav-button', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })

            gsap.to('.social-media', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })

            gsap.to('.fa-instagram', {
                color: '#FFF'
            })

            gsap.to('.fa-linkedin-in', {
                color: '#FFF',
                borderColor: '#FFF'
            })

            document.querySelector('.sidebar').classList.add('blackCont');
        },
        onLeave: function() {
            imgLogo.src = '/static/logo/logo-black.png'
            gsap.to('.btn-contato', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })
            
            gsap.to('#nav-button', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })

            gsap.to('.social-media', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })

            gsap.to('.fa-instagram', {
                color: '#000'
            })

            gsap.to('.fa-linkedin-in', {
                color: '#000',
                borderColor: '#000'
            })

            document.querySelector('.sidebar').classList.remove('blackCont');
        },
        onEnterBack: function() {
            imgLogo.src = '/static/logo/logo-white.png'
            gsap.to('.btn-contato', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })
            
            gsap.to('#nav-button', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })

            gsap.to('.social-media', {
                boxShadow: '1px 4px 11px 0px rgba(106, 106, 106, 0.25)',
                backgroundColor: '#0E141C',
                color: '#FFF'
            })

            gsap.to('.fa-instagram', {
                color: '#FFF'
            })

            gsap.to('.fa-linkedin-in', {
                color: '#FFF',
                borderColor: '#FFF'
            })

            document.querySelector('.sidebar').classList.add('blackCont');
        },
        onLeaveBack: function() {
            imgLogo.src = '/static/logo/logo-black.png'
            gsap.to('.btn-contato', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })
            
            gsap.to('#nav-button', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })

            gsap.to('.social-media', {
                boxShadow: '0.99609375px 3.984375px 10.95703125px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#F3F3F3',
                color: '#000'
            })

            gsap.to('.fa-instagram', {
                color: '#000'
            })

            gsap.to('.fa-linkedin-in', {
                color: '#000',
                borderColor: '#000'
            })

            document.querySelector('.sidebar').classList.remove('blackCont');
        }
    }
})