<script lang="ts">
  import Card from "@smui/card";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Button from "@smui/button";
  import Select, { Option } from "@smui/select";
  import FormField from "@smui/form-field";
  import Paper, { Title, Subtitle, Content } from "@smui/paper";
  import { countryList } from "$lib/constants";

  let email = "";
  let password = "";

  const login = async () => {};
</script>

<div class="flex mt-10 justify-center">
  <div class="w-1/4 mt-10">
    <h1 class="mdc-typography--headline4 mb-5">Log in to your account</h1>
    <Card padded>
      <Textfield class="w-full" bind:value={email} label="Email" />
      <Textfield class="w-full" bind:value={password} label="Password" />
    </Card>

    <div class="flex justify-center mt-5">
      <Button variant="raised" on:click={login}>Login</Button>
    </div>
  </div>
</div>
