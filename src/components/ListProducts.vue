<template>
  <div>
 
  <input type="text" placeholder="Search Products" class="search-input" v-model="searchValue" />
  <v-btn color="success" @click="searchProduct">
          Search
  </v-btn>
 
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <v-data-table :headers="headers" :items="products" class="elevation-1">
          <template v-slot:items="props">
            <td v-bind:style="columnStyle" >{{ props.item.id }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.productName }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.productCategoryName }}</td>
            <td>{{ props.item.price }}</td>
            <td>{{ props.item.quantity}}</td>
            <td>{{ props.item.locationName }}</td>
           
          </template>
        </v-data-table>

        
        <v-btn color="success" @click="addLocation">
          Add Location
        </v-btn>

        <v-btn color="success" @click="addCategory">
          Add Category
        </v-btn>

        <v-btn color="success" @click="addProduct">
          Add Product
        </v-btn>

        <v-btn color="success" @click="allLocations">
          All Location
        </v-btn>

        <v-btn color="success" @click="allProductCategory">
          All Product Category
        </v-btn>

      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import { API } from "../api";

export default {
  data() {

    return {
      headers: [
        { text: "Product Id", value: "id" },
        { text: "Product Name", value: "productName" },
        { text: "Product Category Name", value: "productCategoryName" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Location Information", value: "locationName" }
      ],
      products: [],
      searchValue:"",
      columnStyle : { 
      'white-space' : 'pre-wrap',      
      'word-wrap'   : 'break-word',
      'word-break'  : 'break-all' 
      }
    };
  },

  beforeMount() {
    const self = this;
    API.get("/products/retrieve")
      .then(response => {
        console.log(response.data);
        self.products = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
   
    addCategory() {
      this.$router.push("add-category");
    },
    addLocation() {
      this.$router.push("add-location");
    },
    allLocations() {
      this.$router.push("all-locations");
    },
    allProductCategory() {
      this.$router.push("all-productcategory");
    },
    addProduct() {
      this.$router.push("add-product");
    },
    searchProduct() {
      const self=this;
      API.get("/products/search/" + self.searchValue)
      .then(response => {
        console.log(response.data);
        self.products = response.data;
      })
      .catch(e => {
        console.log(e);
      });
    }
  }
};
</script>
<style>
.search-input{
  width:500px;
  height:50px;
  text-align:center;
  margin-left: 500px;
  margin-top: 30px;
  
}

</style>