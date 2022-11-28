<template>
    <div class="div-pai">
        <div class="foto">
            <img class="float-end" src="https://picsum.photos/400/400" alt="New York" style="width:550px">
        </div>
        <div class="div-pai-conteudo">
                <h1 class="nome">{{ "Canetas Bic Coloridas" }}</h1>
            <br>
            <div>
                <h5 class="descricao">{{ "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia." }}</h5>
            </div>
            <br>
            <h2>R$ 1,55</h2>
            <br>
            <button type="button" class="btn btn-info btn-lg">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            produto : [{
                id : 1,
                src : "https://31750.cdn.simplo7.net/static/31750/sku/papelaria-canetas-caneta-cis-spiro-unidade--p-1547826712518.jpg",
                alt : "Foto descritiva produto",
                nome : "Canetas Bic Coloridas",
                descricao : "Lorem ipsum per etiam feugiat pharetra pellentesque, vel tristique quisque conubia ornare, consectetur habitant metus molestie lacinia.",
                preco : "1.55"
            }],
        }
    }, 
    
    mounted(){
        const id = this.$route.params.id
        
        if(id){
            console.log(id)
        }
    }
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
}

.div-pai-conteudo {
    padding: 2%;
}

.nome {
    text-shadow: 2px 2px 5px lightskyblue
}
</style>