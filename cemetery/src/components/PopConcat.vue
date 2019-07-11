<template>
    <div class="g-pop">
        <div class="go-top" @click="goTop"></div>
    </div>
</template>

<script>
export default {
    name: 'GPop',
    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        goTop(){
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .g-pop{
        width: 100px;
        height: 100px;
        background: red;
        position: fixed;
        bottom: 10px;
        right: 10%;
        .go-top{
            width: 100%;
            height: 30px;
        }
    }
</style>


