<template>
  <div id="app">
    <Home />

    <!-- <router-link to="/">Home</router-link> |
         <router-link to="/about">About</router-link>
         <router-view/> -->
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  components : {
    Home
  }
}
</script>


<style>
  @import './assets/stylesheet/normalize.css';
  @import './assets/stylesheet/commonStyle.css';




</style>
