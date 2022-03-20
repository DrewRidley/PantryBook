<script lang="ts">
  import Button, { Label } from "@smui/button";

  let connected = true;
</script>

{#if connected}Home{:else}Landing{/if}
