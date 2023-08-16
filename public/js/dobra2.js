const image = [];

for (let i = 451; i <= 590; i++) {
    const nomeImagem = `Frame${i}`;
    const caminhoImagem = `/static/dobra-2/${nomeImagem}.jpg`;
    image.push(caminhoImagem);
}

for (let i = 0; i <= 235; i++) {
    if (i <= 79) {
        if (i <= 9) {
            const nomeImagem = `Frame00${i}`;
            const caminhoImagem = `/static/dobra-3/${nomeImagem}.jpg`;
            image.push(caminhoImagem);
        } else {
            const nomeImagem = `Frame0${i}`;
            const caminhoImagem = `/static/dobra-3/${nomeImagem}.jpg`;
            image.push(caminhoImagem);
        }
    } else if (i >= 80 && i <= 157) {
        if (i <= 99) {
            const nomeImagem = `Frame0${i}`;
            const caminhoImagem = `/static/dobra-4/${nomeImagem}.jpg`;
            image.push(caminhoImagem);
        } else {
            const nomeImagem = `Frame${i}`;
            const caminhoImagem = `/static/dobra-4/${nomeImagem}.jpg`;
            image.push(caminhoImagem);
        }
    } else if (i > 157) {
        const nomeImagem = `Frame${i}`;
        const caminhoImagem = `/static/dobra-5/${nomeImagem}.jpg`;
        image.push(caminhoImagem);
    }
}

var imagesString = image.join("\n");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `${imagesString}`;
    return data.split("\n")[index];
}

const frameCount = 376;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#dobra2`,
        //   set start end according to preference
        start: (window.innerWidth < 430 ? 'top top' : `top top`),
        end: `400% top`,
    },
    onUpdate: render,
});

images[1].onload = render;

const textD2 = document.querySelector('#txt2');

function render() {
    scaleImage(images[imageSeq.frame], context);
    const url = images[imageSeq.frame].src;
    if (url.includes('dobra-2')) {
        gsap.to('#txt2', {
            opacity: 1,
            x: 0
        })

        gsap.to('#txt3', {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt4', {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt5', {
            opacity: 0,
            x: -200
        })

    } else if (url.includes('dobra-3')) {
        gsap.to('#txt2', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt3', 0.1, {
            opacity: 1,
            x: 0
        })

        gsap.to('#txt4', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt5', 0.1, {
            opacity: 0,
            x: -200
        })

    } else if (url.includes('dobra-4')) {

        gsap.to('#txt2', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt3', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt4', 0.1, {
            opacity: 1,
            x: 0
        })

        gsap.to('#txt5', 0.1, {
            opacity: 0,
            x: -200
        })
    } else if (url.includes('dobra-5')) {
        gsap.to('#txt2', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt3', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt4', 0.1, {
            opacity: 0,
            x: -200
        })

        gsap.to('#txt5', 0.1, {
            opacity: 1,
            x: 0
        })
    }
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = (canvas.width / img.width) / 2;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 1.8;
    if(window.innerWidth < 430){
        ratio = 0.5;
        centerShift_x = (canvas.width - ((img.width * ratio) + 210)) / 1.8;
    }
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width - 1, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

gsap.to('#pin2', {
    scrollTrigger: {
        trigger: '#dobra2',
        pin: true,
        start: (window.innerWidth < 430 ? 'top top' : 'top top'),
        end: '400% top',
    }
})