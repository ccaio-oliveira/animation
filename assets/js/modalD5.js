const openMD5 = document.querySelector('#knowTech5');


var t1 = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
openMD5.addEventListener('click', () => {
    t1.to('#modal5', { right: 0, top: 0 })
        .to('#modal5', { height: '100vh' }, '-=1.0')
        .to('.modal-container5', { right: 25, opacity: 1, PointerEvents: 'all', stagger: .2 }, '-=.9')

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