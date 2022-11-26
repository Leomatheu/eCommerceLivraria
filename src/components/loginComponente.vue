<template>
    <!-- componente de login -->
    <div class="container mt-4">
        <div class="row align-items-center">
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-#DE94A9">
                    <!-- input de e-mail -->
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
                        <label for="inputEmail">E-mail</label>
                    </div>
                    <!-- input de senha -->
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="inputSenha" placeholder="Senha">
                        <label for="inputSenha">Senha   </label>
                    </div>
                    <!-- checkbox de lembrar cadastro -->
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="lembrar">Lembrar
                        </label>
                    </div>
                    <!-- botão de login -->
                    <button class="w-100 btn btn-lg btn-info" type="submit">Entrar</button>
                </form>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'loginComponente'
}

</script>