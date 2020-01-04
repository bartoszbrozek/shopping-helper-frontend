<template>
  <v-layout child-flex>
    <ShoppingListsTable></ShoppingListsTable>
    <AddShoppingList></AddShoppingList>
    <EditShoppingList></EditShoppingList>
  </v-layout>
</template>

<script>
import ShoppingListsTable from "./ShoppingListsTable";
import AddShoppingList from "./Dialogs/AddShoppingList";
import EditShoppingList from "./Dialogs/EditShoppingList";
export default {
  name: "ShoppingLists",
  components: { ShoppingListsTable, AddShoppingList, EditShoppingList }
};
</script>
