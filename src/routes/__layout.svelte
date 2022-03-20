<script>
  import "../app.css";
  import "@material/typography/mdc-typography.scss";

  import Header from "$lib/components/core/nav/Header.svelte";
  import { connected } from "$lib/stores";
  import SideMenu from "$lib/components/core/nav/SideMenu.svelte";
</script>

<div class="flex flex-col h-screen">
  <Header />
  <div class="flex flex-1">
    {#if $connected}
      <SideMenu />
    {/if}

    <slot />
  </div>
</div>
