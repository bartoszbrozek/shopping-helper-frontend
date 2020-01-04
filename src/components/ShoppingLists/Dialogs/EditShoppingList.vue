<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Shopping List</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Name" v-model="modalData.name" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
            <v-btn color="blue darken-1" text @click="saveShoppingList">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "editShoppingListDialog",
  data: () => ({
    dialog: false,
    modalData: {}
  }),
  created: function() {
    this.$store.watch(
      state => state.modals.editShoppingList,
      () => {
        this.dialog = this.$store.state.modals.editShoppingList;
        this.modalData = this.$store.state.modals.data.editShoppingList;
      }
    );
  },
  computed: {},
  methods: {
    closeDialog() {
      this.$store.commit("modals/HIDE_MODAL", "editShoppingList");
    },
    saveShoppingList() {
      const payload = this.modalData;

      this.$store.dispatch("EDIT_SHOPPING_LIST", payload).then(() => {
        this.$store.dispatch("GET_SHOPPING_LISTS", payload);
        this.$store.commit("modals/HIDE_MODAL", "editShoppingList");

        this.dialog = false;
      });
    }
  }
};
</script>