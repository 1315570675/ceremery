<template>
<div class="g-pop">
    <div class="pop-info">
        <div class="g-close"></div>
        <div class="pop-con">
            <div class="wx"></div>
            <p></p>
            <div class="call"></div>
            <p></p>
            <p></p>
        </div>
    
    </div>
</div>
    
</template>
<script>
export default {
    name: 'GPopInfo'
}
</script>


<style lang="scss" scoped>
.g-pop{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,.3)
}
.pop-info{
    width: 440px;
    height: 320px;
    background-color: rgba(255,255,255,.2)
    
}
</style>
