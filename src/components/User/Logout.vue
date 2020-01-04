<template>
  <div>Logout...</div>
</template>

<script>
export default {
  name: "Logout",
  created: function () {
    this.$router.push("/login")
  }
};
</script>
