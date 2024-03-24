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
        /*const container = new ThreeMeshUI.Block({
            width: 1.2,
            height: 0.7,
            padding: 0.2,
            fontFamily: './assets/fonts/Roboto-msdf.json',
            fontTexture: './assets/fonts/Roboto-msdf.png',
        });
           
        const text = new ThreeMeshUI.Text({
            content: "Some text to be displayed"
        });
           
        container.add( text );

        container.position.z = -1;

        renderGroup.add( container );*/

        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 0.4);
        renderGroup.add( light );

        // Fade effect
        renderGroup.background = new THREE.Color( 0x976dc2 );
		renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
        const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		renderGroup.add( mesh );

		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
		grid.material.opacity = 0.2;
		grid.material.transparent = true;
		renderGroup.add( grid );

        // UI
        var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);

        // Position cube mesh
        cube.position.z = -1;

        // Add cube mesh to your three.js scene
        renderGroup.add(cube);
    };
};

export { ActionsInfoScreen };