<template>
  <div class="home">
    <Header />

    <PopularItens />

    <BannerTheme />
    <FeaturedProducts />
    <Benefits />
  </div>

  <!-- <div class="home">
       <img alt="Vue logo" src="../assets/logo.png">
       <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import BannerTheme from '@/components/BannerTheme.vue'
import PopularItens from '@/components/PopularItens.vue'
import Benefits from '@/components/Benefits.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue' 

export default {
  name: 'home',
  components: {
    Header,
    BannerTheme,
    PopularItens,
    Benefits,
    FeaturedProducts
  }
}
</script>
