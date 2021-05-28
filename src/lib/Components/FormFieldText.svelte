<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let name;
	export let value;

	let update = false;
</script>

<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
	<dt class="text-sm font-medium text-gray-500">
		{name}
	</dt>
	<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
		{#if !update}
			<span class="flex-grow ">{value}</span>
		{:else}
			<div>
				<label for="email" class="sr-only">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					bind:value
					class="w-52 h-9 px-1 py-1 my-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
					placeholder={value}
				/>
			</div>
		{/if}
		<span class="ml-4 flex-shrink-0">
			{#if update}
				<button
					type="button"
					class="mt-2.5 bg-white rounded-md mr-6 font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
					on:click={() => {
						update = false;
					}}
				>
					Cancel
				</button>
			{/if}
			<button
				type="button"
				class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
				on:click={() => {
					if (update == false) {
						update = true;
					} else {
						dispatch('update', { value });
						update = false;
					}
				}}
			>
				{#if update}
					Save
				{:else}
					Update
				{/if}
			</button>
		</span>
	</dd>
</div>
