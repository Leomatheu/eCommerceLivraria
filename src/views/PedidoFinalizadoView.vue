<template>
    <div>
        <div class="div-imagem-loja">
            <img src="/IMG/papelaria.png" alt="logotipoloja" class="imagem-pedido-finalizado">
        </div>

        <div class="div-text-pedido-finalizado">            
            <h3>Seu pedido foi finalizado com sucesso !!</h3>
            <h4>Nós da <strong>Papelaria Rosa</strong> agredecemos por sua preferência, volte logo :)</h4>
            
        </div>
    </div>

</template>

<script>


</script>

<style scoped>
.div-imagem-loja{
    display: flex;
    justify-content: center;
    margin-top: 35px;
}
.imagem-pedido-finalizado{
    width: 275px;
}

.div-text-pedido-finalizado{
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
}
</style>