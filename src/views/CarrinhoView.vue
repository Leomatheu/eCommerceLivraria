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
                itens : [
                    {
                        id : 1,
                        foto : "https://picsum.photos/400/400",
                        nome : "Caneta Bic Colorida",
                        descricao : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
                        valor : 2.00
                    },
                    {
                        id : 2,
                        foto : "https://picsum.photos/400/400",
                        nome : "Caneta Bic Colorida",
                        descricao : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
                        valor : 3.00
                    },
  
                ]
            }
        },

        methods :{
            voltar(){
                this.$router.go(-1)
            },

            adicionaItem(item) {
                if (!this.itens == []) {
                    const item = localStorage.getItem("item", item)

                    this.itens.push(item)
                }
                
            },

            excluirItemLista(id){

                console.log(id)
            }
        }

        // mounted :{
        //     MontaCarrinho(id, foto, nome, descricao, valor) {
        //         this.itens.push(1, "https://picsum.photos/400/400", "Caneta Bic Colorida", "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.", 1.98)
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