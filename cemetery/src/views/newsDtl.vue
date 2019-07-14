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
                                <a href="javascript:void(0);" @click="goBack">墓地资讯</a> 
                                <img src="./../../static/img/you-2111@2x.png" alt="">
                                    <span>咨询内容</span>
                                </div>
                        </div>
                        <div class="new-con">
                            <!-- <img src="./../../static/img/WechatIMG96.png" alt=""> -->
                            <p>
                                <img src="./../../static/img/图层 2.png" alt="" style="float: left">
                                <div class="new-con-title">
                                    天星派风水传人付长春
                                </div>
                                <div class="new-con-date">
                                    2019-6-24
                                </div>
                                <div class="new-con-dtl">
                                    付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师习艺，至二OO九年期间一直随师在农村民间行丧葬之事。二O一O年至今全国行堪舆之事。
                                </div>
                                <div class="new-dtl-1">
                                    <pre>宗旨：以易为宗，以传为用。</pre>
                                    <pre>擅长：寻龙点穴、分金立向、择吉用旺。</pre>
                                    <pre>堪舆原则：先说后验。</pre>
                                    <pre>不论阴阳二宅，当场可直断家中吉凶祸福，并可解厄消灾，改凶为吉。</pre>
                                    <pre>择阴宅，若先寻龙，寻龙至峡上，可直断前峡何龙出。</pre>
                                    <pre></pre>
                                </div>
                                <div class="new-dtl-2">
                                    若寻龙至首上，在山后断山前之穴落凹凸、穴坐何向、山前何字有峰起、何字收水口、穴之大小、穴心颜色。（开穴之前断穴心大小、颜色，目前在全国堪舆界，几乎没有。此为天星派证龙穴法，不传之密。）若先寻至穴位，能当场反推山后何龙入首，首后第一节何龙出、何龙入；第二节、第三节何龙入、何龙出。（祖师谓三节不乱为真龙）。先断后验，不可有误，若误必赔。易之道，阴阳互通，生生不息。
                                    <span>因在全国各处阴阳两宅风水实践，见过不少因为风水致病生祸，甚至死亡之事，真是当事者和其家庭亲人的人生不幸！此法为汉代黄石公始创，此后僧一行、张子微、陈抟、吴景鸾、廖瑀、赖布衣等均宗。个人一个人的力量是有限的，故今谨遵师命将催官天星派阳宅廿四山地天人三盘砂水布局风水古法，传授于有缘之人！此法适合用于城市楼房（包括复式）、单独或联体多层别墅和农村院宅（包括院子）的小区或外局、楼栋方位、楼层和户型的选择，内局门、床、灶、窗、卫、柜、桌、沙发、井、水池、出水口、楼梯（复式）等砂水和缺角的布局化解以及选择和设计。</span><span>此法是催官天星派阳宅风水布局古法传承，不少风水爱好者都知道催官天星派有阴宅风水，而不知道同样有阳宅风水。此法不同于现在市面上流传的八宅法取门为用，以门所在的后天卦起辅弼星，定其它七大后天卦方位的北斗九星，来设计和判断砂水的吉凶；亦不同于以坐山所在的后天卦起辅弼，定其它七大后天卦的北斗九星，来设计和判断砂水的吉凶；也不同于玄空法根据坐向在八卦九宫中顺逆飞布运山向三星，来设计和判断砂水的吉凶，而是根据坐向一线起出砂水龙三盘廿四山北斗九星直接用于占事、调理和布局。</span><span>此法不仅适合院宅立向布局，而且特别适合楼房格局无法更改情况下，布局催发事情和化煞解难；不仅适合阴宅寻龙点穴的立向理气，而且特别适合公墓无龙穴的情况下选址和立向理气：不得龙穴合理气，亦可小康富人家。</span><span> 只传授中国人，不论国籍均可学习， 不传授外国人士。</span>
                                </div>
                            </p>
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
        }
    },
    created(){

    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
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

