/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";
import { TextBox } from "../../../utils/TextBox.js";

class ControllerAlignScreen extends Screen {
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
        renderGroup.background = new THREE.Color( 0x525252 );
        renderGroup.fog = new THREE.Fog( 0x525252, 200, 1000 );
        //renderGroup.background = new THREE.Color( 0x976dc2 );
        //renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
        const grid = new THREE.GridHelper( 2000, 20, 0x9e9e9e, 0x9e9e9e );
        grid.position.y = -300;
        renderGroup.add( grid );

        // UI
        var mesh = new TextBox("To get started, aim forward and", 0.07, 0.07, 50, 0xffffff);
        mesh.position.z = -1;
        mesh.position.y = 0.23;
        mesh.lookAt( this.root.camera.position );

        renderGroup.add( mesh );

        var mesh = new TextBox("hold home on both controllers", 0.07, 0.07, 50, 0xffffff);
        mesh.position.z = -1;
        mesh.position.y = 0.15;
        mesh.lookAt( this.root.camera.position );

        renderGroup.add( mesh );

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load("./assets/objects/gear_vr_controller.mtl", function(materials) {
            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load("./assets/objects/gear_vr_controller.obj", function(object) {
                object.position.z = -0.8;
                object.position.y = -0.3;
                object.rotation.x = Math.PI / 7;
                object.scale.set( 6, 6, 6 );

                renderGroup.add(object);
            });
        });

        var mesh = new TextBox("Then click the back button", 0.07, 0.07, 50, 0xffffff);
        mesh.position.z = -1;
        mesh.position.y = -0.1;
        mesh.lookAt( this.root.camera.position );

        renderGroup.add( mesh );
    };
};

export { ControllerAlignScreen };