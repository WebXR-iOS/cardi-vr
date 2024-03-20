/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Scene } from "./scene.js";
import { ScreenManager } from "./../screens/screenManager.js";

class Render {
    constructor(top) {
        this.top = top;
        this.render();

        this.ScreenManager = new ScreenManager(this);
    };

    render() {
        // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
        // Only enable it if you actually need to.
        this.renderer = new THREE.WebGLRenderer({antialias: false});
        this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

        // Append the canvas element created by the renderer to document body element.
        document.body.appendChild(this.renderer.domElement);

        this.vrDisplay = this.top.vrDisplay;

        this.scene = new Scene(this);
    };

    launch() {
        this.vrDisplay.requestPresent([{source: this.renderer.domElement}]);
    };
};

export { Render };