const texts7 = document.querySelectorAll('.modalText7');
const containerText7 = document.querySelector('.texts7');
const counter7 = document.querySelector('.numCount7');
const btnNext7 = document.querySelector('#next7');
const btnBack7 = document.querySelector('#back7');
const openModal7 = document.querySelector('#btnModal7');

openModal7.onclick = () => {
    gsap.to('#modal7', {
        left: 0,
        duration: 1.0,
        display: 'block',
        onComplete: function(){
            gsap.to('#modal7', {
                duration: 1.0,
                height: '100vh',
                top: 0,
                onComplete: function () {
                    gsap.to('.modal-content7', {
                        opacity: 1,
                        onComplete: function(){
                            gsap.to('.modal-body7', {
                                opacity: 1,
                                onComplete: function(){
                                    gsap.to('.modal-header7', {
                                        duration: 0.5,
                                        opacity: 1,
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

let numCounter7 = parseInt(counter7.innerHTML);

containerText7.innerHTML = texts7[numCounter7 - 1].innerHTML;

btnNext7.onclick = () => {
    if(numCounter7 <= 7){
        numCounter7 += 1;
    }

    containerText7.innerHTML = texts7[numCounter7 - 1].innerHTML;
    counter7.innerHTML = numCounter7;
}

btnBack7.onclick = () => {
    if(numCounter7 > 1){
        numCounter7 -= 1;
    }

    containerText7.innerHTML = texts7[numCounter7 - 1].innerHTML;
    counter7.innerHTML = numCounter7;
}

const btnClose7 = document.querySelector('.btnClose7');
btnClose7.onclick = () => {
    gsap.to('.modal-header7', {
        duration: 0.5,
        opacity: 0,
        onComplete: function(){
            gsap.to('.modal-body7', {
                opacity: 0,
                onComplete: function(){
                    gsap.to('.modal-content7', {
                        opacity: 0,
                        onComplete: function(){
                            gsap.to('#modal7', {
                                duration: 1.0,
                                height: 10,
                                top: '50%',
                                onComplete: function () {
                                    gsap.to('#modal7', {
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