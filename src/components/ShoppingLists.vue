<template>
  <div>
    <ShoppingListsTable></ShoppingListsTable>
    <AddShoppingList></AddShoppingList>
  </div>
</template>

<script>
import ShoppingListsTable from "./ShoppingListsTable";
import AddShoppingList from "./Dialogs/AddShoppingList";
export default {
  name: "ShoppingLists",
  components: { ShoppingListsTable, AddShoppingList },
  data: () => ({
    drawer: null
  })
};
</script>
