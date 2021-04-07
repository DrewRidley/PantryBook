<div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8' id='registerPage'>
	<div class='sm:mx-auto sm:w-full sm:max-w-md'>
		<img class='mx-auto h-12 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='Workflow'>
		<h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
			Register your organization
		</h2>
	</div>

	<div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
		<div class='bg-white py-4 px-4 shadow rounded-lg sm:px-10'>
			<div class='pb-6 mt-6'>
				<Step
					label='Organization Registration Steps' ,
					length={4}
					selected={step}
				>
				</Step>
			</div>
			{#if step == 0}
				<form class='space-y-6' action='#' method='POST'>
					<div>
						<label for='orgName' class='block text-sm font-medium text-gray-700'>
							Organization Name
						</label>
						<div class='mt-1'>
							<input id='orgName' name='orgName' type='text' autocomplete='organization' required
										 bind:value={form.name}
										 on:input={() => {
									 		form.errors.name = ''
									 }}
										 class="{form.errors.name != ''
								? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 border-red-500 sm:text-sm'
								: 'focus:ring-indigo-500 focus:border-indigo-500'} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
							>
						</div>
						{#if form.errors.name != ''}
							<p class="mt-2 text-sm text-red-600" id="email-error">
								{form.errors.name}
							</p>
						{/if}
					</div>
					<SelectMenu
						selected={form.size}
						label='Organization Size'
						options={['Very Small (10-50 clients)', 'Small (50-100 clients)', 'Medium (100-250 clients)', 'Large (250+ clients)']}
					>
					</SelectMenu>
					<div>
						<label for='code' class='block text-sm font-medium text-gray-700'>
							Organization Tag (2-6 characters)
						</label>
						<div class='mt-1'>
							<input id='code' name='code' type='text' required
										 bind:value={form.abbreviation}
										 on:input={() => {
									 		form.errors.abbreviation = ''
									 }}
										 class="{form.errors.abbreviation != ''
								? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 border-red-500 sm:text-sm'
								: 'focus:ring-indigo-500 focus:border-indigo-500'} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm">
							{#if form.errors.abbreviation != ''}
								<p class="mt-2 text-sm text-red-600" id="abb-error">
									{form.errors.abbreviation}
								</p>
							{:else}
								<p class='text-sm pt-2'>
									Your organization's URL: <span
									class='underline text-blue-600'>{ typeof (document) == "undefined" || document.location.href.replace('/register', '')}
									/{form.abbreviation}</span>
								</p>
							{/if}
						</div>
					</div>

				</form>
			{/if}
			<div>
				<button type='submit'
								on:click={advance}
								class='w-full flex justify-center py-2 px-4 my-6 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					Continue
				</button>
			</div>
		</div>
	</div>
</div>

<!-- https://nzbin.github.io/three-dots/ use that for a loader!!! -->

<script>
	import SelectMenu from '../lib/SelectMenu.svelte';
	import Step from '../lib/Step.svelte';

	let step = 0;
	let form = {
		name: '',
		size: 0,
		abbreviation: 'abc',

		errors: {
			name: '',
			abbreviation: ''
		}
	};

	function advance() {
		if(validate()) {
				step++;
		}
	}

	function validate() {
		if (step == 0) {
			//The first step, organization name, size and abreviation should be setup.
			if (form.name.length < 4) {
				form.errors.name = 'The organization name cannot be less than 4 characters!'
				return false;
			}
			//TODO: other name validation in the future?
			if(form.abbreviation.length < 2) {
				form.errors.abbreviation = 'The selected prefix must be greater than 2 characters long!'
				return false;
			}
			if(form.abbreviation.length > 6) {
					form.errors.abbreviation = 'The selected prefix must be less than 6 characters!'
					return false;
			}
			if(form.abbreviation == 'abc') {
				form.errors.abbreviation = "The selected prefix 'abc' is unavailable."
				return false;
			}

			return true;
		}
	}

	//Creates an organization.
	async function createOrgAsync() {

	}


	//Registers an owner account using email as the auth provider.
	async function registerEmailAsync() {

	}

	//Registers an account using GitHub as the auth provider.
	async function registerGithubAsync() {

	}

	//Registers the account using github as the auth provider.
	async function registerGoogleAsync() {

	}
</script>

<style>
    #registerPage {
        background-color: #DFDBE5;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%236666ff' fill-opacity='0.33'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

</style>