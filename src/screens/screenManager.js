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

        if(this.screenGroup) this.root.scene.remove(this.screenGroup.renderGroup);

        this.screenGroup = screenGroup;

        this.root.scene.add(this.screenGroup.renderGroup);
    };
};

export { ScreenManager };