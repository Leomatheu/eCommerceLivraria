<template>
    <!-- for que repete o componente do carrinho de compras -->
    <div class="d-flex flex-wrap" v-for="(item, index) in itens" :key="index">
        <carrinhoProdComponente :pId="item.id" :pFoto = item.foto :pNome = item.nome :pDescricao = item.descricao :pValor="item.valor"
        @excluirItemLista="excluirItemLista"/>
    </div>  

    <!-- botões para fechar a compra ou voltar para continuar comprando -->
    <div class="div-botoes">
            <button class="botao-voltar btn btn-info btn-lg" @click="voltar()">Continuar comprando</button>
            <button class="botao-voltar btn btn-info btn-lg">Finalizar compra</button>
    </div> 
</template>

<script>
    import carrinhoProdComponente from '@/components/carrinhoComponente.vue';

    export default {
        components: {carrinhoProdComponente},

        data () {
            return {
                itens : [JSON.parse(localStorage.getItem("item"))]
            }
        },

        methods :{
            voltar(){
                this.$router.go(-1)
            },

            excluirItemLista(id){

                console.log(id)
            }
        },

        // mounted : {

        //     montaCarrinho () {
        //         let newData = localStorage.getItem("item")
        //         let itemJson = JSON.parse(newData)
        //         this.itens.push(itemJson)
        //     }
            
        // }
    }

</script>

<style scoped>
    .div-botoes {
        margin-top: 3%;
        margin-left: 28%;
    }
    .botao-voltar {
        margin-left: 10px;
        width: 265px;
    }
</style>