<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="g-progress">
                <h1>选购流程
                    <div class="btn">
                        <a href="/">首页</a>
                        <img src="./../../static/img/you-2111@2x.png" alt="">
                        <span>购墓流程</span>
                    </div>
                </h1>
                
                <img src="./../../static/img/liucheng-1.png" alt="" class="pro-logo">
            </div>
            <div class="g-progress">
                <h1>后续流程</h1>
                <img src="./../../static/img/liucheng-2.png" alt="" class="pro-logo">
            </div>
        </slot>
    </g-temp>
</template>
<script>
export default {
    data(){
        return {
            isHome: false
        }
    }
}
</script>
<style lang="scss" scoped>
.g-progress{
    width: $min-width;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 60px;
    h1{
        height: 44px;
        color: #016835;
        font-size: 25px;
        font-weight: 400;
        border-bottom: 1px dashed #D7D7D7;
        .btn{
            float: right;
            color: #D7D7D7;
            font-size: 18px;
            a{
                color: #D7D7D7;
                font-size: 18px;
                &:hover{
                    color: #016835;
                }
            }
            img{
                width: 9px;
                vertical-align: top;
                margin-top: 2px;
                margin: 2px 9px 0 9px;
            }
            span{
                cursor: default;
            }
        }
    }
    .pro-logo{
        width: 927px;
        height: 299px;
        display: block;
        margin: 60px auto 0;
    }
}
</style>


