const preprocess = require('svelte-preprocess');
/** @type {import('@sveltejs/kit').Config} */

const vercel = require('@sveltejs/adapter-vercel');
//const firebase = require('svelte-adapter-firebase');

module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};
