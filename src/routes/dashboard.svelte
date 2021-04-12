This is an example dashboard that should include the authenticated users details.

<script>
    import { onMount } from 'svelte'
    import { browser } from '$app/env';

    let firebase;
    let db;

    onMount(async () => {
        if (browser) {
            //For some reason vite gets confused with onMount and still tries to externalize libraries dynamically imported inside here.
            firebase = (await import("../lib/fb.js")).default;
            db = firebase.firestore();
        }
    })
</script>