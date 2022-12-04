<template>
    <ul class="margins list-group">    
        <li class="list-group-item cores">
            <div class="cart">
                <!-- imagem do cart -->
                <div>
                    <a href="#"><img :src="pFoto" alt="imagem item carrinho" style="width:280px"></a>
                </div>
                
                <div class="descricaoCart">

                    <!-- nome e descrição do cart -->
                    <div class="text-left align-self-center">
                        <h4><b><a href="#" class="text-decoration-none text-danger">{{pNome}}</a></b></h4>
                        <small>{{pDescricao}}</small>
                    </div>

                    <!-- botões de aumentar, diminuir e excluir itens do carrinho -->
                    <div style="width: 250px" class="botoes">
                        <div class="input-group">
                            <!-- botão para diminuir -->
                            <button type="button" class="btn btn-info btn-sm" @click="diminuiQuantidade (this.pId)" v-show="habilitaReducaoItens()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            </button>

                            <!-- campo com a quantidade selecionada -->
                            <input type="text" class="form-control text-center border-info" name="valor" id="valor" v-model="quantidade">

                            <!-- botão para aumentar -->
                            <button type="button" class="btn btn-info btn-sm" @click="aumentaQuantidade(this.pId)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </button>

                            <!-- botão para excluir -->
                            <button type="button" class="btn btn-danger btn-sm" @click="excludeItemList()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>
                        </div>

                        <!-- divisão com o subtotal e o valor unitário do produto -->
                        <div>
                            <small class="text-secondary">Valor produto : {{formatNumber(pValor)}}</small><br>
                            <span class="text-dark">Total item: {{ formatNumber(this.totalItem) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>


<script>
    export default {
        name : 'carrinhoComponente',

        data () {
            return {
                quantidade : 1,
                totalItem : null,  
            }
        },

        props : {
            pId : Number,
            pFoto : String,
            pNome : String,
            pDescricao : String,
            pValor : Number
        }, 

        methods : {
            diminuiQuantidade (id) {
                --this.quantidade   
                this.refreshLocalStorage(id)
                this.$emit('atualizaTotal')
            },

            aumentaQuantidade (id) {
                ++this.quantidade
                this.refreshLocalStorage(id)
                this.$emit('atualizaTotal')
            },

            habilitaReducaoItens(){
                if (this.quantidade > 1){
                    return true
                }
            },

            excludeItemList(){
                this.$emit('excluirItemLista', this.pId)
            },

            showValue(){
                this.$emit('totalValue', this.totalItem)
            },

            refreshLocalStorage(id){
                let itens = JSON.parse(localStorage.getItem("cart"))
                 
                 itens.forEach(i => {
                     if (i.id == id){
                         i.quantidade = this.quantidade
                         i.totalITem = i.valor * this.quantidade
                         this.totalItem = i.totalITem
                     }
                 });
 
                 localStorage.clear
                 localStorage.setItem("cart", JSON.stringify(itens))
            },

            formatNumber(value){
                return Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(value)  
            },

            
        },

        mounted () {
            let lista = JSON.parse(localStorage.getItem("cart"))

            for(let i = 0; i < lista.length; i++){
                
                if(i + 1 == lista[i].id){
                    this.quantidade = lista[i].quantidade
                    this.totalItem = lista[i].totalITem
                }
            }
                // lista.forEach(i => {
                //     this.quantidade = i.quantidade
                //     this.totalItem = i.totalITem
                // })

            
        }
    }

</script>

<style scoped>
    .cart{
        display: flex;
        flex-direction: row;        
    }

    .descricaoCart{
        display: flex;
        flex-direction: column;
        margin-left: 4%;
    }

    .margins {
        margin-top: 1%;
        margin-left: 15%;
    }

    .botoes{
        margin-top: 100px;
    }

    .cores {
        background-color: #F9DAFA;
        border-color: #DE94A9;
        border-width: 2px;
    }
</style>