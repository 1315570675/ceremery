<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="g-new">
               <div class="new-con">
                    <div class="new-left">
                        <div class="new-left-title">
                            <div class="left-title-1">墓地资讯</div>
                            <div class="left-title-2">
                                <a href="/">首页</a> <img src="./../../static/img/you-2111@2x.png" alt="">
                                <span>墓地资讯</span> 
                                </div>
                        </div>
                        <div class="new-con">
                            <div class="new-item" @click="goDtl">
                                <div class="new-item-left">
                                    <img src="./../../static/img/759e75ae81f9d445856dd17d38fd629b.png" alt="">
                                </div>
                                <div class="new-item-right">
                                    <div class="item-title">安吉龙山源传承800年的文化旅游陵园</div>
                                    <div class="item-con">4月，南方草长莺飞、红花簇簇。记者连续三年在阳春时节探访浙江安吉龙山源。这座7000亩的园林，建成后将兼具文化遗址旅游、休闲田园观光、陵园服务功能，其中800亩为陵园...</div>
                                    <div class="item-date">2019-7-11</div>
                                </div>
                            </div>
                            <div class="new-item" @click="goDtl">
                                <div class="new-item-left">
                                    <img src="./../../static/img/WechatIMG9611.png" alt="">
                                </div>
                                <div class="new-item-right">
                                    <div class="item-title">天星派风水传人付长春</div>
                                    <div class="item-con">付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师习艺，至二OO九年期间一直随师在农村民间行丧葬之事...</div>
                                    <div class="item-date">2019-6-24</div>
                                </div>
                            </div>
                            <div class="new-item" @click="goDtl">
                                <div class="new-item-left">
                                    <img src="./../../static/img/621562911910_.pic_hd.png" alt="">
                                </div>
                                <div class="new-item-right">
                                    <div class="item-title">坟墓阴宅风水中最注重的七大禁忌，一条都不能触碰！</div>
                                    <div class="item-con">周易》有云:穷则变，变则通，通则久，命理为一生定数，风水则是变数，知命而乐，知运而通。所谓“菩萨畏因、凡夫畏果”天道循环，命理批测、风水堪舆均能为您锦上添花，而不能雪中送炭！要正确认识风水作用，不懂的...</div>
                                    <div class="item-date">2019-6-24</div>
                                </div>
                            </div>
                            <div class="new-item" @click="goDtl">
                                <div class="new-item-left">
                                    <img src="./../../static/img/601562911855_.pic_hd.png" alt="">
                                </div>
                                <div class="new-item-right">
                                    <div class="item-title">"风水师、殡仪师、职业人丧葬务实篇懒人整编</div>
                                    <div class="item-con">殡葬文化。殡葬俗指白事，在民间因地域和民族其独特的风俗。所谓殡葬，“殡”就是祭奠和悼念死者,即丧礼;“葬”则是安葬遗体的行为。殡葬一方面是在安葬死者，另一方面又是在安排招待那些前来治...</div>
                                    <div class="item-date">2019-6-24</div>
                                </div>
                            </div>
                            <div class="new-item" @click="goDtl">
                                <div class="new-item-left">
                                    <img src="./../../static/img/611562911886_.pic_hd.png" alt="">
                                </div>
                                <div class="new-item-right">
                                    <div class="item-title">2018年适合结婚的黄道吉日集锦</div>
                                    <div class="item-con">每年的元旦，春节，2月14日，5月20日，七夕节，11月11日，圣诞节都是一百姐包红包到手软的时候，但是今年的七夕结婚的人相对没...</div>
                                    <div class="item-date">2019-6-4</div>
                                </div>
                            </div>
                            <g-page></g-page>
                        </div>
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
                        <div class="fu-show">
                            <div class="hot-title">
                                热门资讯
                                <img src="./../../static/img/youyou-@2x.png" alt="">
                            </div>
                            <div class="fu-item">
                                <img src="./../../static/img/16e3f2c15f9302f3af7ee774764b6115.png" alt="">
                                <div class="fu-item-cover">
                                    <div class="cover-title">壁葬</div>
                                    <div class="cover-info">
                                        <div class="cover-size">墓地面积：5m²</div>
                                        <div class="cover-price">售价约：￥2.00万元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="fu-item">
                                <img src="./../../static/img/dbbfbf8d4ca4f57209b5f07e36e0c3d1.png" alt="">
                                <div class="fu-item-cover">
                                    <div class="cover-title">壁葬</div>
                                    <div class="cover-info">
                                        <div class="cover-size">墓地面积：5m²</div>
                                        <div class="cover-price">售价约：￥2.00万元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="fu-item">
                                <img src="./../../static/img/7b92748837bcb37945f7e40552c0db24.png" alt="">
                                <div class="fu-item-cover">
                                    <div class="cover-title">壁葬</div>
                                    <div class="cover-info">
                                        <div class="cover-size">墓地面积：5m²</div>
                                        <div class="cover-price">售价约：￥2.00万元</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
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
            isDtl: false
        }
    },
    created(){
        this.isDtl = this.$route.query.isDtl || false;
    },
    methods:{
        goBack(){
            this.isDtl = false;
        },
        goDtl(){
            this.$router.push({path:'/newsdtl'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .g-new{
        width: 100%;
        min-width: $min-width;
        overflow: hidden;
    }
    .new-con{
        width: $min-width;
        margin: 18px auto 0;
        img{
            width: 550px;
            margin-right: 17px
        }
        p{
            font-size: 18px;
            color: #fff;
            line-height: 30px;
        }
        .new-con-title{
            font-size: 34px;
            color: #555;
            margin-top: 11px;
        }
        .new-con-date{
            color: #555;
            font-size: 18px;
            margin-top: 23px;
        }
        .new-con-dtl,.new-dtl-1{
            font-size: 18px;
            color: #555;
            line-height: 30px;
            margin-top: 25px;
        }
        .new-dtl-2{
            font-size: 18px;
            color: #555;
            line-height: 30px;
            span{
                display: block;
                text-indent: 2em;
            }
        }
        .new-dtl-1{
            margin-top: 45px;
        }
    }
    .new-column{
        column-count:2;
        -moz-column-count:2;
        -webkit-column-count:2;
        .col-txt{
            font-size: 18px;
            color: #555555;
            line-height: 30px;
        }
    }
    .new-left{
        float: left;
        overflow: hidden;
        width: 1036px;
        .new-left-title{
            width:1036px;
            height:50px;
            background-color: #F2F2F2;
            box-sizing: border-box;
            border-left: 10px solid #333;
            line-height: 50px;
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
                margin-right: 13px;
                a{
                    color: #D7D7D7;
                    &:hover{
                        color: #006835;
                    }
                }
                span{
                    cursor: default;
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
                cursor: pointer;
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
    .new-right{
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
        .fu-show{
            margin-top: 20px;
            background-color: #F2F2F2;
            padding-bottom: 20px; 
            .fu-item{
                width: 230px;
                height: 230px;
                margin: 20px 20px 0 20px;
                position: relative;
                border-radius:0px 0px 20px 20px;
                img{
                    width: 230px;
                }
                .fu-item-cover{
                    width: 100%;
                    height: 80px;
                    background-color: rgba(0,0,0,.55);
                    position: absolute;
                    bottom: 0;
                    border-radius:0px 0px 20px 20px;
                    color: #fff;
                }
                .cover-title{
                    font-size: 18px;
                    margin: 14px;
                }
                .cover-size{
                    float: left;
                    margin-left: 14px;
                    font-size: 12px;
                }
                .cover-price{
                    float: left;
                    margin-left: 12px;
                    font-size: 12px;
                }
            }
        }
    }
</style>

