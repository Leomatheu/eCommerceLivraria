<template>
            <!-- alert de não sucesso no login -->
    <div class="alertaDeDados alert alert-danger alert-dismissible" v-show="this.faltaDados">
        <button type="button" class="btn-close" data-bs-dismiss="alert" @click="fechaAlertDanger()"></button>
        <strong> Seu cadastro está incompleto, favor verifique todos os campos !</strong> 
    </div>

    <!-- componente de cadastro de usuário -->
    <div class="div-pai" v-show="!this.cadastroFeito">        
        <form action="">
            <div>        
                <h3>Dados pessoais</h3>
            
                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Nome:</h5>
                    <input type="text" class="form-control" id="nome" placeholder="Insira seu nome" v-model="name" required>
                </div>

                <div class="edits-nascimento mb-3">
                    <h5 class="form-label">Data nascimento:</h5>
                    <input type="date" class="form-control" id="dtnascimento" v-model="born" required>
                </div>

                <div class="edits-nascimento mb-3">
                    <h5 class="form-label">CPF:</h5>
                    <input type="text" class="form-control" id="cpf" v-model="cpf" required>
                </div>

                <div>
                    <h5 class="form-label">Gênero:</h5><br>
                    <div Class="radioButon-pai">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="m" v-model="sexo">Masculino
                            <label class="form-check-label"></label>
                        </div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="f" v-model="sexo">Feminino
                            <label class="form-check-label"></label>
                        </div>            
                    </div>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Email:</h5>
                    <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail" v-model="email" required>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Telefone:</h5>
                    <input type="tel" class="form-control" id="telefone" placeholder="Insira seu telefone" v-model="phone" required>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Senha:</h5>
                    <input type="password" class="form-control" id="inputSenha" placeholder="Senha" v-model="senha" required>
                </div>
            </div>
            <br>  
            <div>
                <h3>Dados endereço</h3>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Rua:</h5>
                    <input type="rua" class="form-control" id="rua" placeholder="Informe sua rua" v-model="street" required>
                </div>

                <div class="edits-nascimento mb-3 mt-3">
                    <h5 class="form-label">Número:</h5>
                    <input type="number" class="form-control" id="numero" placeholder="Informe o número de sua residência" v-model="number" required>
                </div>

                <div class="edits-nascimento mb-3 mt-3">
                    <h5 class="form-label">Estado:</h5>
                    <select id=cbPais class="form-control" v-model="state">
                        <option value="" >Selecione seu estado</option>
                        <option value="AC">AC</option>
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
                    <input type="text" class="form-control" id="cidade" placeholder="Insira sua cidade" v-model="city" required>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Bairro:</h5>
                    <input type="text" class="form-control" id="bairro" placeholder="Insira seu bairro" v-model="neighborhood" required>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">Complemento:</h5>
                    <input type="text" class="form-control" id="complemento" placeholder="Ex. apartamento 0 bloco a" v-model="complement" required>
                </div>

                <div class="edits-nome mb-3 mt-3">
                    <h5 class="form-label">CEP:</h5>
                    <input type="text" class="form-control" id="cep" placeholder="Informe o cep de sua residência" v-model="cep" required>
                </div>
            </div>
            <br>
            <button type="submit" class="btn btn-primary" @click.prevent="addPerson()">Salvar dados</button>
        </form> 

    </div>

    <div v-show="this.cadastroFeito" class="CadastroFeito">           
        <h1>Cadastro realizado com sucesso !!</h1>

          <!-- botão de login -->
        <button class=" btn btn-lg btn-info" type="submit" @click.prevent="this.$router.push(`/`)">Ir para as compras !</button>
    </div>
    

</template>

<script>
import axios from 'axios';
export default {
 
    data () {
        return {
            name : null,
            born : null,
            cpf : null,
            sexo : null,
            email : null,
            phone : null,
            street : null,
            number : null,
            state : null,
            city : null,
            neighborhood : null,
            complement : null,
            cep : null,
            senha : null,
            cadastroFeito : false,
            faltaDados : false,

            endereco : {
                bairro : '',
                cep : '',
                cidade : '',
                complemento : '',
                endereco :  '',
                estado : '',
                numero : ''
            },

            cliente : {
                cpf :'',
                dataNascimento:'',
                email: '',
                genero: '',
                nome: '',
                senha :'',
                telefone :'',
                endereco:{
                    id : 3
                }

            }
        }
    },

    methods : {
        addPerson(){

            this.cliente.cpf = this.cpf
            this.cliente.dataNascimento = this.born
            this.cliente.email = this.email
            this.cliente.genero = this.sexo
            this.cliente.nome = this.name
            this.cliente.telefone = this.phone 
            this.cliente.senha = this.senha

            this.endereco.bairro = this.neighborhood
            this.endereco.cep = this.cep
            this.endereco.cidade = this.city
            this.endereco.complemento = this.complement
            this.endereco.endereco = this.street
            this.endereco.estado = this.state
            this.endereco.numero = this.number

            if ((this.cliente.cpf != null)||(this.endereco.bairro != null)){
                axios
                .post('http://localhost:8080/endereco', this.endereco)

                axios
                .post('http://localhost:8080/cliente', this.cliente)
                this.cadastroFeito = !this.cadastroFeito;
            }
            else{
                this.faltaDados = !this.faltaDados
            }            
        },

        fechaAlertDanger(){
            this.faltaDados = !this.faltaDados
        }
    }
}

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

.alertaDeDados {
    margin-top: 1.5%;
    margin-left: 1%;
    margin-right: 1%;
}

.CadastroFeito{
    width: 62%;
    text-align: center;
    margin-left: 15%;
    margin-top: 7%;
    margin-bottom: 12%;
}
</style>