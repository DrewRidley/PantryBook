<script>
	export let visible = true;
</script>

{#if visible}
	<div
		class="fixed z-10 inset-0 overflow-y-auto"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<!--
				Background overlay, show/hide based on modal state.
			-->
			<div
				class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
				aria-hidden="true"
				id="modalBackground"
				on:click={() => {
					visible = false;
				}}
			/>

			<!-- This element is to trick the browser into centering the modal contents. -->

			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
				>&#8203;</span
			>

			<!--
				Modal panel, show/hide based on modal state.
			-->
			<div
				id="modal"
				class="inline-block align-bottom bg-white rounded-lg  px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-auto sm:p-6"
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
