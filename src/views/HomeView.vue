<template>
  <div class="margins">
     <cardComponente :pFoto="foto" :pNome="nomeProduto" :pDescricao="descricaoProduto" :pValor="valor" :pId="id"/>
  </div>
</template>

<script>
  import cardComponente from '@/components/cardComponente.vue';

  export default {
    components : {
      cardComponente
    },

    data () {
      return {
        id : 1,
        foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
        nomeProduto : "Canetas Bic Coloridas",
        descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
        valor : 1.55
      }
    }
  }
</script>
