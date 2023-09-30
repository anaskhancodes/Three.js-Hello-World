const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer(); // Corrected capitalization
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1); // Corrected typo
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
renderer.render(scene, camera);
