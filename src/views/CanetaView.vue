<template>
    <!-- alert de adição de itens ao carrinho -->     
  <div class="marginsAlerts alert alert-success alert-dismissible" v-show="this.add">
    <button type="button" class="btn-close" data-bs-dismiss="alert" @click="closeAlert()"></button>
    <strong>Item adicionado ao carrinho !</strong>
  </div>  

    <!--Cards com os itens disponíveis para compra-->
  <div class="d-flex flex-wrap">
      <div v-for="(item, index) in itens" :key="index" class="alinhamentoCard">
      <cardComponente :pFoto="item.foto" :pNome="item.nomeProduto" :pDescricao="item.descricaoProduto" :pValor="item.valor" :pId="item.id"
      @addCartSuccess="addCartDone"/>
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
        add : false,

        itens :[
          {
            foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          id : 1
          },
          {
          id : 2,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 3,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 4,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55
          },
          {
          id : 5,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 6,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 7,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },
          {
          id : 8,
          foto : "https://picsum.photos/400/400",
          nomeProduto : "Canetas Bic Coloridas",
          descricaoProduto : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
          valor : 1.55,
          },

        ]

      }
    }, 

    methods : {
      addCartDone (done) {
        return this.add = done
      },

      closeAlert(){
        this.add = !this.add
      }
    }
  }
</script>