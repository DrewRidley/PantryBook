<script>
	import Sidebar from '../lib/Components/Sidebar.svelte';

	let data = {
		users: [
			{
				name: 'Jane Cooper',
				email: 'jane@coops.net',
				revenue: '100k/yr',
				visits: 0
			},
			{
				name: 'Cooper Jane',
				email: 'coops@jane.net',
				revenue: '400k/yr',
				visits: 420
			}
		]
	}

</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-gray-100">
	<Sidebar selected={1} />
	<div class="flex flex-col w-0 flex-1 overflow-hidden">
		<div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
			<button
				class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
			>
				<span class="sr-only">Open sidebar</span>
				<!-- Heroicon name: outline/menu -->
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">Clients</h1>
				</div>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
					<div class="flex flex-col">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table class="min-w-full divide-y divide-gray-200">
										<thead class="bg-gray-50">
										<tr>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Email Address
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Household Revenue
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												# of Visits
											</th>
											<th scope="col" class="relative px-6 py-3">
												<span class="sr-only">View</span>
											</th>
										</tr>
										</thead>
										<tbody>
										<!-- Odd row -->
										{#each data.users as user}
										<tr class="even:bg-white odd:bg-gray-80">
											<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{user.name}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{user.email}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{user.revenue}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{user.visits}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
											</td>
										</tr>
										{/each}

										<!-- More people... -->
										</tbody>
									</table>
									<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
										<div class="hidden sm:block">
											<p class="text-sm text-gray-700">
												Showing
												<span class="font-medium">1</span>
												to
												<span class="font-medium">10</span>
												of
												<span class="font-medium">20</span>
												results
											</p>
										</div>
										<div class="flex-1 flex justify-between sm:justify-end">
											<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
												Previous
											</a>
											<a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
												Next
											</a>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>

