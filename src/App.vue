<template>
  <headerComponente :logoTipo="fotoLogo" :alt="appName"/>
  <router-view/>
  <footerComponente/>
</template>

<script>
  import headerComponente from './components/headerComponente.vue';
  import footerComponente from './components/footerComponente.vue';

  export default {
    components : {
      headerComponente,
      footerComponente
    },

    data (){
      return {
        fotoLogo : "/IMG/papelaria.png",
        appName : "Papelaria"
      }
    }
  }

</script>

<style>
  body {
    background-color: #F9DAFA;
  } 

</style>
