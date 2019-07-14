<template>
<div class="g-pop" v-if="isShowConcat">
    <div class="pop-info">
        <div class="g-close" @click="close"></div>
        <div class="pop-con">
            <div class="wx">
                <img src="./../../static/img/471562906034_.pic_hd@2x(1).png" alt="">
            </div>
            <p>安吉龙山源官方服务号</p>
            <p class="call">
                <img src="./../../static/img/tubiao210副本@2x.png" alt="">
                13381581757
            </p>
            <p>添加官方服务号或拨打24小时热线咨询</p>
            <p>价格或优惠活动</p>
        </div>
    
    </div>
</div>
    
</template>
<script>
export default {
    name: 'GPopInfo',
    data(){
        return {
            isShowConcat: true
        }
    },
    methods:{
        close(){
            this.isShowConcat = false;
        }
    }
}
</script>


<style lang="scss" scoped>
.g-pop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
.g-close{
    width: 40px;
    height: 40px;
    background: url('./../../static/img/cha@2x.png') no-repeat center;
    background-size: 20px;
    float: right;
    margin: 10px;
    cursor: pointer;
}
.pop-info{
    width: 440px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: url('./../../static/img/fafdsfdsaf3.png') no-repeat center;
    background-size: 420px 300px;
    background-color: rgba(#fff,.2);
    text-align: center;
    color: #fff;
    font-size: 15px;
    p{
        margin-top: 9px;
        img{
            width: 24px;
        }
    }
    .call{
        font-size: 25px;
        margin-top: 2px;
        vertical-align: top;
    }
    .wx{
        width: 141px;
        height: 141px;
        margin: 29px auto 0;
        img{
            width: 141px;
        }
    }
}
</style>
