<script>
	import { auth } from '$lib/fb.js';
	import { onAuthStateChanged } from 'firebase/auth';

	//Svelte imports.
	import { onMount } from "svelte";
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	//A local instance variable used for the query parameter redirect.
	let orgName;

	onAuthStateChanged(auth, async (user) => {
		if(user != undefined) {
			await goto('/dashboard');
		}
	})

	onMount(async () => {
		if (browser) {
			console.log(auth);
			//If we are running on the browser,
			if (auth.currentUser != undefined) {
				await goto('/dashboard');
			}
		}
	})
</script>

<body>
<!-- Begin Navbar. -->
<div class="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-gray-200">
	<div class="relative flex items-center justify-between max-w-6xl mx-auto">
		<div class="flex items-center">
			<a
				href="/"
				aria-label="Company"
				title="Company"
				class="inline-flex items-center mr-8"
			>
				<svg
					viewBox="0 0 24 24"
					stroke-linejoin="round"
					stroke-width="2"
					stroke-linecap="round"
					stroke-miterlimit="10"
					stroke="currentColor"
					fill="none"
					class="w-8 text-gray-900"
				>
					<rect x="3" y="1" width="7" height="12" />
					<rect x="3" y="17" width="7" height="6" />
					<rect x="14" y="1" width="7" height="6" />
					<rect x="14" y="11" width="7" height="12" />
				</svg>
				<span
					class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
				/>
			</a>
			<ul class="flex items-center hidden space-x-8 lg:flex">
				<li>
					<a
						href="/pricing"
						aria-label="Product pricing"
						title="Our pricing"
						class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
					>Pricing</a
					>
				</li>
				<li>
					<a
						href="/tos"
						aria-label="Our terms of conditions"
						title="Our terms of conditions"
						class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
					>Terms of Service</a
					>
				</li>
				<li>
					<a
						href="/faq"
						aria-label="FAQs"
						title="Frequently asked questions"
						class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
					>FAQs</a
					>
				</li>
				<li>
					<a
						href="/contact"
						aria-label="Contact us"
						title="Contact us"
						class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
					>Contact Us</a
					>
				</li>
			</ul>
		</div>
		<div>
			<button
				type="button"
				on:click={async () => {
						await goto('/register');
					}}
				href="/register"
				class="flex inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Register
			</button>
			<button
				type="button"
				on:click={async () => {
						await goto('/login');
					}}
				href="/login"
				class="flex inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Login
			</button>
		</div>
		<div class="lg:hidden">
			<button
				aria-label="Open Menu"
				title="Open Menu"
				class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
			>
				<svg viewBox="0 0 24 24" class="w-5 text-gray-600">
					<path
						fill="currentColor"
						d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
					/>
					<path
						fill="currentColor"
						d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
					/>
					<path
						fill="currentColor"
						d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
<!-- End Navbar. -->

<!-- Begin Hero. -->
<div class="relative bg-gray-200 w-full">
	<div class="absolute inset-x-0 bottom-0">
		<svg
			viewBox="0 0 224 12"
			fill="currentColor"
			preserveAspectRatio="none"
			class="w-full -mb-1 text-white"
		>
			<path
				d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
			/>
		</svg>
	</div>
	<div
		class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
	>
		<div
			class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center"
		>
			<h2
				class="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
			>
				You won't believe how easy pantry management can be.
			</h2>
			<p class="mb-6 text-base text-gray-700 md:text-lg">
				Get PantryBook today for free and see a management revolution unfold
				before your eyes
			</p>
			<form
				class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
			>
				<input
					placeholder="Organization Name"
					required="required"
					type="text"
					bind:value={orgName}
					class="flex-grow w-full h-12 px-4 mb-3 text-gray-700 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
				/>
				<div
					on:click={() => {
							if(orgName != undefined) {
															goto('/register?org=' + encodeURI(orgName));
							}
							else {
								goto('/register?org=');
							}
						}}
					class="cursor-pointer flex flex-grow w-full items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-gray-700 bg-indigo-500 hover:indigo-500 focus:shadow-outline focus:outline-none"
				>
					Register today
				</div>
			</form>
		</div>
	</div>
</div>
<!-- End Hero. -->

<!-- Begin Main Feature. -->
<div class="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
	<div
		class="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto max-w-6xl mx-auto"
	>
		<a class="text-blue-600 underline mb-4 mr-8" href="/">
			<div
				class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100"
			>
				<svg
					stroke="currentColor"
					viewBox="0 0 52 52"
					class="w-12 h-12 text-indigo-500"
				>
					<polygon
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						points="29 13 14 29 25 29 23 39 38 23 27 23"
					/>
				</svg>
			</div>
		</a>
		<div>
			<h2
				class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
			>
				Stop Navigating Confusing Menus
			</h2>
			<p class="text-base text-gray-700 md:text-lg">
				PantryBook is the pantry software that takes care of everything, so
				you don’t have to. We handle the complexity and provide you with the
				information you need in a quick, intuitive interface.
			</p>
		</div>
	</div>
</div>
<!-- End Main Feature. -->

<!-- Begin Sublet features -->

