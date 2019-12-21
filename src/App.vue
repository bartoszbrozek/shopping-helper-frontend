<template>
  <div id="app">
    <v-app>
      <router-view></router-view>

      <BasicSnack></BasicSnack>
    </v-app>
  </div>
</template>

<script>
import BasicSnack from "./components/Snacks/BasicSnack";
export default {
  name: "app",
  components: { BasicSnack }
};
</script>
