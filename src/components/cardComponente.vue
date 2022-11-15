<template>
    <div class="container">
      <div class="card card" style="width:315px"> <!--vfor entra nessa linha pra repetir a renderização dos cards-->
        <img class="foto card-img-top" :src="pFoto" alt="Card image">
        <div class="cardDesc card-body"> 
          <h4 class="titulo card-title">{{ pNome }}</h4>
          <p class="card-text">{{ pDescricao }}</p>
          <div class="preco">
            <h3>R$ {{ transforma(pValor) }}</h3>
            <p class="unidade">unidade</p>
          </div>
          <div class="botoes">
            <a href="#" class="botoes btn btn-info">Comprar</a>
            <button type="button" class="btn btn-outline-primary"><a href="/detalheproduto">Ver detalhes</a></button>
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
            pValor : Number
        },

        methods : {
            transforma (valor) {
                return String(valor)
            }
        },
        
    }

</script>

<style scoped>
.cardDesc {
    background-color: #F9DAFA;
}

.card{
    border-style: solid;
    border-width: 3px;
    border-color: #DE94A9;
    
}

.foto {
    border-style: solid;
    border-width: 2px;
    border-color: #DE94A9;
}

.titulo {
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
}

a{
    text-decoration: none;
}
</style>