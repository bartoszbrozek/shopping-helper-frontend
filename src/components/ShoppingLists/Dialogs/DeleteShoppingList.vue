<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
          <v-btn absolute dark fab bottom right color="pink" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Delete Shopping List</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Name" v-model="name" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="red darken-1" text @click="deleteShoppingList">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "deleteShoppingListDialog",
  data: () => ({
    dialog: false,
    name: ""
  }),
  methods: {
    deleteShoppingList() {
      const payload = {
        name: this.name
      };
      this.$store.dispatch("DELETE_SHOPPING_LIST", payload).then(() => {
        this.$store.dispatch("GET_SHOPPING_LISTS", payload);
        this.$store.commit("showSnack", {
          color: "orange darken-2",
          text: "Shopping List Deleted"
        });

        this.dialog = false;
      });
    }
  }
};
</script>