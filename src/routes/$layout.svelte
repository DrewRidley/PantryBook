<script>
	import '../app.postcss';
	import { getApps, initializeApp } from 'firebase/app';
	import { getAuth } from 'firebase/auth';

	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	onMount(async () => {
		if (browser) {
			if (getApps().length == 0) {
				let app = initializeApp({
					apiKey: 'AIzaSyB-wUG4UrAaC6gorqB_DZ4FOpYqHcuI8J0',
					authDomain: 'pantrybook.firebaseapp.com',
					projectId: 'pantrybook',
					storageBucket: 'pantrybook.appspot.com',
					messagingSenderId: '470048751220',
					appId: '1:470048751220:web:936d8d290a7807faf71b21'
				});

				let auth = getAuth(app);
				let cookies = await import('js-cookie');

				auth.onAuthStateChanged((user) => {
					if (user != null) {
						cookies.set('auth', true, { expires: 90 });
					}
				});
			}
		}
	});
</script>

<svelte:head>
	<title>PantryBook</title>
	<meta name="description" content="Fast, intuitive pantry management solutions" />
</svelte:head>

<main>
	<slot />
</main>
