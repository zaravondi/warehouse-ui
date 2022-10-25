<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <h3>All Product Category</h3>
        <v-data-table :headers="headers" :items="productCategories" class="elevation-1">
          <template v-slot:items="props">
            <td v-bind:style="columnStyle" >{{ props.item.id }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.categoryName }}</td>
            
          </template>
        </v-data-table>

        <v-btn color="success" @click="back">
          Back
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { API } from "../api";

export default {
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Category Name", value: "categoryName" }
      ],
      productCategories: [],
      columnStyle : { 
      'white-space' : 'pre-wrap',      
      'word-wrap'   : 'break-word',
      'word-break'  : 'break-all' 
      }
    };
  },

  beforeMount() {
    const self = this;
    API.get("/product-category/retrieve")
      .then(response => {
        console.log(response.data);
        self.productCategories = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
