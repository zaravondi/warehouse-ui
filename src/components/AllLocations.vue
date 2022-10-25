<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <h3>All Location</h3>
        <v-data-table :headers="headers" :items="locations" class="elevation-1">
          <template v-slot:items="props">
            <td v-bind:style="columnStyle" >{{ props.item.id }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.address }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.city }}</td>
            <td v-bind:style="columnStyle" >{{ props.item.country }}</td>
            
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
        { text: "Adress", value: "address" },
        { text: "City", value: "city" },
        { text: "Country", value: "country" }
      ],
      locations: [],
      columnStyle : { 
      'white-space' : 'pre-wrap',      
      'word-wrap'   : 'break-word',
      'word-break'  : 'break-all' 
      }
    };
  },

  beforeMount() {
    const self = this;
    API.get("/location/retrieve")
      .then(response => {
        console.log(response.data);
        self.locations = response.data;
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
