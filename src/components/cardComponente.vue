<template> 
<div>
    <!-- componente do cartão dos itens apresentados nas rotas -->
    <div class="cartao card" style="width:315px"> 
        <!-- foto do item -->
        <img class="foto card-img-top" :src="pFoto" alt="Card image"> 

        <div class="cardDesc card-body"> 
            <!-- título do card -->
            <h5 class="titulo card-title">{{ pNome }}</h5>
            <!-- descrição do item -->
            <p class="card-text">{{ pDescricao }}</p>
            <!-- preço do item -->
            <div class="preco">
                <h3>{{ transforma(pValor)}}</h3>
                <p class="unidade">unidade</p>
            </div>

            <!-- botões de adicionar ao carrinho e detalhes do item -->
            <div class="botoes">
                <a href="#" class="botoes btn btn-info" @click.prevent="adicionaCart()" v-show="!this.add">Adicionar ao carrinho</a>           
                <button type="button" class="btn btn-outline-primary" @click.prevent="detalhes(pId)">Detalhes</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'cardComponente',

        props : {
            pFoto : String,
            pNome : String,
            pDescricao : String,
            pValor : Number,
            pId : Number
        },

        data () {
            return {
                add : false
            }
        },

        methods : {
            transforma (valor) {
                return Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(valor)                
            },
            
            detalhes(Id) {
                this.$router.push(`/detalheproduto/${Id}`)
            },

            adicionaCart () {
                const item = {
                    id : this.pId,
                    nome : this.pNome,
                    descricao : this.pDescricao,
                    valor : this.pValor,
                    foto : this.pFoto,
                    quantidade : 1,
                    totalITem : this.pValor
                }

                let lista = []

                lista.push(item)

                if (localStorage.getItem("cart") == null) {
                    localStorage.setItem("cart",JSON.stringify(lista))
                }
                else{
                    let newData = JSON.parse(localStorage.getItem("cart"))
                    newData.push(item)
                     
                    localStorage.setItem("cart",JSON.stringify(newData))
                    
                }

                this.$emit('addCartSuccess', true)
                this.add = !this.add
            }
        },
        
    }

</script>

<style scoped>
.cardDesc {
    background-color: #F9DAFA;
}

.cartao{
    border-style: solid;
    border-width: 3px;
    border-color: #DE94A9;
    
}

.titulo {
    margin-bottom: 15px;
    text-align: center;
    text-shadow: 2px 2px 5px lightskyblue;
}

.preco {
    border-top-style: solid;
    border-top-width: 2px;
    border-color: #DE94A9;
    display: flex;
    justify-content: space-evenly;
    padding-top: 1%;
    padding-bottom: 5%;
}

.unidade{
    display: flex;
    align-self: auto
}

.botoes {
    display: flex;
    justify-content: space-around;
    padding-top: 3%;
    padding-bottom: 0%;
}

a{
    text-decoration: none;
}
</style>