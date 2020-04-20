<template>
    <div class="row">
        <user-home-sidenav
                :image="user.image"
                :username="user.username">
        </user-home-sidenav>
        <div class="card-container">
            <div v-for="number in 10" :key="number">
                <b-cards
                        :id="bache.id"
                        :imagen="bache.imagen"
                        :descripcion="bache.descripcion"
                        :ubicacion="bache.ubicacion"
                ></b-cards>
            </div>
        </div>
    </div>
</template>

<script>
    import UserHomeSidenav from "@/components/UserHomeComponents/UserHomeSidenav";
    import BCards from "@/components/UserHomeComponents/BCards";
    import userImage from '@/assets/logo.png'
    import M from 'materialize-css'

    export default {
        name: "UserHome",
        data(){
            return{
                bache:{
                    imagen:'',
                    id:'',
                    descripcion:'MAMA BOTE POR AMLO X2',
                    ubicacion:''
                },
                user:{
                    image:userImage,
                    username:'Anaya Dominguez'
                }
            }
        },
        components:{
            UserHomeSidenav,
            BCards
        },
        mounted(){
            M.AutoInit()
        }
    }
</script>

<style scoped>

    .card-container{
        margin-left: 10px;
        margin-right: 10px;
    }

    @media only screen and (min-width: 992px) {
        .card-container{
            margin-left: 50vh;
            margin-right: 10vh;
        }
    }

</style>