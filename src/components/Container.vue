<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/products">
          <v-list-item-action>
            <v-icon>mdi-bowl</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/shoppinglists">
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted-type</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Shopping Lists</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Shopping Helper</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">Bartosz Brożek &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Container",
  data: () => ({
    drawer: null
  })
};
</script>
