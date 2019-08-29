<template>
    <div class="notfound">
        <!-- <Header begin section> -->
        <Header />
        <!-- <Header end section> -->

        <!-- <NotFound Component begin section> -->
        <NotFound />
        <!-- <NotFound Component end section> -->
        
        <!-- <Footer begin section> -->
        <Footer />
        <!-- <Footer end section> -->
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NotFound from '@/components/Notfound.vue'

export default {
    name : 'notfound',
    components : {
        Header, NotFound, Footer
    }
}
</script>

