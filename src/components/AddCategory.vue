<template>
    <v-container>
        <v-layout row wrap>
            <v-flex md6 offset-lg3>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="categoryName" :counter="20" :rules="categoryRules" label="Category Name" required></v-text-field>
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
      categoryName: "",
      categoryRules: [
        v => !!v || "Category Name is required",
        v => (v && v.length <= 20) || "Category name must be less than 20 characters"
      ]
  
    };
  },

  methods: {
    add() {
      const self = this;
      if (this.$refs.form.validate()) {

        API.post("/product-category/add", {
          categoryName: self.categoryName
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
