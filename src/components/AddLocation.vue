<template>
    <v-container>
        <v-layout row wrap>
            <v-flex md6 offset-lg3>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="city" :counter="20" :rules="cityRules" label="City" required></v-text-field>
                    <v-text-field v-model="country" :counter="20" :rules="countryRules" label="Country" required></v-text-field>
                    <v-text-field v-model="address" :counter="50" :rules="addressRules" label="Address" required></v-text-field>
                    <v-btn :disabled='!valid' color="success" @click="add">
                        Add
                    </v-btn>

                    <v-btn color="error" @click="cancel">
                        Cancel
                    </v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { API } from "../api";

export default {
  data() {
    return {
      valid: true,
      address: "",
      city: "",
      country: "",
      cityRules: [
        v => !!v || "City is required",
        v => (v && v.length <= 20) || "City must be less than 20 characters"
      ],
      countryRules: [
        v => !!v || "Country is required",
        v => (v && v.length <= 20) || "Country must be less than 20 characters"
      ],
      addressRules: [
        v => !!v || "Address is required",
        v => (v && v.length <= 50) || "Address must be less than 50 characters"
      ]
  
    };
  },

  methods: {
    add() {
      //console.log("adding");
      console.log(
        "adding %s with parameters",
        this.Address
      );
      const self = this;
      if (this.$refs.form.validate()) {

        API.post("/location/add", {
          address: self.address,
          city: self.city,
          country: self.country
        })
          .then(response => {
            console.log(response.data);
            self.$router.go(-1);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log("validation failed");
      }
    },

    cancel() {
      this.$refs.form.reset();
      this.$router.go(-1);
    }
  }
};
</script>
