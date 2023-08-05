const openMD5 = document.querySelector('#knowTech5');


var t1 = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
openMD5.addEventListener('click', () => {
    t1.to('#modal5', { right: 0, top: 0 })
        .to('#modal5', { height: '100vh' }, '-=1.0')
        .to('.modal-container5', { right: '2%', opacity: 1, PointerEvents: 'all', stagger: .2 }, '-=.9')

    const closeWithBg = document.querySelector('.modal-bg5');
    closeWithBg.onclick = () => {
        t1.to('.modal-container5', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal5', { right: -200 })
            .to('#modal5', { height: 0 }, '-=1.0')
    }

    const closeBtn5 = document.querySelector('.btnClose5');
    closeBtn5.onclick = () => {
        t1.to('.modal-container5', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal5', { right: -200 })
            .to('#modal5', { height: 0 }, '-=1.0')
    }
})

// modal dobra 7
const openMD7 = document.querySelector('#btnModal7');

openMD7.onclick = () => {
    t1.to('#modal7', { right: 0, top: 0 })
        .to('#modal7', { height: '100vh' }, '-=1.0')
        .to('.modal-container7', { right: '2%', opacity: 1, PointerEvents: 'all', stagger: .2 }, '-=.9')

    const closeWithBg = document.querySelector('.modal-bg7');
    closeWithBg.onclick = () => {
        t1.to('.modal-container7', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal7', { right: -200 })
            .to('#modal7', { height: 0 }, '-=1.0')
    }

    const closeBtn7 = document.querySelector('.btnClose7');
    closeBtn7.onclick = () => {
        t1.to('.modal-container7', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal7', { right: -200 })
            .to('#modal7', { height: 0 }, '-=1.0')
    }

    const nextModal = document.querySelector('.btnNextModal');
    nextModal.onclick = () => {
        t1.to('.modal-container7', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal7', { right: -200 })
            .to('#modal7', { height: 0 }, '-=1.0')

        t1.to('#modal72', { right: 0, top: 0 })
            .to('#modal72', { height: '100vh' }, '-=1.0')
            .to('.modal-container72', { right: '2%', opacity: 1, PointerEvents: 'all', stagger: .2 }, '-=.9')

        const closeBtn72 = document.querySelector('.btnClose72');
        closeBtn72.onclick = () => {
            t1.to('.modal-container72', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
                .to('#modal72', { right: -200 })
                .to('#modal72', { height: 0 }, '-=1.0')
        }
    }
}

// modal dobra 8
const openMD8 = document.querySelector('#btnModal8');


openMD8.addEventListener('click', () => {
    t1.to('#modal8', { right: 0, top: 0 })
        .to('#modal8', { height: '100vh' }, '-=1.0')
        .to('.modal-container8', { right: '2%', opacity: 1, PointerEvents: 'all', stagger: .2 }, '-=.9')

    const closeWithBg = document.querySelector('.modal-bg8');
    closeWithBg.onclick = () => {
        t1.to('.modal-container8', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal8', { right: -200 })
            .to('#modal8', { height: 0 }, '-=1.0')
    }

    const closeBtn8 = document.querySelector('.btnClose8');
    closeBtn8.onclick = () => {
        t1.to('.modal-container8', { right: '-100vw', opacity: 0, PointerEvents: 'all', stagger: .2 }, '-=.9')
            .to('#modal8', { right: -200 })
            .to('#modal8', { height: 0 }, '-=1.0')
    }
})