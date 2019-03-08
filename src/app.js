import * as THREE from 'three';
import Donuts from './donuts';
import Women from './women';
import './scss/main.scss';

const nav = {
	donut: document.querySelector('.donuts'),
	women: document.querySelector('.march8')
}

nav.donut.addEventListener('click', function() {
	const donuts = new Donuts();
	donuts.init();
});

nav.women.addEventListener('click', function() {
	const women = new Women();
	women.init();
})
