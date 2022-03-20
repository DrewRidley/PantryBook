<script lang="ts">
  import Card from "@smui/card";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Button from "@smui/button";
  import Select, { Option } from "@smui/select";
  import FormField from "@smui/form-field";
  import Paper, { Title, Subtitle, Content } from "@smui/paper";
  import { countryList } from "$lib/constants";

  let pantry = {
    name: "",
    tag: "",
    state: "",
    country: "",
  };
  let owner = {
    name: "",
    email: "",
    password: "",
  };

  const register = async () => {};
</script>

<div class="flex mt-10 justify-center">
  <div class="w-1/2">
    <h1 class="mdc-typography--headline4 mb-5">Register your food pantry</h1>
    <Paper>
      <Title>Pantry info</Title>
      <Content
        ><Textfield class="w-1/2" bind:value={pantry.name} label="Full Name">
          <HelperText slot="helper" />
        </Textfield>
        <Textfield class="w-1/3" bind:value={pantry.tag} label="Tag">
          <HelperText slot="helper" />
        </Textfield>
        <div>
          <Select bind:value={pantry.country} label="Country">
            {#each countryList as country}
              <Option value={country}>{country}</Option>
            {/each}
          </Select>
        </div>
        <Textfield class="w-1/3" bind:value={pantry.state} label="State">
          <HelperText slot="helper" />
        </Textfield>
      </Content>
    </Paper>
    <Paper class="mt-5">
      <Title>Owner's account</Title>
      <Content>
        <Textfield class="w-1/3" bind:value={owner.name} label="Name">
          <HelperText slot="helper" />
        </Textfield>
        <Textfield class="w-1/3" bind:value={owner.email} label="Email">
          <HelperText slot="helper">This will be your owner email</HelperText>
        </Textfield>
        <Textfield
          class="w-1/3"
          bind:value={owner.password}
          label="Password"
          type="password"
        >
          <HelperText slot="helper">
            Minimum eight characters, at least one letter and one number
          </HelperText>
        </Textfield>
      </Content>
    </Paper>

    <div class="flex justify-center mt-5">
      <Button variant="raised" on:click={register}>Register</Button>
    </div>
  </div>
</div>
