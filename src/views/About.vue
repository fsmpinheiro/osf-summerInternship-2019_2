<template>
  <div class="AboutView">
    <Header />
    <about />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <h1>This is an about page</h1> -->

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default{
  name: 'AboutView',
  components: {
    About,
    Header,
    Footer,
  }
}
</script>