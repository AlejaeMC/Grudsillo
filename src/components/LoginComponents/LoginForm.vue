<template>
    <div class="row">
       <!-- <router-link to="/prueba" tag="button" class="btn">Prueba</router-link>-->
        <form class="form-container col s10 m6 offset-s1 offset-m3">
            <h3 class="center-align">Iniciar Sesion</h3>
            <div class="input-field col s8 offset-s2">
                <input id="userInput"
                       type="text"
                       class="validate"
                       v-model="userLogin.userName"
                >
                <label for="userInput" class="">Usuario</label>
            </div>

            <div class="input-field col s8 offset-s2">
                <input id="userPassword"
                       type="password"
                       class="input-field"
                       v-model="userLogin.userPassword"
                >
                <label for="userPassword"
                       class="">Contraseña</label>
            </div>

            <div class="input-field col s8 offset-s2 btn-container">
                <div class="row">
                    <div class="col s12 m6">
                        <label>
                            <input type="checkbox" id="rememberMe" v-model="userLogin.rememberMe">
                            <span>Recuerdame</span>
                        </label>
                    </div>
                    <div class="center-align">
                        <button
                                @click.prevent="login"
                                @keypress.enter.prevent="login"
                                class="btn-large">Login</button>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return{
                userLogin:{
                    userName:'',
                    userPassword:'',
                    rememberMe:false
                }
            }
        },
        methods:{
            login(){
                /*var userData ={
                    username:this.userLogin.userName,
                    password:this.userLogin.userPassword
                }*/
                setTimeout(()=> {
                    this.$router.replace('/home')
                },1000)
            }
        }
    }
</script>

<style scoped>
    .form-container{
        background-color: #ced4d9;
        padding: 20px;
        border-radius: 20px;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.36);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.36);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.36);
    }
    .btn-container{
        margin-bottom: 25px;
    }
</style>