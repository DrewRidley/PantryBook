<script lang="ts">
  import { connected } from "$lib/stores";
</script>

{#if $connected}
  Dashboard
{:else}
  Landing
{/if}
