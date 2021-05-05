<script>
	//the label of the stepper.
	export let label;
	//The total number of steps this stepper has.
	export let length = 2;
	//The current step that is selected.
	export let selected = 0;
</script>

<nav class="flex items-center justify-center" aria-label={label}>
	<p class="text-sm font-medium">
		Step {selected + 1} of {length}
	</p>

	<ol class="ml-8 flex items-center space-x-5">
		{#each Array(selected) as _, i}
			<li>
				<!-- Completed Step -->
				<div class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
					<span class="sr-only">Step {i}</span>
				</div>
			</li>
		{/each}

		<li>
			<!-- Current Step -->
			<div class="relative flex items-center justify-center" aria-current="step">
				<span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
					<span class="w-full h-full rounded-full bg-indigo-200" />
				</span>
				<span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
				<span class="sr-only">Step {selected}</span>
			</div>
		</li>
		{#if length - (selected + 1) > 0}
			{#each Array(length - (selected + 1)) as _, i}
				<li>
					<!-- Upcoming Step -->
					<div href="#" class="block w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400">
						<span class="sr-only">Step {selected + i}</span>
					</div>
				</li>
			{/each}
		{/if}
	</ol>
</nav>
