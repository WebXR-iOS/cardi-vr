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
        this.scene.add(this.camera);

        // Create vr hand
        this.hand = null;
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load("./assets/objects/gear_vr_controller.mtl", function(materials) {
            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load("./assets/objects/gear_vr_controller.obj", function(object) {
                object.position.z = -0.2;
                object.position.y = -0.3;
                object.rotation.x = Math.PI / 7;
                object.scale.set( 2, 2, 2 );

                scope.scene.add(object);
                scope.hand = object;
            });
        });

        // Apply VR headset action controls to camera.
        var actionControls = new CardboardActions(this.camera);

        // Apply VR headset rotational data to camera.
        var controls = new THREE.DeviceOrientationControls(this.camera);

        // Apply VR stereo rendering to renderer.
        var effect = new THREE.VREffect(this.top.renderer);
        effect.setSize(window.innerWidth, window.innerHeight);

        // Kick off the render loop.
        const scope = this;
        vrDisplay.requestAnimationFrame(animate);

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

    launch() {
        this.ScreenManager.renderScreen(new WelcomeScreen(this));
    };

    renderScreen(screen) {
        this.ScreenManager.renderScreen(screen);
    };
};

export { Scene };