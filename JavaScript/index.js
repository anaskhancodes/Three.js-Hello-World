const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1); // BOX
// const geometry = new THREE.CapsuleGeometry(1, 1, 15, 15); // CAPSULE
// const geometry = new THREE.CircleGeometry(1,50); // CIRCLE
// const geometry = new THREE.ConeGeometry(1,2, 300); // CONE
// const geometry = new THREE.CylinderGeometry(2 , 2, 2,50); // CYLINDER

// for Color
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const cube = new THREE.Mesh(geometry, material);
// const cube = new THREE.Line(geometry, material);

scene.add(cube);
renderer.render(scene, camera);


let q = 0;

const animate = () => {
    cube.position.z = 2 * Math.sin(q += 0.05);
    
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();