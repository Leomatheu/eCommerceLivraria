
<template>
  <header><headerComponente :logoTipo="fotoLogo" :alt="appName"/></header>

  <body><router-view/></body>

  <footer><footerComponente/></footer>
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

.margins {
    width: 60%;
    margin-top: 0.5%;
    height: -10%;
}

.alinhamentoCard{
  flex : 1 0 21%; 
  margin-top : 10px;
  margin-left : 30px;
  margin-bottom : 5px
}

.marginsAlerts{
  margin-top: 0.5%;
  margin-right: 1%;
  margin-left: 1%;
}
</style>
