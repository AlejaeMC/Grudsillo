<template>
    <div>
        <button data-target="slide-out" class="sidenav-trigger hide-on-large-only btn-flat" style="margin: 10px" >
            <i class="material-icons red-text">menu</i>
        </button>
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li><div class="user-view">
                <div class="background">
                    <img :src="background">
                </div>
                <a><img class="circle" :src="image"></a>
                <a><span class="white-text name">{{username}}</span></a>
            </div></li>
            <li><a class="waves-effect">Levantar Reportes</a></li>
            <li><a class="waves-effect">Mis Reportes</a></li>
            <li><a class="waves-effect" href="">Reportes</a></li>
            <li><div class="divider"></div></li>
            <li><a class="waves-effect">Cerrar Sesion</a></li>
        </ul>

    </div>
</template>

<script>
    import bg from '@/assets/asphalt_01.png'
    export default {
        name: "UserHomeSidenav.vue",
        props: ['image', 'username'],
        data(){
            return{
                background:bg

            }
        }

    }
</script>



<style scoped>
    i{
        font-size: 5em;
    }
</style>