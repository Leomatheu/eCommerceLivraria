<template>
    <div class="div-pai">
        <div class="foto">
            <img class="float-end" :src="this.produto.foto" alt="New York" style="width:550px">
        </div>
        <div class="div-pai-conteudo">
                <h1 class="nome">{{ this.produto.nome }}</h1>
            <br>
            <div>
                <h3 class="descricao">{{ this.produto.descricao1 }}</h3>
            </div>
            <div>
                <h4 class="descricao">{{ this.produto.descricao2 }}</h4>
            </div>
            <br>
            <h2>{{transforma(this.produto.valor)}}</h2>
            <br>
            <button type="button" class="btn btn-info btn-lg" @click="adicionaCart()">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            produto : []
        }
    }, 

    methods : {
        transforma (valor) {
            return Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(valor)                
        },

        adicionaCart () {
                const item = {
                    id : this.produto.id,
                    nome : this.produto.nome,
                    descricao : this.produto.descricao1,
                    valor : this.produto.valor,
                    foto : this.produto.foto,
                    quantidade : null,
                    totalITem : null
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

                this.$router.push(`/carrinho`)
        }
    
    },
    
    mounted () {
        axios
        .get('http://localhost:8080/produto/'+this.$route.params.id)
        .then(resp => this.produto = resp.data)
    },
}
</script>

<style scoped>
.div-pai{
    display: flex;
    flex-direction: row;
}

.foto { 
    border-style: solid;
    border-color :#DE94A9;
    display: flex;
    justify-content: flex-start;
    margin-left: 0.7%;
    margin-top: 0.7%;
    margin-right: 2%;
    margin-bottom : 1%;
}

.conteudo{
    border-style: solid;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 3%;
    margin-bottom : 2%;
    margin-right: 30px;
}

.div-pai-conteudo {
    padding: 2%;
}

.nome {
    text-shadow: 2px 2px 5px lightskyblue
}
</style>