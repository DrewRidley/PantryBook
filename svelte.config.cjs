/** @type {import('@sveltejs/kit').Config} */
const vercel = require('@sveltejs/adapter-vercel');

module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};
