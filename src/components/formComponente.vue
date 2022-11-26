<template>
    <!-- componente de cadastro de usuário -->
    <div class="div-pai">        
        <form action="">
            <div>        
                <h3>Dados pessoais</h3>
            
                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Nome:</h5>
                    <input type="text" class="form-control" id="nome" placeholder="Insira seu nome">
                </div>

                <div class="edits-nascimento mb-3">
                    <h5 class="form-label">Data nascimento:</h5>
                    <input type="date" class="form-control" id="dtnascimento">
                </div>

                <div class="edits-nascimento mb-3">
                    <h5 class="form-label">CPF:</h5>
                    <input type="text" class="form-control" id="cpf">
                </div>

                <div>
                    <h5 class="form-label">Gênero:</h5><br>
                    <div Class="radioButon-pai">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1">Masculino
                            <label class="form-check-label"></label>
                        </div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1">Feminino
                            <label class="form-check-label"></label>
                        </div>            
                    </div>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Email:</h5>
                    <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail">
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Telefone:</h5>
                    <input type="tel" class="form-control" id="telefone" placeholder="Insira seu telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                </div>
            </div>
            <br>  
            <div>
                <h3>Dados endereço</h3>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Rua:</h5>
                    <input type="rua" class="form-control" id="email" placeholder="Informe sua rua">
                </div>

                <div class="edits-nascimento mb-3 mt-3">
                    <h5 class="form-label">Número:</h5>
                    <input type="number" class="form-control" id="numero" placeholder="Informe o número de sua residência">
                </div>

                <div class="edits-nascimento mb-3 mt-3">
                    <h5 class="form-label">Estado:</h5>
                    <select id=cbPais class="form-control">
                        <option value="" >Selecione seu estado</option>
                        <option value="AC" >AC</option>
                        <option value="AL" >AL</option>
                        <option value="AM" >AM</option>
                        <option value="BA" >BA</option>
                        <option value="CE" >CE</option>
                        <option value="ES" >ES</option>
                        <option value="GO" >GO</option>
                        <option value="MA" >MA</option>
                        <option value="MT" >MT</option>
                        <option value="MS" >MS</option>
                        <option value="MG" >MG</option>
                        <option value="PA" >PA</option>
                        <option value="PB" >PB</option>
                        <option value="PR" >PR</option>
                        <option value="PE" >PE</option>
                        <option value="PI" >PI</option>
                        <option value="RJ" >RJ</option>
                        <option value="RN" >RN</option>
                        <option value="RS" >RS</option>
                        <option value="RO" >RO</option>
                        <option value="RR" >RR</option>
                        <option value="SC" >SC</option>
                        <option value="SP" >SP</option>
                        <option value="SE" >SE</option>
                        <option value="TO" >TO</option>
                    </select>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Cidade:</h5>
                    <input type="text" class="form-control" id="cidade" placeholder="Insira sua cidade">
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Bairro:</h5>
                    <input type="text" class="form-control" id="bairro" placeholder="Insira seu bairro">
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Complemento:</h5>
                    <input type="text" class="form-control" id="complemento" placeholder="Ex. apartamento 0 bloco a">
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">CEP:</h5>
                    <input type="text" class="form-control" id="cep" placeholder="Informe o cep de sua residência">
                </div>

            </div>
            <br>
            <button type="submit" class="btn btn-primary">Salvar dados</button>
        </form>        
    </div>
    

</template>

<script>


</script>

<style scoped>
.div-pai {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3%;
    padding-left: 30%;
}
.edits-nome {
    width: 50%;
}

.edits-nascimento {
    width: 30%;
}
.radioButon-pai{
    display: flex;
}
.radioButton-filho{
    margin-left: 2%;
    margin-top: none;
}
</style>