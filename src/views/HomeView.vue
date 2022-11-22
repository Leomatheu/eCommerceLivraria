<template>
<div class="d-flex flex-wrap">
    <div v-for="(item, index) in itens" :key="index" class="alinhamentoCard">
      {{item.valor}}
      <cardComponente :pFoto="item.foto" :pNome="item.nomeProduto" :pDescricao="item.descricaoProduto" :pValor="item.valor" :pId="item.id"/>
    </div>
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
        itens :[
          {
            foto : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 54
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 1,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },

        ]

      }
    }
  }
</script>

