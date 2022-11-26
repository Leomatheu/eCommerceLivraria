<template>
  <div class="d-flex flex-wrap">
    <div v-for="(item, index) in itens" :key="index" class="alinhamentoCard"> 
      <cardComponente :pFoto="item.foto" :pNome="item.nomeProduto" :pDescricao="item.descricaoProduto" :pValor="item.valor" :pId="item.id"/>
    </div>
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
        itens :[
          {
            foto : "https://picsum.photos/400/400",
            nomeProduto : "Canetas Bic Coloridas",
            descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
            valor : 1.55,
            id : 3
          },
          {
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 3
          },
          {
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 3
          },
          {
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 3
          },
        ]
      }
    }

  }

</script>