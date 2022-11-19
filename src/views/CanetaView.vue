<template>
  <div class="margins" v-for="(item, index) in itens" :key="index"> 
     <cardComponente :pFoto="itens.foto" :pNome="itens.nomeProduto" :pDescricao="itens.descricaoProduto" :pValor="itens.valor" :pId="itens.id"/>
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
        itens : [{
          foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 2
        },
        {
          foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 3
        },
        {        
          foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 4
        }]

      }
    }
  }
</script>

<style scoped>

</style>