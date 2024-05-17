<template>
    <Header></Header>
    <router-view />
    
    <Footer></Footer>
</template>

<script>

  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Header, Footer, 
       
    },

  }



</script>

<style>

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: bisque;

   }

  #app {
    width: 100%;
    height: auto;
    
  }

  h1, h2 {
    text-align: center;
  }

  h1, h2, h3 {

    color: rgb(145, 32, 32);

  }

  .divStyle {
      max-width: 70%;
      hyphens: auto; 
      text-align: justify;
      margin-left: auto;
      margin-right: auto;
  }

</style>
