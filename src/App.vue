<template>
  <v-app>
    <v-toolbar app>
    

      <v-spacer></v-spacer>

      <v-toolbar-title class="headline text-uppercase">
        <span>WareHouse Project</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-toolbar>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { API } from "./api";

export default {
  name: "App"
};
</script>
