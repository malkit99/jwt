<template>

  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
            <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
            </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="email"
                    v-model="form.email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="form.password"
                    prepend-icon="lock"
                    type="password"
                  />
                <v-card-actions>
                <v-spacer />
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-card-actions>

                </v-form>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
      name:"Login",
    props: {
      source: String,
    },

    data() {
        return {
            form:{
                email:null,
                password:null
            }
        }
    },

    methods: {
        login(){
            axios.post('/api/auth/login',this.form)
            .then(res => console.log(res.data))

        }
    },
  }
</script>
