<script>
	import Sidebar from '../lib/Components/Sidebar.svelte';
	import { setDoc, doc, onSnapshot, getFirestore, collection } from 'firebase/firestore';
	import { getApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import Modal from '../lib/Components/Modal.svelte';
	import FormFieldText from '../lib/Components/FormFieldText.svelte';

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let clientsPage = true;

	//The term being searched.
	let searchTerm;

	//The current page.
	let page = 0;

	//The array containing all of the pages of data.
	let pages = [];

	let pagesize = 10;

	let selectedUser = null;

	let clients = [];

	function paginate(input, pagesize) {
		let arr = [];

		for (let start = 0; start < input.length; start += pagesize) {
			arr.push(input.slice(start, start + pagesize));
		}
		return arr;
	}

	let db;

	onMount(async () => {
		await sleep(100);
		db = getFirestore(getApp('PantryBook'));

		//Invoked whenever a client of the organization changes.
		onSnapshot(collection(db, 'orgs/sfp/clients'), async (e) => {
			console.log('snapshot update!');
			clients = [];
			e.docs.forEach((doc) => {
				//Todo: include ID in document and check if the document is the current document, incurring an update.
				clients.push({ ...doc.data(), id: doc.id });
				if (doc.id == selectedUser?.id) {
					selectedUser = { ...doc.data(), id: doc.id };
				}
			});
			pages = paginate(clients, pagesize);
		});
	});

	async function updateClient() {
		const clientRef = doc(db, 'orgs/sfp/clients', selectedUser.id);
		await setDoc(clientRef, selectedUser);
	}
</script>

{#if selectedUser != null}
	<Modal visible={selectedUser != null}>
		<!-- Description list with inline editing -->
		<div class="mt-4 divide-y divide-gray-200">
			<div class="space-y-1">
				<h3 class="text-lg leading-6 font-medium text-gray-900 text-center">
					{selectedUser.name}
				</h3>
			</div>
			<div class="mt-6">
				<dl class="divide-y divide-gray-200">
					<FormFieldText name="Phone" bind:value={selectedUser.phone} on:update={updateClient} />
					<FormFieldText name="Email" bind:value={selectedUser.email} on:update={updateClient} />
					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
						<dt class="text-sm font-medium text-gray-500">Veteran</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">Yes</span>
							<span class="ml-4 flex-shrink-0">
								<button
									type="button"
									class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
								>
									Update
								</button>
							</span>
						</dd>
					</div>
					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
						<dt class="text-sm font-medium text-gray-500">Household Revenue</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">100k/yr</span>
							<span class="ml-4 flex-shrink-0">
								<button
									type="button"
									class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
								>
									Update
								</button>
							</span>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</Modal>
{/if}

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
					<div>
						<div class="sm:hidden">
							<label for="tabs" class="sr-only">Select a tab</label>
							<select
								id="tabs"
								name="tabs"
								class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
							>
								<option>Clients</option>

								<option>Visits</option>
							</select>
						</div>
						<div class="hidden sm:block">
							<div class="border-b border-gray-200">
								<nav class="-mb-px flex space-x-8" aria-label="Tabs">
									<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
									<div
										on:click={() => {
											clientsPage = true;
										}}
										class={clientsPage == true
											? ' cursor-pointer select-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
											: ' cursor-pointer select-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'}
									>
										Clients
									</div>

									<div
										on:click={() => {
											clientsPage = false;
										}}
										class={clientsPage == false
											? '  cursor-pointer select-none  border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
											: '  cursor-pointer select-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'}
									>
										Visits
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
				{#if clientsPage}
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
						<div class="flex flex-col">
							<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
									<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
										<div class="flex">
											<div class="px-8 py-6 mx-4 flex-auto">
												<label for="search" class="block text-sm font-medium text-gray-700"
													>Search</label
												>
												<div class="mt-1 relative rounded-md shadow-sm">
													<div
														class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
													>
														<!-- Heroicon name: solid/mail -->
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																fill-rule="evenodd"
																d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<input
														type="text"
														name="search"
														id="search"
														class="h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
														placeholder="John Doe"
														bind:value={searchTerm}
														on:input={() => {
															let newArr = [];
															for (let x = 0; x < clients.length; x++) {
																if (
																	clients[x].name.toLowerCase().includes(searchTerm.toLowerCase())
																) {
																	newArr.push(clients[x]);
																}
															}
															pages = paginate(newArr, pagesize);
														}}
													/>
												</div>
											</div>
											<button
												type="button"
												class="mr-8 mt-12 h-8 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											>
												Add Client
											</button>
										</div>

										{#if clients.length > 0}
											<table class="min-w-full divide-y divide-gray-200">
												<thead class="bg-gray-50">
													<tr>
														<th
															scope="col"
															class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Name
														</th>
														<th
															scope="col"
															class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Phone Number
														</th>
														<th
															scope="col"
															class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Household Revenue
														</th>
														<th
															scope="col"
															class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															# of Visits
														</th>
														<th scope="col" class="relative px-6 py-3 cursor-pointer select-none">
															<span class="sr-only ">View</span>
														</th>
													</tr>
												</thead>
												<tbody>
													<!-- Odd row -->
													{#each pages[page] as user}
														<tr class="even:bg-white odd:bg-gray-80">
															<td
																class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
															>
																{user.name}
															</td>
															<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.phone}
															</td>
															<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.revenue}
															</td>
															<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.visits}
															</td>
															<td
																class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
															>
																<div
																	class="text-indigo-600 hover:text-indigo-900 cursor-pointer select-none"
																	on:click={() => {
																		selectedUser = user;
																	}}
																>
																	View
																</div>
															</td>
														</tr>
													{/each}

													<!-- More people... -->
												</tbody>
											</table>
											{#if pages.length > 1}
												<nav
													class="bg-white px-4 py-3 flex select-none items-center justify-between border-t border-gray-200 sm:px-6"
													aria-label="Pagination"
												>
													<div class="hidden sm:block">
														<p class="text-sm text-gray-700">
															Showing
															<span class="font-medium">{page * pagesize + 1}</span>
															to
															<span class="font-medium">{page * pagesize + pages[page].length}</span
															>
															of
															<span class="font-medium">{pages.length * pagesize}</span>
															results
														</p>
													</div>
													<div class="flex-1 flex justify-between sm:justify-end">
														<div
															class="relative inline-flex cursor-pointer select-none items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
															on:click={() => {
																if (page > 0) {
																	page--;
																}
															}}
														>
															Previous
														</div>
														<div
															class="ml-3 relative cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
															on:click={() => {
																if (page < pages.length - 1) {
																	page++;
																}
															}}
														>
															Next
														</div>
													</div>
												</nav>
											{/if}
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div class="py-6">
						<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
							<h1 class="text-2xl font-semibold text-gray-900">Visits</h1>
						</div>
						<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
							<!-- Replace with your content -->
							<div class="py-4">
								<div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
							</div>
							<!-- /End replace -->
						</div>
					</div>
				{/if}
			</div>
		</main>
	</div>
</div>
