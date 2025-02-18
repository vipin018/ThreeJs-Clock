import { Scene, Color, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, LinearSRGBColorSpace , Mesh, SphereGeometry, MeshBasicMaterial } from "three";

let scene = new Scene();
scene.background = new Color('white');

let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

let renderer = new WebGLRenderer({
    antialias: true
});
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = LinearSRGBColorSpace ;
document.body.appendChild(renderer.domElement);

let sphere = new Mesh(
    new SphereGeometry(2, 5, 5),
    new MeshBasicMaterial({ color: 'red' })
);
scene.add(sphere);

(function init() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
})();