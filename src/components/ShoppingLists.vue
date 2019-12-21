<template>
  <div>
    <ShoppingListsTable></ShoppingListsTable>
  </div>
</template>

<script>
import ShoppingListsTable from "./ShoppingListsTable";
export default {
  name: "ShoppingLists",
  components: { ShoppingListsTable },
  data: () => ({
    drawer: null
  })
};
</script>
