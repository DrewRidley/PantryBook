<script>
	import Modal from '../lib/Components/Modal.svelte';
	import FormFieldText from '../lib/Components/FormFieldText.svelte';
	import FormFieldSelect from '../lib/Components/FormFieldSelect.svelte';
</script>

<Modal visible={true}>
	<div class="mt-4 divide-y divide-gray-200">
		<div class="space-y-1">
			<h3 class="text-lg leading-6 font-medium text-gray-900 text-center">Hi</h3>
		</div>
	</div>
	<div class="mt-6">
		<dl class="divide-y divide-gray-200">
			<FormFieldText name="Email" />
			<FormFieldText name="Phone" />
			<FormFieldSelect name="Veteran" options={['Yes', 'No']} />
			<FormFieldText name="Household Revenue" />
		</dl>
	</div>
</Modal>
