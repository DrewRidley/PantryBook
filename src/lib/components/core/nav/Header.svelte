<script lang="ts">
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import type { MenuComponentDev } from "@smui/menu";
  import Menu from "@smui/menu";
  import List, { Item, Separator, Text } from "@smui/list";
  import { connected } from "$lib/stores";
  import { goto } from "$app/navigation";

  let menu: MenuComponentDev;
</script>

<TopAppBar variant="static">
  <Row>
    <Section>
      <Title
        class="cursor-pointer"
        on:click={() => {
          goto("/");
        }}>Food Pantry</Title
      >
    </Section>
    <Section align="end" toolbar>
      {#if $connected}
        <div>
          <Button on:click={() => menu.setOpen(true)}>
            <Label>Open Menu</Label>
          </Button>
          <Menu bind:this={menu}>
            <List>
              <Item on:SMUI:action={() => {}}>
                <Text>Cut</Text>
              </Item>
              <Item on:SMUI:action={() => {}}>
                <Text>Copy</Text>
              </Item>
              <Item on:SMUI:action={() => {}}>
                <Text>Paste</Text>
              </Item>
              <Separator />
              <Item on:SMUI:action={() => {}}>
                <Text>Delete</Text>
              </Item>
            </List>
          </Menu>
        </div>
      {:else}
        <Button
          on:click={() => {
            goto("/login");
          }}>Login</Button
        >
        <Button
          on:click={() => {
            goto("/register");
          }}>Register</Button
        >
      {/if}
    </Section>
  </Row>
</TopAppBar>
