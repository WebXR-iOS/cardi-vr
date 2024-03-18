/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Scene } from "./scene.js";

class Render {
    constructor(top) {
        this.top = top;
        this.render();
    };

    render() {
        // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
        // Only enable it if you actually need to.
        var renderer = new THREE.WebGLRenderer({antialias: false});
        renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

        // Append the canvas element created by the renderer to document body element.
        document.body.appendChild(renderer.domElement);

        this.vrDisplay = this.top.vrDisplay;

        this.scene = new Scene(this);
    };
};

export { Render };