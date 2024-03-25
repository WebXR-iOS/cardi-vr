/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";

class ActionsInfoScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 0.4);
        renderGroup.add( light );

        // Fade effect
        renderGroup.background = new THREE.Color( 0x976dc2 );
		renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
        /*const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
		mesh.rotation.x = - Math.PI / 2;
        mesh.position.y = -2;
		mesh.receiveShadow = true;
		renderGroup.add( mesh );*/

		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.position.y = -300;
		renderGroup.add( grid );

        // UI
        const container = new ThreeMeshUI.Block({
            width: 1.2,
            height: 0.7,
            padding: 0.2,
            justifyContent: "center",
            textAlign: "center",
            fontFamily: './assets/fonts/Roboto-msdf.json',
            fontTexture: './assets/fonts/Roboto-msdf.png',
        });
           
        const text = new ThreeMeshUI.Text({
            content: "Some text to be displayed",
            fontSize: 0.125
        });
           
        container.add( text );

        container.position.z = -1;

        renderGroup.add( container );
    };
};

export { ActionsInfoScreen };