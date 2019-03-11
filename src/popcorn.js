import * as THREE from 'three';

class Popcorn {
	init() {
		document.querySelector('body').classList.add('body--popcorn');

		// RENDER
		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true });
		this.renderer.setClearColor('#'+Math.floor(Math.random()*16777215).toString(16));
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		//CAMERA
		this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.set(0, 0, 0);

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

		let color = '#'+Math.floor(Math.random()*16777215).toString(16);

		this.add();
		this.render();
	}

	add() {
		const material = new THREE.MeshPhysicalMaterial({
			map: null,
			color: 0xffffff,
			roughness: 0,
			premultipliedAlpha: true,
			clearCoat: 1.0,
			reflectivity: 1.0,
			wireframe: true
		});

		var sphere = new THREE.SphereGeometry(70, 10, 10);

		this.ringMesh = new THREE.Mesh(sphere, material);
		this.ringMesh.position.set(0, 0, -1000);

		//Cylinders
		this.scene.add(this.ringMesh);
	}

	render() {
		this.ringMesh.rotation.y += 0.01;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
	}

	destroy() {
		document.querySelector('body').classList.remove('body--popcorn');
	}
}

export default Popcorn;
