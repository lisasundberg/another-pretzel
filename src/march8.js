import * as THREE from 'three';

class March8 {
	init() {
		document.querySelector('body').classList.add('body--march8');
		document.querySelector('body').classList.remove('body--donuts');

		// RENDER
		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true });
		this.renderer.setClearColor('#'+Math.floor(Math.random()*16777215).toString(16));
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		//CAMERA
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10000);
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

		var light4 = new THREE.PointLight(0xffffff, 1);
		light4.position.set(1000, 1000, 100);
		this.scene.add(light4);

		let color = '#'+Math.floor(Math.random()*16777215).toString(16);

		this.add(color);
		this.render();
	}

	add(color) {
		const material = new THREE.MeshPhysicalMaterial( {
			map: null,
			color: color,
			roughness: 0,
			opacity: 1.0,
			envMapIntensity: 5,
			premultipliedAlpha: true,
			clearCoat: 1.0,
			reflectivity: 1.0
		} );

		var ring = new THREE.TorusGeometry(200, 100, 100, 100);

		this.ringMesh = new THREE.Mesh(ring, material);
		this.ringMesh.position.set(0, 200, -1000);

		//Cylinders
		var cylinder = new THREE.CylinderGeometry(100, 100, 420, 100);
		this.cylinderMesh = new THREE.Mesh(cylinder, material);
		this.cylinderMesh.position.set(0, -200, -1000);

		var cylinder2 = new THREE.CylinderGeometry(100, 100, 400, 100);
		this.cylinder2Mesh = new THREE.Mesh(cylinder2, material);
		this.cylinder2Mesh.rotation.x = Math.PI / 2;
		this.cylinder2Mesh.rotation.z = Math.PI / 2;
		this.cylinder2Mesh.position.set(0, -220, -1000);

		this.scene.add(this.cylinderMesh, this.cylinder2Mesh, this.ringMesh);
	}

	render() {
		this.ringMesh.rotation.y += 0.01;
		this.cylinderMesh.rotation.y += 0.01;
		this.cylinder2Mesh.rotation.z -= 0.01;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
	}
}

export default March8;
