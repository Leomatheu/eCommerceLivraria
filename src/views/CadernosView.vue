<template>
    <div class="margins">
       <cardComponente :pFoto="Foto" :pNome="Nome" :pDescricao="Descricao" :pValor="Preco"/>
    </div>
  </template>

<script>
  import cardComponente from '@/components/cardComponente.vue';
  export default {
    components: {
      cardComponente
    },

    data () {
      return {
         Nome : "Canetas Bic Coloridas",
         Descricao : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
         Foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
         Preco : 1.55
      }
    }

  }

</script>