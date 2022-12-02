<template>
    <!-- componente header -->
    <div class="margem">
        <nav class="navbarLivra navbar navbar-expand-sm">
            <div class="container container-fluid">
                <a class="logo navbar-brand" href="javascript:void(0)">
                    <router-link to="/"> <img :src="logoTipo" :alt="alt" height="110" width="115"> </router-link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <!-- div com os itens apresentados no menu -->
                <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav me-auto">
                    <!-- home -->
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/">Home</a>
                    </li>
                    <!-- canetas -->
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/caneta">Canetas</a>
                    </li>
                    <!-- lápis -->
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/lapis">Lápis</a>
                    </li>
                    <!-- cadernos -->
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/caderno">Cadernos</a>
                    </li>
                    <!-- caneteiros -->
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/portacaneta">Caneteiro</a>
                    </li>
                    
                </ul>
                <!-- div dos botões à direita da navbar -->
                <div class="botoes-div">
                    <form class="d-flex">
                        <!-- campo de busca e botão de busca -->
                        <input class="form-control me-2" type="text" placeholder="Buscar">
                        <button class="btn btn-info" type="button">Buscar</button>                    
                    </form>
                    <span class="botoes">
                        <!-- botão de login -->
                        <button class="btn btn-info"><a href="/login" class="cadastro">Login</a></button>
                    </span>                    
                    <span class="botoes">
                        <!-- botão carrinho de compras -->
                        <button class="btn btn-info" @click="this.$router.push(`/carrinho`)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                        </button>
                    </span>
                </div>
                
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name : 'headerComponente',

        props : ["logoTipo", "alt"],

        methods : {
            idRouter(){
                VueRouter.push({name : 'login'})
            }
        }
    }

</script>

<style scoped>
.navbarLivra {
    background-color:#AAECFA;
    border-style: solid;
    border-width: 3px;
    border-color: #DE94A9;
    display: flex;
    justify-content: space-evenly;
    width: 99.3%;
    margin-top: 0.4%;
    height: -10%;

}

.itensMenu {
    color: black;    
    padding-right: 5%;
}

.letra{
    font-size: 28px;
}

.logo{
    margin-right: 8%;
}


.margem{
    display: flex;
    justify-content: center;
}
.cadastro {
    text-decoration: none ;
    color: black;    
    padding-right: 5%;
}

.botoes-div{
    display: flex;
    flex-direction: row;
}

.botoes{
    margin-left: 3px;
}
</style>