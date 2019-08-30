<template>
  <div class="home">
    <!-- <Header begin section> -->
    <Header />
    <!-- <Header end section> -->

    <!-- <SliderOffers begin section> -->
    <SliderOffers />
    <!-- <SliderOffers end section> -->

    <!-- <PopularItens begin section> -->
    <PopularItens />
    <!-- <PopularItens end section> -->
    
    <!-- <BannerTheme begin section> -->
    <BannerTheme />
    <!-- <BannerTheme end section> -->
    
    <!-- <FeaturedProducts begin section> -->
    <FeaturedProducts />
    <!-- <FeaturedProducts end section> -->
    
    <!-- <Benefits begin section> -->
    <Benefits />
    <!-- <Benefits end section> -->
    
    <!-- <Footer begin section> -->
    <Footer />
    <!-- <Footer end section> -->
  </div>

</template>

<script>
import Header from '@/components/Header.vue'
import SliderOffers from '@/components/SliderOffers.vue'
import BannerTheme from '@/components/BannerTheme.vue'
import PopularItens from '@/components/PopularItens.vue'
import Benefits from '@/components/Benefits.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Footer from '@/components/Footer.vue' 

export default {
  name: 'home',
  components: {
    Header,
    SliderOffers,
    BannerTheme,
    PopularItens,
    Benefits,
    FeaturedProducts,
    Footer
  }
}
</script>
