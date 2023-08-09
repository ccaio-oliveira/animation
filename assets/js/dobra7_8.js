ScrollTrigger.create({
    trigger: "#dobra7_8",
    pin: true,
    scroller: "#main",
    start: "top top",
    end: "300% top",
})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 0

scene.background = new THREE.Color(0x0e141c)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.querySelector("#image").appendChild(renderer.domElement)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)

const geometry = new THREE.SphereGeometry(1.6, 100, 100)
geometry.rotateY(THREE.MathUtils.degToRad(45))

const material = new THREE.MeshStandardMaterial()

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load("assets/static/dobra-8/Dobra7_8.png")
material.map = texture
// material.color.set(0x0E141C);

const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0
mesh.position.z = -5
scene.add(mesh)

function render() {
    requestAnimationFrame(render)
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
}

render()

const index = []
const frameCount8 = 150

for (let i = 1; i <= 150; i++) {
    index.push(i)
}

const imageSeq8 = {
    frame: 1,
}

gsap.to(imageSeq8, {
    frame: frameCount8 - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#dobra7_8`,
        //   set start end according to preference
        start: `top top`,
        end: `300% top`,
        scroller: `#main`,
    },
    onUpdate: function () {
        if (imageSeq8.frame < 50) {
            gsap.to("#txt7", 0.1, {
                opacity: 1,
                left: "6%",
            })

            if (window.innerWidth > 430) {
                gsap.to("#image", 0.2, {
                    left: 400,
                })
            }

            gsap.to("#txt81", 0.1, {
                opacity: 0,
                right: "100%",
            })

        } else if (imageSeq8.frame > 49 && imageSeq8.frame < 100) {
            gsap.to("#txt7", 0.1, {
                opacity: 0,
                left: "-6%",
            })

            gsap.to("#txt81", 0.1, {
                opacity: 1,
                right: 0,
            })

            gsap.to("#txt82", 0.1, {
                opacity: 0,
                right: -200,
            })

            if (window.innerWidth > 430) {
                gsap.to("#image", 0.2, {
                    left: -550,
                })
            }
        } else if (imageSeq8.frame > 99) {
            gsap.to("#txt81", 0.1, {
                opacity: 0,
                right: -20,
            })

            gsap.to("#txt82", 0.1, {
                opacity: 1,
            })
        }
    },
})
