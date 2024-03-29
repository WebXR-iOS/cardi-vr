/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";
import { TextBox } from "../../../utils/TextBox.js";
import { ActionsInfoScreen } from "./actionsInfo.js";

class WelcomeScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set( 0, 1, 0 ); //default; light shining from top
        light.castShadow = true; // default false
        renderGroup.add( light );

        // Fade effect
        renderGroup.background = new THREE.Color( 0x976dc2 );
		renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.position.y = -300;
		renderGroup.add( grid );

        // UI
        var plan = new THREE.PlaneGeometry( 15 , 4 );
        var onglets = new THREE.Group();

        var map = new THREE.TextureLoader().load( "./assets/logos/images/full_logo.png" );
        var material = new THREE.SpriteMaterial( { map: map, color: 0x000000 } );

        var logo = new THREE.Mesh( plan , material );
        logo.position.z = -1;
        logo.position.y = 0.03;
        logo.lookAt( this.root.camera.position );
        renderGroup.add(logo);

        setTimeout(() => {
            this.renderScreen(new ActionsInfoScreen(this.root));
        }, 8000);
    };
};

export { WelcomeScreen };