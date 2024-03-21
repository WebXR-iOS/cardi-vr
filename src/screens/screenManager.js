/**
 * @author crazyh / https://github.com/crazyh2
 */

class ScreenManager {
    constructor(root) {
        this.root = root;
    };

    renderScreen(screenGroup) {
        this.root.scene.background = new THREE.Color(0x000000);

        screenGroup.render(screenGroup.renderGroup);

        this.root.scene.remove(screenGroup.renderGroup);

        this.screenGroup = screenGroup;

        this.root.scene.add(screenGroup.renderGroup);
    };
};

export { ScreenManager };