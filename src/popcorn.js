import * as THREE from 'three';

class Popcorn {
	init() {
		document.querySelector('body').classList.add('body--popcorn');

		// RENDER
		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true });
		this.renderer.setClearColor(0x222222);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		//CAMERA
		this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.set(0, 0, 1000);

		//SCENE
		this.scene = new THREE.Scene();

		//LIGHTS
		var light = new THREE.AmbientLight(0xffffff, 0.5);
		this.scene.add(light);

		var light2 = new THREE.DirectionalLight(0xffffff, .5);
		light2.position.set(-250, 500, 150);
		this.scene.add(light2);

		var light3 = new THREE.PointLight(0xffffff, .5);
		light3.position.set(-250, -150, 50);
		this.scene.add(light3);

		this.add();
		this.render();
	}

	add() {
		const geometry = new THREE.SphereGeometry( 20, 20, 20 );
		const geometry2 = new THREE.SphereGeometry( 50, 50, 50 );

		const material = new THREE.MeshPhongMaterial( {
			color: 0xffffff
		} );

		const sphere1 = new THREE.Mesh( geometry, material );
		sphere1.position.set( 100, 100, 0 );

		const sphere2 = new THREE.Mesh( geometry, material );
		sphere2.position.set( 100, 40, 50 );

		const sphere3 = new THREE.Mesh( geometry2, material );
		sphere3.position.set( 0, 0, 0 );

		const sphere4 = new THREE.Mesh( geometry, material );
		sphere4.position.set( 0, -0, -100 );

		const sphere5 = new THREE.Mesh( geometry, material );
		sphere5.position.set( -40, 40, 40 );

		//create a group and add the two cubes
		//These cubes can now be rotated / scaled etc as a group
		this.group = new THREE.Group();
		this.group.add( sphere1 );
		this.group.add( sphere2 );
		this.group.add( sphere3 );
		this.group.add( sphere4 );
		this.group.add( sphere5 );

		this.scene.add( this.group );
	}

	render() {
		this.group.rotation.y += 0.02;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
	}

	destroy() {
		document.querySelector('body').classList.remove('body--popcorn');
	}
}

export default Popcorn;
