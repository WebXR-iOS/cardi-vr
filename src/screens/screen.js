/**
 * @author crazyh / https://github.com/crazyh2
 */

import * as THREE from "../libraries/three.module.min.js";

class Screen {
    constructor(root) {
        this.root = root;
        this.renderGroup = new THREE.Scene();
    };

    render(renderGroup) {

    };

    renderScreen(screen) {
        this.root.renderScreen(screen);
    };

    getRender(root) {
        return this.renderGroup;
    };
};

export { Screen };