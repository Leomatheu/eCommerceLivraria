<template>
    <div>
        <!-- for que repete o componente do carrinho de compras -->
        <div class="d-flex flex-wrap" v-for="(item, index) in itens" :key="index">

            <carrinhoProdComponente :pId="item.id" :pFoto = item.foto :pNome = item.nome :pDescricao = item.descricao 
                :pValor="item.valor" :pQuantidade="item.quantidade" :pTotalItem="item.totalITem"
            @excluirItemLista="excluirItemLista" @totalValue="refreshTotal" @atualizaTotal="refreshTotalCompra"/>
        </div>  

        <!-- Dados com o endereço do cliente logado -->
        <div class="div-form-fim-compra" v-show="this.finalCompra">
            <h4>Confirme os dados para a entrega de seu pedido</h4>
            <br>
            <div class="edits edits-nome mb-3 mt-3">
                <h5 class="form-label">Rua:</h5>
                <input type="rua" class="form-control" id="rua" v-model="rua">
            </div>

            <div class="edits edits-nome mb-3 mt-3">
                <h5 class="form-label">Bairro:</h5>
                <input type="rua" class="form-control" id="bairro" v-model="bairro">
            </div>

            <div class="numeroCep">
                <div class="editsnumcep edits-nome mb-3 mt-3">
                    <h5 class="form-label">Número:</h5>
                    <input type="rua" class="form-control" id="numero" v-model="numero">
                </div>

                <div class="cep editsnumcep edits-nome mb-3 mt-3">
                    <h5 class="form-label">Cep:</h5>
                    <input type="rua" class="form-control" id="cep" v-model="cep">
                </div>
            </div>

            <div class="edits edits-nome mb-3 mt-3">
                <h5 class="form-label">Cidade:</h5>
                <input type="rua" class="form-control" id="cidade" v-model="cidade">
            </div>

            <div class="edits edits-nome mb-3 mt-3">
                <h5 class="form-label">Estado:</h5>
                <input type="rua" class="form-control" id="estado" v-model="estado">
            </div>

            <div>
                <button class="botao-confirmar-pedido btn btn-info btn-lg" @click="pedidoConfirmado()">Confirmar Pedido</button>
            </div>

        </div>
    </div>

    <!-- Total geral da compra -->
    <div>
        <div  class="total-geral">
            <h5>Total da compra</h5>
            <h1>{{transforma(this.totalGeral)}}</h1>
        </div>
    </div>

    <!-- botões para fechar a compra ou voltar para continuar comprando -->
    <div class="div-botoes" v-show="!this.finalCompra">
        <button class="botao-voltar btn btn-info btn-lg" @click="voltar()">Continuar comprando</button>
        <button class="botao-voltar btn btn-info btn-lg" @click="finalizaCompra()">Finalizar compra</button>
    </div> 
</template>

<script>
    import carrinhoProdComponente from '@/components/carrinhoComponente.vue';
    import axios from 'axios';

    export default {
        components: {carrinhoProdComponente},

        data () {
            return {
                itens : JSON.parse(localStorage.getItem("cart")),

                totalGeral : 0,

                finalCompra : false,

                rua : null,
                bairro : null,
                cep : null,
                cidade : null,
                estado : null,
                numero : null,
                id : 0,
                idProduto : 0,


                compra :{
                    valor : 0,

                    cliente : {
                        id : 0
                    },
                      
                    itens: []
                }
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
                console.log(lista)
                if(!lista == []){
                    this.totalGeral = lista.reduce((acumulado, atual) => acumulado + atual.totalITem, 0)
                }
            },

            transforma (valor) {
                return Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(valor)                
            },

            finalizaCompra(){
                let clienteLogado = JSON.parse(localStorage.getItem("logado"))
                let carrinho = JSON.parse(localStorage.getItem("cart"))
                            
                if(!clienteLogado == []){

                    clienteLogado.forEach(c => {
                        this.finalCompra = true
                        this.rua = c.endereco.endereco
                        this.bairro = c.endereco.bairro
                        this.cep = c.endereco.cep
                        this.numero = c.endereco.numero
                        this.cidade = c.endereco.cidade
                        this.estado = c.endereco.estado                         
                        this.compra.cliente.id = c.id                      
                    });     

                    this.compra.valor = this.totalGeral

                    if(carrinho != []){
                        carrinho.forEach(c => {
                            this.compra.itens.push({'quantidade' : c.quantidade, 'produto':{ 'id': c.id}})
                        })
                    }

                    axios
                    .post('http://localhost:8080/compra', this.compra)               
                }
                else {
                    this.$router.push(`/login`) 
                }
            },

            pedidoConfirmado(){
                this.$router.push(`/pedidofinalizado`) 
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
    .botao-confirmar-pedido{
        margin-top: 40px;
    }
    .total-geral{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: end;
        margin-right: 333px;
        margin-top: 50px;
        padding-right: 3%;
        padding-top: 1%;
        padding-bottom: 1%;
        margin-left: 500px;
    }

    .div-form-fim-compra{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 3%;
        padding-left: 22%;
    }

    .edits{
        width: 63%;
    }

    .numeroCep{
        display: flex;
        flex-direction: row;
        
    }

    .cep{
        margin-left: 35px;
    }

    .editsnumcep{
        width: 30%;
    }
</style>