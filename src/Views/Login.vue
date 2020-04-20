<template>
    <div class="login-view">
        <div class="degradado">
            <div style="padding-top: 25vh">
                <login-form></login-form>
                <div class="center-align">
                    <a href="">Aun no tengo cuenta</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from "../components/LoginComponents/LoginForm";
    export default {
        name: "Login",
        components:{
            LoginForm
        }
    }
</script>

<style scoped>
    .login-view{
        background-image: url("https://cdn.discordapp.com/attachments/690593901999816798/692088259148251216/Home-common-tools_1920x1080.jpg");
        height: 100vh;
    }
    .degradado{
        z-index: 200;
        height: 100vh;
        background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
        position: relative;
    }
</style>