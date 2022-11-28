<template>
    <!-- componente de login -->
    <div class="container mt-4">

        <!-- alert de sucesso no login -->     
        <div class="alert alert-success alert-dismissible" v-show="this.logado">
            <button type="button" class="btn-close" data-bs-dismiss="alert" @click="fechaAlertSucsess()"></button>
            <strong> Login efetuado com sucesso !</strong> Bem vindo {{ nomeData }}
        </div>

        <!-- alert de não sucesso no login -->
        <div class="alert alert-danger alert-dismissible" v-show="this.naoLogado">
            <button type="button" class="btn-close" data-bs-dismiss="alert" @click="fechaAlertDanger()"></button>
            <strong> Falha no login !</strong> E-mail ou senha incorreto.
        </div>


        <div class="row align-items-center">
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-#DE94A9 needs-validation" novalidate>

                    <!-- input de e-mail -->
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model="email" required>
                        <label for="inputEmail">E-mail</label>
                    </div>

                    <!-- input de senha -->
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="inputSenha" placeholder="Senha" v-model="senha" required>
                        <label for="inputSenha">Senha   </label>
                    </div>
                    
                    <div class="ck-link-form"> 
                        <!-- checkbox de lembrar cadastro -->
                        <div class=" checkbox margins">
                            <label>
                                <input type="checkbox" value="lembrar">Lembrar
                            </label>
                        </div>


                        <div class="margins">
                            <a href="" class="text-decoration-none" @click.prevent="formCadastro()">Cadastre-se</a>
                        </div>                                    
                    </div>

                    <!-- botão de login -->
                    <button class="w-100 btn btn-lg btn-info" type="submit" @click.prevent="validaAcesso ()">Entrar</button>
                </form>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'loginComponente',

    data () {
        return {
            //variáveis que recebem os valores do campo
            email : null,
            senha : null,

            //variáveis que são recuperadas do banco
            nomeData : "Leonardo",
            emailData : "leonardo@teste.com",
            senhaData : "leo013595",

            //variáveis de validação dos alerts
            logado : false,
            naoLogado : false
        }
    },

    methods : {
        validaAcesso () {
            if ((this.senha == this.senhaData)&&(this.email == this.emailData)){
                this.logado = !this.logado
                this.senha = null
                this.email = null
            }
            else{
                this.naoLogado = !this.naoLogado
                this.senha = null
                this.email = null
            }
        },

        formCadastro(){
            this.$router.push(`/facaseucadastro`)
        },

        fechaAlertSucsess(){
            this.logado = !this.logado          
        },

        fechaAlertDanger() {
            this.naoLogado = !this.naoLogado
        }
    }
}

</script>

<style scoped>
.ck-link-form{
    display: flex;
    flex-direction: row;
    margin-top: 2%; 
}

.margins {
    margin-left: 15%;
    margin-bottom: 3.5%;
}

</style>