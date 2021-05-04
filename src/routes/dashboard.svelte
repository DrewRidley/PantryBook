<script>
	import { auth } from '$lib/fb.js';
	import { onAuthStateChanged } from 'firebase/auth';

	//The user being updated by the state change.
	let user;
	onAuthStateChanged(auth, async (u) => {
		user = u;
		console.log('Running on server!');
	});
</script>

<pre>
		{JSON.stringify(user, null, '\t')}
</pre>
