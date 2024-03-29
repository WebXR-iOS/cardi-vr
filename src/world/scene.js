/**
 * @author crazyh / https://github.com/crazyh2
 */

import { WelcomeScreen } from "../screens/start/welcome.js";
import { ScreenManager } from "./../screens/screenManager.js";

class Scene {
    constructor(top) {
        this.top = top;

        this.scene = new THREE.Scene();

        this.ScreenManager = new ScreenManager(this);

        this.main();
    };

    main() {
        var vrDisplay = this.top.vrDisplay;

        // Create a three.js camera.
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

        // Create a reticle
        this.reticle = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.005, 0.01, 15),
            new THREE.MeshBasicMaterial({ color: 0xffffff }).depthTest = false
        );
        this.reticle.position.z = -0.5;
        this.camera.add(this.reticle);
        this.scene.add(this.camera);

        // Apply VR headset action controls to camera.
        var actionControls = new CardboardActions(this.camera);

        // Apply VR headset positional data to camera.
        var controls = new THREE.DeviceOrientationControls(this.camera);

        // Apply VR stereo rendering to renderer.
        var effect = new THREE.VREffect(this.top.renderer);
        effect.setSize(window.innerWidth, window.innerHeight);

        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 0.4);
        this.scene.add( light );

        // Kick off the render loop.
        const scope = this;
        vrDisplay.requestAnimationFrame(animate);

        // Create 3D objects.
        /*var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);

        // Position cube mesh
        cube.position.z = -1;

        // Add cube mesh to your three.js scene
        this.scene.add(cube);*/

        // Load Default Screen
        this.ScreenManager.renderScreen(new WelcomeScreen(this));

        // Request animation frame loop function
        var lastRender = 0;
        function animate(timestamp) {
            var delta = Math.min(timestamp - lastRender, 500);
            lastRender = timestamp;
            
            // Update action controls
            actionControls.update();

            // Update VR headset position and apply to camera.
            controls.update();

            // Render the scene.
            effect.render(scope.scene, scope.camera);

            // Keep looping.
            vrDisplay.requestAnimationFrame(animate);
        }

        function onResize() {
            console.log('Resizing to %s x %s.', window.innerWidth, window.innerHeight);
            effect.setSize(window.innerWidth, window.innerHeight);
            scope.camera.aspect = window.innerWidth / window.innerHeight;
            scope.camera.updateProjectionMatrix();
        }

        function onVRDisplayPresentChange() {
            console.log('onVRDisplayPresentChange');
            onResize();
        }

        // Resize the WebGL canvas when we resize and also when we change modes.
        window.addEventListener('resize', onResize);
        window.addEventListener('vrdisplaypresentchange', onVRDisplayPresentChange);
    };

    renderScreen(screen) {
        this.ScreenManager.renderScreen(screen);
    };
};

export { Scene };