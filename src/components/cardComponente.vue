<template>
    <div class="container">
      <div class="card card" style="width:315px"> <!--vfor entra nessa linha pra repetir a renderização dos cards-->
        <img class="foto card-img-top" src="https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg" alt="Card image">
        <div class="cardDesc card-body"> 
          <h4 class="titulo card-title">{{ pNome }}</h4>
          <p class="card-text">{{ pDescricao }}</p>
          <div class="preco">
            <h3>R$ {{ transforma(pValor) }}</h3>
            <p class="unidade">unidade</p>
          </div>
          <a href="#" class="btn btn-success">Comprar</a>
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
        }
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
    padding-bottom: 3%;
}

.unidade{
    display: flex;
    align-self: auto
}
</style>