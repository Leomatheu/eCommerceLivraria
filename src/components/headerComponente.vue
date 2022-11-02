<template>
    <div>
        <nav class="navbar" style="background-color: #EFA4F2;">
            <div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>                
            </div>
            <router-link to="/"> <img :src="logoTipo" :alt="alt"> </router-link>
            <router-link to="/">Home</router-link> |
            <router-link to="/contato">Contatos</router-link>
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

</style>