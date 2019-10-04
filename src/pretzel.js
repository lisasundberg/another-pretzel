import * as THREE from 'three';

class Pretzel {
	init() {
		const body = document.querySelector('body');

		const bg = document.createElement('div');
		bg.classList.add('pretzel__bg');
		body.appendChild(bg);

		let i;
		for (i = 0; i < 168; i++) {
			const square = document.createElement('div');
			square.classList.add('square');
			bg.appendChild(square);
		}


		// RENDER
		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true, alpha: true });
		this.renderer.setClearColor( 0x000000, 0 );
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		//CAMERA
		this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.set(0, 0, 1000);

		//SCENE
		this.scene = new THREE.Scene();

		//LIGHTS
		const light = new THREE.AmbientLight(0xffffff, 0.5);
		this.scene.add(light);

		const light2 = new THREE.DirectionalLight(0xffffff, .5);
		light2.position.set(-250, 500, 150);
		this.scene.add(light2);

		const light3 = new THREE.PointLight(0xffffff, .5);
		light3.position.set(-250, -150, 50);
		this.scene.add(light3);

		this.add();
		this.render();
	}

	add() {
		// GEOMETRIES
		const pretzelGeometry = new THREE.TorusKnotGeometry( 100, 30, 1000, 160 );
		const saltGeometry = new THREE.SphereGeometry( 3, 3, 3 );

		// MATERIALS
		const pretzelMaterial = new THREE.MeshPhongMaterial( {
			color: 0xa14928
		} );
		const saltMaterial = new THREE.MeshPhongMaterial( {
			color: 0xffffff
		} );

		// ELEMENTS
		const pretzel = new THREE.Mesh( pretzelGeometry, pretzelMaterial );
		pretzel.position.set( 0, 0, 0 );

		const grains = [
			{
				x: 100,
				y: 100,
				z: 68
			},
			{
				x: 100,
				y: 46,
				z: 50
			},
			{
				x: 30,
				y: 0,
				z: 35
			},
			{
				x: 0,
				y: 160,
				z: -10
			},
			{
				x: -40,
				y: 40,
				z: 30
			},
			{
				x: -60,
				y: 40,
				z: 4
			},
			{
				x: -86,
				y: 54,
				z: 40
			},
			{
				x: 0,
				y: 72,
				z: 0
			},
			{
				x: 10,
				y: 72,
				z: 0
			},
			{
				x: 10,
				y: 100,
				z: 25
			},
			{
				x: 10,
				y: 100,
				z: 25
			},
			{
				x: 10,
				y: 162,
				z: -50
			},
			{
				x: 20,
				y: 158,
				z: -50
			},
			{
				x: 50,
				y: 140,
				z: -50
			},
			{
				x: 50,
				y: 135,
				z: -60
			},
			{
				x: 50,
				y: -115,
				z: -60
			},
			{
				x: 50,
				y: -58,
				z: -60
			},
			{
				x: 60,
				y: -58,
				z: -60
			},
			{
				x: 80,
				y: -58,
				z: -60
			},
			{
				x: 80,
				y: -58,
				z: -65
			}
		];

		const salt = [];

		grains.forEach((grain, i) => {
			salt[i] = new THREE.Mesh(saltGeometry, saltMaterial);
			salt[i].position.set( grain.x, grain.y, grain.z );
		});


		this.group = new THREE.Group();

		this.group.add(pretzel);

		salt.map((s) => this.group.add(s));

		this.scene.add( this.group );
	}

	render() {
		this.group.rotation.y += 0.01;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
	}

	destroy() {
		document.querySelector('body').classList.remove('body--pretzel');
	}
}

export default Pretzel;
