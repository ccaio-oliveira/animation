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
        start: `+599% top `,
        end: `1180% top`,
        scroller: `#main`,
        onEnter: function() {
            imgLogo.src = 'assets/static/logo/logo-white.png'
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

            document.querySelector('.sidebar').classList.add('blackCont');
        },
        onLeave: function() {
            imgLogo.src = 'assets/static/logo/logo-black.png'
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

            document.querySelector('.sidebar').classList.remove('blackCont');
        },
        onEnterBack: function() {
            imgLogo.src = 'assets/static/logo/logo-white.png'
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

            document.querySelector('.sidebar').classList.add('blackCont');
        },
        onLeaveBack: function() {
            imgLogo.src = 'assets/static/logo/logo-black.png'
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

            document.querySelector('.sidebar').classList.remove('blackCont');
        }
    }
})