<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="shoppingLists"
      :items-per-page="20"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShoppingListsTable",
  computed: {
    ...mapGetters(["shoppingLists"])
  },
  created: function() {

  },
  methods: {
    ...mapActions(["DELETE_SHOPPING_LIST"]),
    editItem: function(item) {
      this.$store.commit("modals/SHOW_MODAL", {
        name: "editShoppingList",
        data: item
      });
    },
    deleteItem: function(item) {
      item;
    }
  },
  mounted() {
    this.$store.dispatch("GET_SHOPPING_LISTS");
  },
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Created At", value: "createdAt" },
      { text: "Updated At", value: "updatedAt" },
      { text: "Actions", value: "action", sortable: false }
    ]
  })
};
</script>
