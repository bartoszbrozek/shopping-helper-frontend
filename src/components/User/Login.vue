<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />

                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large to="/register" v-on="on">
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Register</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="email"
                  />

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    login() {
      this.$store
        .dispatch("user/LOGIN", {
          username: this.username,
          password: this.password
        })
        .then(success => {
          this.$router.push("/");
            this.$store.commit("showSnack", { color: "orange darken-2", text: "Logged In" })
        })
        .catch(error => {
            this.$store.commit("showSnack", { color: "pink", text: "Invalid Login" })
        });
    }
  }
};
</script>