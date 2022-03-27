<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import LinearProgress from "@smui/linear-progress";
  import { format } from "date-fns";
  import { moneyFormatter } from "$lib/utils";

  export let clients;
</script>

<DataTable class="w-full">
  <Head>
    <Row>
      <Cell>Name</Cell>
      <Cell>Date of Birth</Cell>
      <Cell>Email</Cell>
      <Cell>Household Income</Cell>
      <Cell>Household Size</Cell>
    </Row>
  </Head>
  <Body>
    {#each clients as client}
      <Row>
        <Cell>{client.name}</Cell>
        <Cell>{format(client.dob, "dd/MM/yyyy")}</Cell>
        <Cell>{client.email}</Cell>
        <Cell>{moneyFormatter.format(client.householdIncome)}</Cell>
        <Cell>{client.householdSize}</Cell>
      </Row>
    {/each}
  </Body>

  <LinearProgress indeterminate closed={true} slot="progress" />
</DataTable>
