<script>
	import Sidebar from '../lib/Components/Sidebar.svelte';
</script><!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-gray-100">
	<Sidebar selected={2}/>
	<div class="flex flex-col w-0 flex-1 overflow-hidden">
		<div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
			<button class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
				<span class="sr-only">Open sidebar</span>
				<!-- Heroicon name: outline/menu -->
				<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
		<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">Finances</h1>
				</div>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<!-- Replace with your content -->
					<div class="py-4">
						<div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
					</div>
					<!-- /End replace -->
				</div>
			</div>
		</main>
	</div>
</div>