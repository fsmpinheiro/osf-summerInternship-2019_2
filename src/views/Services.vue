
<template>
    <div class="ServicesView">
        <!-- <Header begin section> -->
        <Header />
        <!-- <Header end section> -->

        <!-- <Services begin section> -->
        <Services />
        <!-- <Services end section> -->

        <!-- <FeaturedProducts begin section> -->
        <FeaturedProducts />
        <!-- <FeaturedProducts end section> -->
            
        <!-- <Footer begin section> -->
        <Footer />
        <!-- <Footer end section> -->
    </div>
    
</template>

<script>
import Header from '@/components/Header.vue'
import Services from '@/components/Services.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
    name : 'ServicesView',
    components : {
        Header,
        Services,
        FeaturedProducts,
        Footer
    }
}
</script>