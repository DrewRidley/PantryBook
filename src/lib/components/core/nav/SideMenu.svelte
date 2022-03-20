<script lang="ts">
  import List, { Item, Graphic, Text } from "@smui/list";
  import { goto } from "$app/navigation";
  import { connected } from "$lib/stores";
</script>

<div class="flex flex-col justify-between">
  <List>
    <Item
      on:SMUI:action={() => {
        goto("/");
      }}
    >
      <Graphic class="material-icons">home</Graphic>
      <Text>Home</Text>
    </Item>
    <Item
      on:SMUI:action={() => {
        goto("/clients");
      }}
    >
      <Graphic class="material-icons">person</Graphic>
      <Text>Clients</Text>
    </Item>
    <Item
      on:SMUI:action={() => {
        goto("/inventory");
      }}
    >
      <Graphic class="material-icons">inventory</Graphic>
      <Text>Inventory</Text>
    </Item>
    <Item
      on:SMUI:action={() => {
        goto("/visits");
      }}
    >
      <Graphic class="material-icons">shopping_cart</Graphic>
      <Text>Visits</Text>
    </Item>
  </List>
  <Item
    on:SMUI:action={() => {
      connected.set(false);
    }}
  >
    <Graphic class="material-icons">power_settings_new</Graphic>
    <Text>Sign out</Text>
  </Item>
</div>
