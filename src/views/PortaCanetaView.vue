<template>
  <!-- alert de adição de itens ao carrinho -->     
<div class="marginsAlerts alert alert-success alert-dismissible" v-show="this.add">
  <button type="button" class="btn-close" data-bs-dismiss="alert" @click="closeAlert()"></button>
  <strong>Item adicionado ao carrinho !</strong>
</div>  

  <!--Cards com os itens disponíveis para compra-->
<div class="d-flex flex-wrap">
    <div v-for="(item, index) in itens" :key="index" class="alinhamentoCard">
    <cardComponente :pFoto="item.foto" :pNome="item.nome" :pDescricao="item.descricao1" :pValor="item.valor" :pId="item.id"
    @addCartSuccess="addCartDone"/>
</div>
</div>


</template>

<script>
import cardComponente from '@/components/cardComponente.vue';
import axios from 'axios';

export default {
  components : {
    cardComponente
  },

  data () {
    return {
      add : false,

      itens :[]

    }
  }, 

  methods : {
    addCartDone (done) {
      return this.add = done
    },

    closeAlert(){
      this.add = !this.add
    }
  },

  mounted () {
    axios
    .get('http://localhost:8080/produto/produto-categoria/3')
    .then(resp => this.itens = resp.data)

  },
}
</script>