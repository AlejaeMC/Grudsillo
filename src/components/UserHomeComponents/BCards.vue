<template>
    <div>
        <div class="card">
            <div class="card-image">
                <img :src="imagen">
                <span class="card-title">{{id}}</span>
            </div>
            <div class="card-content">
                <p>{{descripcion}}</p>
            </div>
            <div class="card-action">
                <a href="#">{{ubicacion}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BCards",
        props:['imagen','id','descripcion','ubicacion'],

    }
</script>

<style scoped>
    .card:hover{
        background-color: lightgray;
    }
</style>