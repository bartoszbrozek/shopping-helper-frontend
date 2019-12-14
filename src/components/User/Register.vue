<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer />

                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large to="/login" v-on="on">
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Login</span>
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
                <v-btn color="primary" @click="register">Register</v-btn>
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
    password: ""
  }),
  methods: {
    register() {
      this.$store
        .dispatch("REGISTER", {
          username: this.username,
          password: this.password
        })
        .then(success => {
          this.$router.push("/login");
          this.$swal({
            title: "Success",
            html: success.message,
            type: "success"
          });
        })
        .catch(error => {
          this.$swal({
            title: "Error",
            html: error.message,
            type: "error"
          });
        });
    }
  }
};
</script>