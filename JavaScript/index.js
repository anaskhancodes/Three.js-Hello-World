const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer(); // Corrected capitalization
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 3, 1); // Corrected typo
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
renderer.render(scene, camera);

let flag = true;

function animate(){
    
    if(cube.position.z > 1){
        flag = false
    } else if(cube.position.z < -7){
        flag = true
    }
    
    if(flag){
        cube.position.z += 0.1;
    }else{
        cube.position.z -= 0.1;
    }
    
    cube.rotation.y += 0.1; 
    cube.rotation.x += 0.01; 
    cube.rotation.z += 0.01; 

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

// setInterval(animate, 100)
