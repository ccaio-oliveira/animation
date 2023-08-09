const texts8 = document.querySelectorAll('.modalText8');
const containerText8 = document.querySelector('.texts8');
const counter8 = document.querySelector('.numCount8');
const btnNext8 = document.querySelector('#next8');
const btnBack8 = document.querySelector('#back8');
const openModal8 = document.querySelector('#btnModal8');

openModal8.onclick = () => {
    gsap.to('#modal8', {
        left: 0,
        duration: 1.0,
        display: 'block',
        onComplete: function(){
            gsap.to('#modal8', {
                duration: 1.0,
                height: '100vh',
                top: 0,
                onComplete: function () {
                    gsap.to('.modal-content8', {
                        opacity: 1,
                        onComplete: function(){
                            gsap.to('.modal-body8', {
                                opacity: 1,
                                onComplete: function(){
                                    gsap.to('.modal-header8', {
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

let numCounter8 = parseInt(counter8.innerHTML);

containerText8.innerHTML = texts8[numCounter8 - 1].innerHTML;

btnNext8.onclick = () => {
    if(numCounter8 <= 20){
        numCounter8 += 1;
    }

    containerText8.innerHTML = texts8[numCounter8 - 1].innerHTML;
    counter8.innerHTML = numCounter8;
}

btnBack8.onclick = () => {
    if(numCounter8 > 1){
        numCounter8 -= 1;
    }

    containerText8.innerHTML = texts8[numCounter8 - 1].innerHTML;
    counter8.innerHTML = numCounter8;
}

const btnClose8 = document.querySelector('.btnClose8');
btnClose8.onclick = () => {
    gsap.to('.modal-header8', {
        duration: 0.5,
        opacity: 0,
        onComplete: function(){
            gsap.to('.modal-body8', {
                opacity: 0,
                onComplete: function(){
                    gsap.to('.modal-content8', {
                        opacity: 0,
                        onComplete: function(){
                            gsap.to('#modal8', {
                                duration: 1.0,
                                height: 10,
                                top: '50%',
                                onComplete: function () {
                                    gsap.to('#modal8', {
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