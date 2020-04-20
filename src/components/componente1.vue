<template>
    <div>
        <div v-for="persona in personasFiltradas" :key="persona.id">
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img :src="persona.imagen">
                            <span class="card-title">{{persona.id}}</span>
                        </div>
                        <div class="card-content">
                            <p>{{persona.nombre}}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">{{persona.edad}}</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div>
            <div class="input-field ">
                <input  id="input1" type="text" class="validate" v-model="nombre">
                <label for="input1">Nombre</label>
            </div>
            <div class="input-field ">
                <input  id="input2" type="number" class="validate" v-model="id">
                <label for="input2">id</label>
            </div>
            <div class="input-field ">
                <input  id="input3" type="number" class="validate" v-model="edad">
                <label for="input3">edad</label>
            </div>
            <div class="input-field ">
                <input  id="input4" type="text" class="validate" v-model="imagen">
                <label for="input4">imagen</label>
            </div>
            <p>{{nombre}} {{id}} {{edad}}</p>
            <button @click="insertarPersona({id:id,nombre:nombre,edad:edad,imagen:imagen})" class="btn">Insertar</button>
        </div>
        <hr>
        <div v-show="bandera">
            <componente1></componente1>
        </div>
        <button class="btn" @click="cambio">Bandera</button>

    </div>
</template>

<script>
    import M from 'materialize-css'
    import Componente1 from "./components/Componente1";

    export default {
        name: "Componente1",
        data(){
            return {
                bandera:true,
                personas:[
                    {id:1,nombre:'Jaime',edad:18,imagen:'https://cdn.discordapp.com/attachments/690593901999816798/691710728918401085/vista-alto-angulo-varias-herramientas-trabajo-sobre-fondo-madera_23-2147865401.jpg'},
                    {id:2,nombre:'Jaime2',edad:18,imagen:'https://cdn.discordapp.com/attachments/690593901999816798/691710728918401085/vista-alto-angulo-varias-herramientas-trabajo-sobre-fondo-madera_23-2147865401.jpg'},
                    {id:3,nombre:'Jaime3',edad:18,imagen:'https://cdn.discordapp.com/attachments/690593901999816798/691710728918401085/vista-alto-angulo-varias-herramientas-trabajo-sobre-fondo-madera_23-2147865401.jpg'},
                    {id:4,nombre:'Jaime4',edad:18,imagen:'https://cdn.discordapp.com/attachments/690593901999816798/691710728918401085/vista-alto-angulo-varias-herramientas-trabajo-sobre-fondo-madera_23-2147865401.jpg'},
                    {id:5,nombre:'Jaime5',edad:18,imagen:'https://cdn.discordapp.com/attachments/690593901999816798/691710728918401085/vista-alto-angulo-varias-herramientas-trabajo-sobre-fondo-madera_23-2147865401.jpg'}
                ],
                id:'',
                nombre:'',
                edad:'',
                imagen:''
            }
        },
        components:{
            Componente1,
        },
        methods:{
            cambio(){
                this.bandera=!this.bandera;
            },
            insertarPersona(myObject){
                this.personas.push(myObject);
            }
        },
        computed:{
            personasFiltradas(){
                return this.personas.filter(persona => persona.id>2);
            }
        },
        mounted() {
            M.AutoInit();
        }
    }
</script>

<style scoped>

</style>