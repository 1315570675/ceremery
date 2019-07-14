<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="g-new">
               <div class="new-con">
                    <div class="new-left">
                        <div class="hot-new">
                            <div class="hot-title">
                                接送服务
                            </div>
                            <div class="hot-con">
                                <p>免费专车上门接送服务</p>
                                <p>敬请拨打13381581757预约</p>
                            </div>
                        </div>
                        <div class="fuxiang">
                           <img src="./../../static/img/foxiang2.png" alt="">
                        </div>
                    </div>
                    <div class="new-center">
                        <div class="new-left-title">
                            <div class="left-title-1">热门墓地</div>
                            <div class="left-title-2">
                                <a href="/">首页</a>
                                <img src="./../../static/img/you-2111@2x.png" alt="">
                                <span>福位展示</span>
                            </div>
                        </div>
                        <div class="new-hot">
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/16e3f2c15f9302f3af7ee774764b6115@2x.png" alt="">
                                <div class="hot-cover">
                                    <p>壁葬</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/dbbfbf8d4ca4f57209b5f07e36e0c3d1yty.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓4型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/7b92748837bcb37945f7e40552c0db24 拷贝.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓2型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                        </div>
                        <div class="new-left-title">
                            <div class="left-title-1">福位展示</div>
                            
                        </div>
                        <div class="new-hot">
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/16e3f2c15f9302f3af7ee774764b6115@2x.png" alt="">
                                <div class="hot-cover">
                                    <p>壁葬</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/dbbfbf8d4ca4f57209b5f07e36e0c3d1yty.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓4型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/7b92748837bcb37945f7e40552c0db24 拷贝.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓2型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 4.png" alt="">
                                <div class="hot-cover">
                                    <p>高档大富豪</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 5.png" alt="">
                                <div class="hot-cover">
                                    <p>大富豪</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 6.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓3型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                             <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 7.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 8.png" alt="">
                                <div class="hot-cover">
                                    <p>高档大富豪</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                            <div class="hot-item" @click="show">
                                <img src="./../../static/img/图层 9.png" alt="">
                                <div class="hot-cover">
                                    <p>艺术墓5型</p>
                                    <p>墓地面积：5m²</p>
                                    <p>售价约：20000元</p>
                                </div>
                            </div>
                        </div>
                        <g-page></g-page>
                    </div>
                    <div class="new-right">
                        <div class="hot-new">
                            <div class="hot-title">
                                热门资讯
                                <img src="./../../static/img/youyou-@2x.png" alt="">
                            </div>
                            <div class="hot-con">
                                <div class="hot-item">
                                    <img src="./../../static/img/fjdkjfakjd2@2x.png" alt="">
                                    <span>天星派风水传人付长春</span>
                                </div>
                                <div class="hot-item">
                                    <img src="./../../static/img/fjdkjfakjd2@2x.png" alt="">
                                    <span>安吉龙山源传承800年</span>
                                </div>
                                <div class="hot-item">
                                    <img src="./../../static/img/fjdkjfakjd2@2x.png" alt="">
                                    <span>坟墓阴宅风水中的禁忌</span>
                                </div>
                                <div class="hot-item">
                                    <img src="./../../static/img/fjdkjfakjd2@2x.png" alt="">
                                    <span>"风水师、殡仪师、职业</span>
                                </div>
                                <div class="hot-item">
                                    <img src="./../../static/img/fjdkjfakjd2@2x.png" alt="">
                                    <span>适合结婚的黄道吉日集</span>
                                </div>
                            </div>
                        </div>
                        <div class="concat">
                            <div class="concat-cover">
                                <p>客服热线：0571-2222333</p>  
                                <p>24小时热线：13567890999</p>
                            </div>
                        </div>
                        <div class="fuxiang">
                            <img src="./../../static/img/foxiang2.png" alt="">
                        </div>
                    </div>
               </div>
            </div>
            <div class="g-dialog" v-show="maxShow">
                <div class="dial-con">
                    <img src="./../../static/img/dbbfbf8d4ca4f57209b5f07e36e0c3d1 拷贝 2.png" alt="" class="img">
                    <div class="con-right">
                        <h2>艺术墓</h2>
                        <p>所属园区：家系列</p>
                        <p>墓地面积：5m²</p>
                        <p>参考价格：20000 元</p>
                        <p>墓碑材质：</p>
                        <p>墓碑朝向：</p>
                        <p>骨灰盒朝向：</p>
                        <p>保留骨灰盒：否</p>
                        <p>简介：</p>
                    </div>
                    <div class="g-close" @click="close">
                        <img src="./../../static/img/cha@2x.png" alt="">
                    </div>
                </div>
            </div>
        </slot>
    </g-temp>
</template>

