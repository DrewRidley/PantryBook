<script lang="ts">
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import { Icon } from "@smui/common";
  import ClientList from "$lib/components/clients/ClientList.svelte";
  import { mockClients } from "$lib/constants";

  let search = "";
  let openNewClient = false;
  let newClient = {
    name: "",
    dob: "",
    email: "",
    householdIncome: 0,
    householdSize: 0,
  };

  let clients = mockClients;

  const addClient = async () => {
    const dob = new Date(newClient.dob);
    clients = [...clients, { ...newClient, dob, family: [], visits: [] }];
  };
</script>

<div class="w-full m-2">
  <div class="flex justify-between m-2">
    <Textfield class="w-1/4" bind:value={search} label="Search">
      <Icon class="material-icons" slot="leadingIcon">search</Icon>
    </Textfield>
    <Button
      variant="raised"
      on:click={() => {
        openNewClient = true;
      }}>New Client</Button
    >
    <Dialog bind:open={openNewClient}>
      <Title>Tell us about this new Client</Title>
      <Content>
        <Textfield bind:value={newClient.name} label="Name">
          <HelperText slot="helper" />
        </Textfield>
        <Textfield type="email" bind:value={newClient.email} label="Email">
          <HelperText slot="helper" />
        </Textfield>
        <Textfield bind:value={newClient.dob} label="Date of Birth" type="date">
          <HelperText slot="helper" />
        </Textfield>
        <Textfield
          bind:value={newClient.householdIncome}
          label="Household Income"
          prefix="$"
          type="number"
        >
          <HelperText slot="helper" />
        </Textfield>
        <Textfield
          bind:value={newClient.householdSize}
          label="Household Size"
          type="number"
        >
          <HelperText slot="helper" />
        </Textfield>
      </Content>
      <Actions>
        <Button>Cancel</Button>
        <Button on:click={addClient}>Ok</Button>
      </Actions>
    </Dialog>
  </div>
  <ClientList {clients} />
</div>
