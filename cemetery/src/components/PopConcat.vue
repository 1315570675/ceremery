<template>
    <div class="g-pop">
        <div class="wx">
            <div class="wx-1">
            </div>
        </div>
        <div class="call">
            <div class="call-1">
                <div class="c-1">
                    <p>客服热线</p>
                    <p>13381581757</p>
                </div>
            </div>
        </div>
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
        position: fixed;
        bottom: 50px;
        right: 20px;
        z-index: 999;
        .wx,.call,.go-top{
            cursor: pointer;
            width: 78px;
            height: 78px;
            background: url('./../../static/img/weixin@2x.png') no-repeat center;
            background-color: #D7D7D7;
            background-size: 46px 38px;
            margin-bottom: 10px;
            &:hover{
                background-color: #016835;
            }
        }
        .wx-1{
            width: 140px;
            height: 140px;
            position: absolute;
            background-color: #fff;
            left: -150px;
            background: url('./../../static/img/471562906034_.pic_hd@2x(1).png') no-repeat center;
            background-size: 130px;
            background-color: #D7D7D7;
            display: none;
            img{
                width: 130px;
                height: 130px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .wx:hover{
            .wx-1{
                display: block;
            }
        }
        .call-1{
            width: 140px;
            height: 100px;
            position: absolute;
            background: url('./../../static/img/摄图网_501226850拷贝.png') no-repeat;
            background-size: 140px 100px;
            left: -150px;
            display: none;
            position: relative;
            .c-1{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.3);
                left: 0;
                top: 0;
            }
            p{
                font-size: 14px;
                color: #fff;
                text-align: center;
                &:nth-of-type(1){
                    margin-top: 34px;
                }
            }
        }
        .call:hover{
            .call-1{
                display: block;
            }
        }
        .call{
            background: url('./../../static/img/tubiao210副本@2x.png') no-repeat center;
            background-size: 46px 46px;
            background-color: #D7D7D7;
        }
        .go-top{
            background: url('./../../static/img/you-2@2x.png') no-repeat center;
            background-size: 46px 27px;
            background-color: #D7D7D7;
        }
    }
</style>


