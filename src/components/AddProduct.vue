<template>
    <v-container>
        <v-layout row wrap>
            <v-flex md6 offset-lg3>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="productName" :counter="20" :rules="categoryRules" label="Product Name" required></v-text-field>
                    <v-text-field v-model="price" :rules="amountRules" label="Price" required></v-text-field>
                    <v-text-field v-model="quantity"  label="Quantity" required></v-text-field>
                    <v-text-field v-model="productCategoryId"  label="Product Category Id" required></v-text-field>
                    <v-text-field v-model="locationId"  label="Location Id" required></v-text-field>
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
      productName: "",
      price: 0.0,
      quantity:0,
      productCategoryId:0,
      locationId:0,
      categoryRules: [
        v => !!v || "Product Name is required",
        v => (v && v.length <= 20) || "Product name must be less than 20 characters"
      ],
      amountRules: [v=> !!v || "Price is required" ]
  
    };
  },

  methods: {
    add() {
      const self = this;
      if (this.$refs.form.validate()) {

        API.post("/products/add", {
          productName: self.productName,
          price: self.price,
          quantity: self.quantity,
          productCategoryId: self.productCategoryId,
          locationId: self.locationId
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
