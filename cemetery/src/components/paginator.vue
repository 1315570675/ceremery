<template>
    <div class="g-paginator">
        <div class="pre-page">上一页</div>
        <div class="page-1 num-page-sel">1</div>
        <div class="page-2">2</div>
        <div class="next-page">下一页</div>
        <div class="num-page">共2页，跳转到</div>
        <div class="input-page">
            <input type="text">
            <span>页</span>
        </div>

    </div>
</template>
<script>
export default {
    name: 'GPage',
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.g-paginator{
    width: 500px;
    overflow: hidden;
    color: #AAAAAA;
    margin-left: 453px;
    margin-top: 64px;
    .pre-page,.next-page{
        width: 70px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #AAAAAA;
        float: left;
        margin-right: 9px;
        font-size: 18px;
    }
    .page-1,.page-2{
        border: 1px solid #AAAAAA;
        float: left;
        margin-right: 9px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            background-color: #016835;
            color: #ffffff;
            border: 1px solid #016835;
        }
    }
    .num-page{
        float: left;
        line-height: 30px;
        font-size: 18px;
    }
    .num-page-sel{
        background-color: #016835;
        color: #ffffff;
        border: 1px solid #016835;
        
    }
    .input-page {
        float: left;
        font-size: 18px;
        input{
            height: 30px;
            width: 30px;
            border: 1px solid #AAAAAA;
            text-align: center;
            color: #AAAAAA;
            font-size: 18px;
            margin: 0 10px;
        }
    }
}
</style>

