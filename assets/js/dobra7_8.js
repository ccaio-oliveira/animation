ScrollTrigger.create({
    trigger: '#dobra7_8',
    pin: true,
    scroller: '#main',
    start: 'top top',
    end: '300% top'
})

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0;

scene.background = new THREE.Color(0x0E141C);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#image').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 10.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);

const geometry = new THREE.SphereGeometry(1.0, 100, 100);
geometry.rotateY(THREE.MathUtils.degToRad(45));

const material = new THREE.MeshStandardMaterial();

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/static/dobra-8/Dobra7_8.png');
material.map = texture;
material.color.set(0x0E141C);
material.wireframe = true;

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.z = -5;
scene.add(mesh);

// Animação da imagem com GSAP e ScrollTrigger
gsap.to('#image', {
    left: -500,
    scrollTrigger: {
        trigger: "#dobra7_8",
        scroller: '#main',
        start: "top top ",
        end: "50% top ",
        markers: true
    }
});

function render() {
    requestAnimationFrame(render);
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

render();

