import * as THREE from 'three';
import Donuts from './donuts';
import March8 from './march8';
import './scss/main.scss';

const nav = {
	donut: document.querySelector('.donuts'),
	march8: document.querySelector('.march8')
}

nav.donut.addEventListener('click', function() {
	const donuts = new Donuts();
	donuts.init();
});

nav.march8.addEventListener('click', function() {
	const march8 = new March8();
	march8.init();
})