<div class="px-4 py-16 bg-white mx-auto w-full md:px-24 lg:px-8 lg:py-20">
	<div class="flex flex-col max-w-4xl mx-auto lg:flex-row">
		<div class="max-w-md pr-16 mx-auto mb-10">
			<h5 class="mb-6 text-3xl font-extrabold leading-none text-gray-900">
				Pantry Management Done Right.
			</h5>
			<p class="mb-6 text-gray-900">
				With a free plan, 24/7 availability, first class mobile support and an
				intuitive interface, PantryBook is the one-stop-shop for all of your
				pantry management needs.
			</p>
		</div>
		<div class="grid gap-5 row-gap-5 sm:grid-cols-2">
			<div class="max-w-xl">
				<div
					class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100"
				>
					<svg
						stroke="currentColor"
						viewBox="0 0 52 52"
						class="w-12 h-12 text-indigo-500"
					>
						<polygon
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
							points="29 13 14 29 25 29 23 39 38 23 27 23"
						/>
					</svg>
				</div>
				<h6 class="mb-2 font-semibold leading-5 text-gray-900">
					Realtime collaboration
				</h6>
				<p class="text-sm text-gray-700">
					Utilizing our realtime backend, PantryBook allows numerous users to
					enter and edit data simultaneously without complication.
				</p>
			</div>
			<div class="max-w-md">
				<div
					class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100"
				>
					<svg
						stroke="currentColor"
						viewBox="0 0 52 52"
						class="w-12 h-12 text-indigo-500"
					>
						<polygon
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
							points="29 13 14 29 25 29 23 39 38 23 27 23"
						/>
					</svg>
				</div>
				<h6 class="mb-2 font-semibold leading-5 text-gray-900">
					Effortless Reports.
				</h6>
				<p class="text-sm text-gray-700">
					You'll never find yourself on a confusing export menu to simply
					generate reports. Easily generate pdf or excel documents with only
					the data you need.
				</p>
			</div>
		</div>
	</div>
</div>
<!-- End sublet features -->

<!-- Begin footer -->
<div
	class="bg-gray-100 px-4 pt-16 mx-auto w-full border-opacity-10 md:px-24 lg:px-8"
>
	<div
		class="max-w-6xl mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"
	>
		<div class="sm:col-span-2">
			<a
				href="/"
				aria-label="Go home"
				title="Company"
				class="inline-flex items-center"
			>
				<svg
					viewBox="0 0 24 24"
					stroke-linejoin="round"
					stroke-width="2"
					stroke-linecap="round"
					stroke-miterlimit="10"
					stroke="currentColor"
					fill="none`"
					class="w-8 text-indigo-500"
				>
					<rect x="3" y="1" width="7" height="12" />
					<rect x="3" y="17" width="7" height="6" />
					<rect x="14" y="1" width="7" height="6" />
					<rect x="14" y="11" width="7" height="12" />
				</svg>
				<span
					class="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase"
				>Company</span
				>
			</a>
			<div class="mt-6 lg:max-w-sm">
				<p class="text-sm text-gray-900">
					PantryBook is a free, open sourced management software for food
					pantries. It offers first-class mobile support and detailed
					overviews to easily generate reports, view finances and keep track
					of your visitors.
				</p>
			</div>
		</div>
		<div class="space-y-2 text-sm">
			<p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
			<div class="flex">
				<p class="mr-1 text-gray-900">Phone:</p>
				<a
					href="tel:339-214-8981"
					aria-label="Our phone"
					title="Our phone"
					class="transition-colors duration-300 text-indigo-500 hover:text-deep-purple-800"
				>850-123-5021</a
				>
			</div>
			<div class="flex">
				<p class="mr-1 text-gray-900">Email:</p>
				<a
					href="mailto:info@lorem.mail"
					aria-label="Our email"
					title="Our email"
					class="transition-colors duration-300 text-indigo-500 hover:text-deep-purple-800"
				>info@pantrybook.org</a
				>
			</div>
			<div class="flex">
				<p class="mr-1 text-gray-900">Github:</p>
				<a
					href="https://github.com/DrewRidley/PantryBook"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Our repository"
					title="Our repository"
					class="transition-colors duration-300 text-indigo-500 hover:text-deep-purple-800"
				>
					PantryBook
				</a>
			</div>
		</div>
	</div>
	<div
		class="max-w-6xl mx-auto flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"
	>
		<p class="text-sm text-gray-700">
			© Copyright 2021 PantryBook. All rights reserved.
		</p>
		<ul
			class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
		>
			<li>
				<a
					href="/"
					class="text-sm text-gray-700 transition-colors duration-300 hover:text-indigo-500"
				>F.A.Q</a
				>
			</li>
			<li>
				<a
					href="/"
					class="text-sm text-gray-700 transition-colors duration-300 hover:text-indigo-500"
				>Privacy Policy</a
				>
			</li>
			<li>
				<a
					href="/"
					class="text-sm text-gray-700 transition-colors duration-300 hover:text-indigo-500"
				>Terms &amp; Conditions</a
				>
			</li>
		</ul>
	</div>
</div>
</body>
