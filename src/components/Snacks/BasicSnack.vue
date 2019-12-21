<template>
  <div class="text-center">
    <v-snackbar v-model="show" :multi-line="multiLine">
      {{ text }}
      <v-btn color="red" text @click="show = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    multiLine: true,
    show: false
  }),
  computed: {
    ...mapGetters(["color", "text"])
  },
  created: function() {
    this.$store.watch(
      state => state.snack.isVisible,
      () => {
        const isVisible = this.$store.state.snack.isVisible;

        if (isVisible) {
          this.show = true;
        }
      }
    );
  }
};
</script>