<script>
  import "../app.css";
  import "@material/typography/mdc-typography.scss";
  import Header from "$lib/components/core/nav/Header.svelte";
</script>

<svelte:head>
  <!-- Material Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <!-- Roboto -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />
  <!-- Roboto Mono -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto+Mono"
  />
  <!-- SMUI Styles -->
  <link rel="stylesheet" href="/smui.css" />
</svelte:head>

<Header />
<slot />
