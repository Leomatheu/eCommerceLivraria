<template>
    <div class="margem">
        <nav class="navbarLivra navbar navbar-expand-sm">
            <div class="container container-fluid">
                <a class="logo navbar-brand" href="javascript:void(0)">
                    <router-link to="/"> <img :src="logoTipo" :alt="alt" height="110" width="115"> </router-link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav me-auto">
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/">Home</a>
                    </li>
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/caneta">Canetas</a>
                    </li>
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/lapis">Lápis</a>
                    </li>
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/caderno">Cadernos</a>
                    </li>
                    <li class="itensMenu nav-item">
                    <a class="letra nav-link" href="/portacaneta">Caneteiro</a>
                    </li>
                    
                </ul>
                <form class="botao d-flex">
                    <input class="form-control me-2" type="text" placeholder="Buscar">
                    <button class="btn btn-info" type="button">Buscar</button>                    
                </form>
                <span>
                    <button class="btn btn-info" type="button"><span class="icon"><i class="fa fa-user"></i></span></button>
                </span>
                
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name : 'headerComponente',

        props : ["logoTipo", "alt"]
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

.botao{
    padding-right: 0.5%;
}

.margem{
    display: flex;
    justify-content: center;
}
</style>