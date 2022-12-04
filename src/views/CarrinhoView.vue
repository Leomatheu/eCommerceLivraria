<template>
    <!-- for que repete o componente do carrinho de compras -->
    <div class="d-flex flex-wrap" v-for="(item, index) in itens" :key="index">
        <carrinhoProdComponente :pId="item.id" :pFoto = item.foto :pNome = item.nome :pDescricao = item.descricao :pValor="item.valor"
        @excluirItemLista="excluirItemLista" @totalValue="refreshTotal" @atualizaTotal="refreshTotalCompra"/>
    </div>  

    <div>
        <div  class="total-geral">
            <h5>Total da compra</h5>
            <h1>{{this.totalGeral}}</h1>
        </div>
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
                itens : JSON.parse(localStorage.getItem("cart")),

                totalGeral : 0
            }
        },

        methods :{
            voltar(){
                this.$router.go(-1)
            },

            excluirItemLista(id){
                let array = this.itens.filter((item) => {return item.id != id})

                localStorage.clear                
                localStorage.setItem("cart", JSON.stringify(array))

                location.reload()
                
            },

            refreshTotalCompra(){
                let lista = JSON.parse(localStorage.getItem("cart"))

                this.totalGeral = lista.reduce((acumulado, atual) => acumulado + atual.totalITem, 0)
            }
        },

        mounted(){
            this.refreshTotalCompra()
        }
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

    .total-geral{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>