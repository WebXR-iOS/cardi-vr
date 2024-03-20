/**
 * @author crazyh / https://github.com/crazyh2
 */

class Screen {
    constructor(root) {
        this.root = root;
        this.renderGroup = new THREE.Group();
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