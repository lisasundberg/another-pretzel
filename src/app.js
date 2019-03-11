import * as THREE from 'three';
import Donuts from './donuts';
import March8 from './march8';
import Popcorn from './popcorn';
import './scss/main.scss';

const experiments = {
	donuts: Donuts,
	march8: March8,
	popcorn: Popcorn
}

// Get the nav items
const nav = document.querySelectorAll('.nav__item');

// Add event listeners
nav.forEach((navItem) => {
	navItem.addEventListener('click', function() {
		navigate(event.target.id);
	});
});

function navigate(target) {
	const instanceName = capitalize(target);
	console.log(instanceName);

	const instance = new experiments[target];
	instance.init();
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Get the nav items
// const nav = {
// 	donut: document.querySelector('#donuts'),
// 	march8: document.querySelector('#march8'),
// 	popcorn: document.querySelector('#popcorn')
// }
//
// nav.donut.addEventListener('click', function() {
// 	const donuts = new Donuts();
// 	donuts.init();
// });
//
// nav.march8.addEventListener('click', function() {
// 	const march8 = new March8();
// 	march8.init();
// });
//
// nav.popcorn.addEventListener('click', function() {
// 	const popcorn = new Popcorn();
// 	popcorn.init();
// });

const popcorn = new Popcorn();
popcorn.init();
