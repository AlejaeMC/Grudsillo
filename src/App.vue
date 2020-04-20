<template>
    <div id="app">
        <router-view></router-view>
    </div>

</template>

<script>
    import M from 'materialize-css'
    export default {
        mounted(){
            M.AutoInit()
        }
    }
</script>
<style scoped >

</style>