<script>
export default {
    data(){
        return {
            isHome: false,
            maxShow: false
        }
    },
    methods:{
        show(){
            this.maxShow = true;
        },
        close(){
            this.maxShow = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    .g-dialog{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #fff, $alpha: .5);
        position: fixed;
        left:0;
        top: 0;
        z-index: 999999;
        .g-close{
            width: 36px;
            height: 36px;
            background-color: #016835;
            position: absolute;
            right: -36px;
            cursor: pointer;
            img{
                width: 20px;
                height: 20px;
                margin: 8px;
                display: block;
            }
        }
        .dial-con{
            width: 680px;
            height: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            .img{
                float: left;
                width: 400px;
                margin: 10px;
            }
            .con-right{
                float: left;
                margin-left: 10px;
                h2{
                    font-size: 24px;
                    color: #555;
                    font-weight: 400;
                    margin-top: 34px;
                    margin-bottom: 19px;
                }
                p{
                    font-size: 18px;
                    color: #555;
                    line-height: 28px;
                }
            }
        }
    }
    .g-new{
        width: 100%;
        min-width: $min-width;
        overflow: hidden;
    }
    .new-con{
        width: $min-width;
        margin: 18px auto 0;
    }
    .new-center{
        float: left;
        overflow: hidden;
        margin-left: 18px;
        .new-left-title{
            width:754px;
            height:50px;
            background-color: #F2F2F2;
            box-sizing: border-box;
            border-left: 10px solid #333;
            line-height: 50px;
            margin-top: 20px;
            &:nth-of-type(1){
                margin-top: 0;
            }
            .left-title-1{
                float: left;
                color: #555555;
                font-size: 20px;
                margin-left: 19px;
            }
            .left-title-2{
                float: right;
                font-size: 18px;
                color: #D7D7D7;
                margin-right: 23px;
                a{
                    font-size: 18px;
                    color: #D7D7D7;
                    &:hover{
                        color: #016835;
                    }
                }
                span{
                    &:hover{
                        cursor: default;
                    }
                }
                img{
                    width: 9px;
                    height: 16px;
                    margin: -1px 9px;
                }
            }
        }
        .new-con{
            width: 100%;
            overflow: hidden;
            .new-item{
                width: 100%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .new-item-left{
                width: 296px;
                height: 222px;
                float: left;
                img{
                    width: 296px;
                }
            }
            .new-item-right{
                float: left;
                margin-left: 21px;
                width: 711px;
            }
            .item-title{
                color: #555555;
                font-size: 25px;
                margin-top: 10px;
            }
            .item-con{
                color: #888888;
                font-size: 18px;
                line-height: 24px;
                margin-top: 25px;
            }
            .item-date{
                color: #555555;
                font-size: 18px;
                margin-top: 32px;
            }
        }
    }
    .new-right,.new-left{
        float: right;
        overflow: hidden;
        .hot-new,.fu-show{
            width: 270px;
            border-radius: 10px;
            .hot-title{
                width:270px;
                height:40px;
                background:rgba(51,51,51,1);
                border-radius:10px 10px 0px 0px;
                text-align: center;
                line-height: 40px;
                color: #fff;
                font-size: 18px;
                img{
                    width: 16px;
                    float: right;
                    margin-right: 10px;
                    margin-top: 10px;
                }
            }
            .hot-con{
                width: 100%;
                height: 204px;
                background-color: #F2F2F2;
                border-radius:0 0 10px 10px;
                overflow: hidden;
            }
            .hot-item{
                width: 100%;
                overflow: hidden;
                margin-top: 18px;
                img{
                    width: 13px;
                    margin-left: 20px;
                    margin-right: 15px;
                    float: left;
                    margin-top: 3px;
                }
                span{
                    font-size: 18px;
                    float: left;
                    color: #555555;
                }
            }
        }
        .concat{
            width:270px;
            height:170px;
            background: url('./../../static/img/摄图网_501226850拷贝.png') no-repeat;
            background-size: 270px;
            position: relative;
            margin-top: 20px;
            .concat-cover{
                width: 270px;
                height: 170px;
                background-color: rgba(0,0,0,.38);
                position: absolute;
                top: 0;
                left: 0;
                font-size: 18px;
                color: #fff;
                line-height: 30px;
                p{
                    float: left;
                    margin-left: 17px;
                    &:nth-of-type(1){
                        margin-top: 64px;

                    }
                }
            }
        }
        .fuxiang{
            width:270px;
            margin-top: 20px;
            img{
                width: 270px;
            }
        }
    }
    .new-left{
        float: left;
       .hot-new .hot-con{
            height: 115px;
            p{
                font-size: 18px;
                color: #555555;
                margin-top: 30px;
                text-align: center;
                &:nth-last-of-type(1){
                    font-size: 16px;
                    margin-top: 20px;
                }
            }
        }
        .concat{
            height: auto;
        }
    }
    .new-con .g-paginator{
        margin-left: 156px;
    }
    .new-hot{
        background-color: #F2F2F2;
        width: 754px;
        overflow: hidden;
        .hot-item{
            width:230px;
            height:314px;
            background:rgba(255,255,255,1);
            border-radius:20px;
            margin-left: 15px;
            margin-top: 10px;
            margin: 10px 0 22px 15px;
            float: left;
            img{
                width: 230px
            }
            .hot-cover{
                width: 100%;
                text-align: center;
                font-size: 18px;
                color: #555;
                p{
                    margin-top: 10px;
                    &:nth-of-type(1){
                        font-size: 25px;
                    }
                }
            }
        }
    }
</style>

