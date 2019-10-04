import * as THREE from 'three';
import Pretzel from './pretzel';
import './scss/main.scss';

const experiments = {
	pretzel: Pretzel
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

const pretzel = new Pretzel();
pretzel.init();
