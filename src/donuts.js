import * as THREE from 'three';

class Donuts {
	init() {
		document.querySelector('body').classList.add('body--donuts');
		document.querySelector('body').classList.remove('body--march8');

		// Create button
		const button = document.createElement('button');
		button.innerText = 'Create donut';
		button.classList.add('button');
		const main = document.querySelector('.main');
		main.appendChild(button);

		// RENDER
		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true });
		this.renderer.setClearColor('#'+Math.floor(Math.random()*16777215).toString(16));
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		// CAMERA
		this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.set(0, 0, 0);

		// SCENE
		this.scene = new THREE.Scene();

		// LIGHTS
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

		// Generate donut on click
		button.addEventListener('click', () => {
			let color = '#'+Math.floor(Math.random()*16777215).toString(16);
			let posX = Math.floor((Math.random() * 1999) - 999);
			let posY = Math.floor((Math.random() * 1999) - 999);
			let posZ = Math.floor((Math.random() * -2000) - 1000);

			this.add(color, posX, posY, posZ);
		});

		// Create empty donut-array
		this.donuts = [];

		this.render();
	}

	add(color, posX, posY, posZ) {
		var donut = new THREE.TorusGeometry(200, 100, 100, 100);
		const donutMaterial = new THREE.MeshPhysicalMaterial( {
				map: null,
				color: color,
				metalness: 0.0,
				roughness: 0,
				opacity: 1,
				transparent: false,
				envMapIntensity: 5,
				premultipliedAlpha: true,
				clearCoat: 1.0,
				reflectivity: 1
			} );

		var donutMesh = new THREE.Mesh(donut, donutMaterial);
		donutMesh.position.set(posX, posY, posZ);

		// ADD TO SCENE
		this.scene.add(donutMesh);

		// Add donut to donut-array
		this.donuts.push(donutMesh);
	}

	render() {
		for (var i = 0; i < this.donuts.length; i++) {
			this.donuts[i].rotation.x += 0.01;
			this.donuts[i].rotation.y += 0.01;
		}
		this.renderer.render(this.scene, this.camera);


		requestAnimationFrame(() => this.render());
		// setTimeout(() => render(), 4000);
	}
}

export default Donuts;
