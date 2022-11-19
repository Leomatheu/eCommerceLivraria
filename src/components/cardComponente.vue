<template>
<div class="container py-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div class="col">
            <div class="card h-100 cardDesc cartao">
                <img src="https://picsum.photos/400/400" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title titulo">Título do card</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis labore, voluptates sapiente tempore soluta earum nam temporibus. Temporibus adipisci quidem unde debitis sunt nihil quod doloremque perferendis impedit, repellat natus?</p>
                    <div class="botoes">
                        <a href="#" class="btn btn-info m-2">Comprar</a>
                        <a href="#" class="btn btn-info m-2">Detalhes</a>
                    </div>
                </div>
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

        methods : {
            transforma (valor) {
                return String(valor)
            },
            
            detalhes(Id) {
                this.$router.push(`/detalheproduto/${Id}`)
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
    text-align: center;
    border-bottom-style: solid;
    border-width: 1.5px;
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
    border-top-style: solid;
    border-width: 1.5px;
    padding-top: 3%;
    padding-bottom: 0%;
}

a{
    text-decoration: none;
}
</style>