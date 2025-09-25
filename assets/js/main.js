import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdda0dd);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
// Standard material 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//Basic Material
const materialBasic = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
const cube2 = new THREE.Mesh(geometry, materialBasic);
scene.add(cube2);
//Lamber material
const materiallambert = new THREE.MeshLambertMaterial({ color: 0x00ff00, emissive: 0xff000, emissiveIntensity: 0.1 });
const cube3 = new THREE.Mesh(geometry, materiallambert);
scene.add(cube3);
//Normal material
const materialNormal = new THREE.MeshNormalMaterial({Color: 0x00ff00, transparent:true, opacity:1, wireframe:true, wireframeLinewidth:5, wireframeLinejoin:'round', wireframeLinecap:'round'});
const cube4 = new THREE.Mesh(geometry, materialNormal);
scene.add(cube4);
//load image
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/img/Ajedrez.png'); ;
const materialTxt = new THREE.MeshStandardMaterial({ map: texture, side:THREE.DoubleSide });
const cube5=new THREE.Mesh(geometry, materialTxt);
scene.add(cube5);
//Cargar pmultiples imagenes
const materialCube = [new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face1.jpg'),side:THREE.DoubleSide })
  , new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face2.png'), side:THREE.DoubleSide})
  , new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face3.jpg'), side:THREE.DoubleSide})
  , new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face4.jpg'), side:THREE.DoubleSide})
  , new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face5.png'), side:THREE.DoubleSide})
  , new THREE.MeshBasicMaterial({ map: textureLoader.load('./assets/img/face6.jpg'), side:THREE.DoubleSide})
]
// Cubo 6
const cube6 = new THREE.Mesh(geometry, materialCube);
scene.add(cube6)
;
//Posiciones
cube5.position.x = -4;
cube4.position.x = 4;
cube3.position.x = 2;
cube2.position.x = -2;
camera.position.z = 5;
cube6.position.y = -2;
controls.update();

function animate() {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
  cube4.rotation.x += 0.01;
  cube4.rotation.y += 0.01;
  cube5.rotation.x += 0.01;
  cube5.rotation.y += 0.01
  cube6.rotation.x += 0.01;
  cube6.rotation.y += 0.01
  controls.update();
  renderer.render(scene, camera);

}
function onWindowResize() {
  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Update camera aspect ratio for PerspectiveCamera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', onWindowResize, false);
//luces
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
//pointlight
const pointLight = new THREE.PointLight(0xff0000, 10, 100);
pointLight.position.set(0, 2.5, 0);
scene.add(pointLight);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(pointLightHelper);