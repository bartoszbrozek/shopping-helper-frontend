<template>
  <div>
    <v-data-table :headers="headers" :items="shoppingLists" :items-per-page="5" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShoppingListsTable",
  computed: {
    ...mapGetters(["shoppingLists"])
  },
  mounted() {
    this.$store.dispatch("GET_SHOPPING_LISTS");
  },
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Created At", value: "createdAt" },
      { text: "Updated At", value: "updatedAt" }
    ]
  })
};
</script>
