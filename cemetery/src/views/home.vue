<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="g-con">
                <div class="g-type">
                    <div class="g-bar">
                        <ul>
                            <li @click="selectType(i)" :class="typeCurrIndex == i?'sel-style':''" v-for="(item,i) in typeList" :key="i">{{item}}</li>
                        </ul>
                    </div>
                    <div class="g-info">
                        <div class="info-item" v-for="(item,i) in typeCon" :key="i">
                            <img :src="item.imgUrl" alt="">
                            <div class="info-cover">
                                <h3>{{item.title}}</h3>
                                <div class="info-1">
                                    <span style="margin-right: 25px;">墓地面积：{{item.size}}m²</span>
                                    <span>售价约￥{{item.price}}万元</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="g-service">
                        <h1>服务内容</h1>
                        <div class="ser-con">
                            <div class="ser-item">
                                <img style="width: 203px;margin: 97px auto 83px" src="./../../static/img/c678bdaccc190e479387c75e721018d6副本@2x.png" alt="">
                                <p>家·服务</p>
                            </div>
                            <div class="ser-item">
                                <img style="width: 119px;margin: 70px auto;" src="./../../static/img/01@2x.png" alt="">
                                <p>礼·服务</p>
                            </div>
                            <div class="ser-item">
                                <img style="width: 181px;margin: 40px auto;" src="./../../static/img/c67dae69473b5f21020b5991754d829b副本@2x.png" alt="">
                                <p>礼·服务</p>
                            </div>
                        </div>

                    </div>
                    <div class="g-cer">
                        <h1>墓地资讯</h1>
                        <div class="cer-con">
                            <div class="con-left">
                                <div class="con-left-cover">
                                    <div class="cover-date">
                                        <p>2019</p>
                                        <p>6-24</p>
                                    </div>
                                    <div class="cover-title">天星派风水传人付长春</div>
                                    <div class="cover-dtl">付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师...</div>
                                </div>
                            </div>
                            <div class="con-right">
                                <div class="con-right-item">
                                    <div class="right-item-title">天星派风水传人付长春</div>
                                    <div class="right-item-con">付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师习艺，至二OO九年期间一直随师在农村民间行丧葬之事...</div>
                                    <div class="right-item-date">2019-6-24</div>
                                </div>
                                <div class="con-right-item">
                                    <div class="right-item-title">天星派风水传人付长春</div>
                                    <div class="right-item-con">付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师习艺，至二OO九年期间一直随师在农村民间行丧葬之事...</div>
                                    <div class="right-item-date">2019-6-24</div>
                                </div>
                                <div class="con-right-item">
                                    <div class="right-item-title">天星派风水传人付长春</div>
                                    <div class="right-item-con">付长春，汉族人，祖籍四川遂宁市安岳县，生于一九七一年。一九八七年拜师习艺，至二OO九年期间一直随师在农村民间行丧葬之事...</div>
                                    <div class="right-item-date">2019-6-24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="g-views">
                        <h1>园区风景</h1>
                        <div class="view-con">
                            <div class="view-item">
                                <img style="height: 500px;" src="./../../static/img/71561516173_.pic_hd(1).png" alt="">
                                <img style="margin-top: 19px" src="./../../static/img/141561516182_.pic_hd.png" alt="">
                            </div>
                            <div class="view-item">
                                <img style="width:432px" src="./../../static/img/131561516181_.pic_hd.png" alt="">
                                <img style="margin-top: 19px;width:432px" src="./../../static/img/51561516171_.pic_hd.png" alt="">
                                <img style="margin-top: 19px;width:432px" src="./../../static/img/231561516192_.pic_hd.png" alt="">
                            </div>
                            <div class="view-item">
                                <img src="./../../static/img/121561516178_.pic_hd.png" alt="">
                                <img style="margin-top: 19px;height: 500px;" src="./../../static/img/151561516183_.pic_hd.png" alt="">
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
            typeList:['全部','家系列','花系列','雕塑型','艺术竖立型'],
            typeCurrIndex: 0,
            isHome: true,
            typeCon:[{
                title: '壁葬',
                size: 5,
                price: 2.00,
                imgUrl: './../../static/img/16e3f2c15f9302f3af7ee774764b6115.png'
            },{
                title: '艺术墓4型',
                size: 5,
                price: 0.00,
                imgUrl: './../../static/img/dbbfbf8d4ca4f57209b5f07e36e0c3d1.png'
            },{
                title: '艺术墓2型',
                size: 5,
                price: 0.00,
                imgUrl: './../../static/img/7b92748837bcb37945f7e40552c0db24.png'
            },{
                title: '艺术墓3型',
                size: 5,
                price: 0.00,
                imgUrl: './../../static/img/852d07b540aa41a828c696cdaf6ef24e.png'
            }]
        }
    },
    methods:{
        selectType(i){
            this.typeCurrIndex = i;
        }
    }
}
</script>

<style lang="scss" scoped>
.g-con{
    width: 100%;
    min-width: $min-width;
    overflow: hidden;
    .g-type{
        width: $min-width;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 40px;
        .g-bar{
            width: 598px;
            height: 54px;
            border-top: 1px solid #AAAAAA;
            border-bottom: 1px solid #AAAAAA;
            margin: 0 auto;
        }
        ul{
            display: block;
            display: flex;
        }
        li{
            color: #AAAAAA;
            margin-left: 9px;
            line-height: 54px;
            font-size: 18px;
            cursor: pointer;
            &:nth-of-type(1){
                margin-right: 56px;
            }
            &:nth-of-type(2){
                margin-right: 71px;
            }
            &:nth-of-type(3){
                margin-right: 72px;
            }
            &:nth-of-type(4){
                margin-right: 54px;
            }      
        }
        .sel-style{
            color: #006835;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                width: 11px;
                height: 6px;
                background: url('./../../static/img/row-logo@2x.png') no-repeat;
                background-size: 11px 6px;
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translateX(-50%)
            }
        }
    }
}

.g-cer{
    width: 100%;
    height: 584px;
    background-color: rgba(0,0,0,.2);
    overflow: hidden;
    margin-top: 60px;
    background: url('./../../static/img/fdjgfjgjsdf4@2x.png') no-repeat center;
    background-size: cover;
    h1{
        font-size: 25px;
        color: #016835;
        margin-top: 40px;
        margin-bottom: 33px;
        font-weight: 400;
        min-width: $min-width;
        text-align: center;
    }
    .cer-con{
        width: $min-width;
        margin: 0 auto;
        overflow: hidden;
        .con-left{
            float: left;
            width: 475px;
            height: 445px;
            background: url('./../../static/img/WechatIMG96.png') no-repeat;
            background-size: 475px 445px;
            position: relative;
        }
        .con-left-cover{
            width: 100%;
            height: 175px;
            position: absolute;
            bottom: 0;
            background-color: rgba(#fff,.58);
            .cover-date{
                width: 400px;
                height: 47px;
                border-left: 1px solid #016835;
                margin-top: 20px;
                margin-left: 31px;
                font-size: 18px;
                color: #7F7F7F;
                overflow: hidden;
                p{
                    margin-left: 11px;
                    margin-top: 4px;
                }
            }
            .cover-title{
                margin-left: 31px;
                color: #555555;
                font-size: 25px;
                margin-top: 10px;
            }
            .cover-dtl{
                width: 364px;
                margin-left: 31px;
                color: #616163;
                font-size: 18px;
                margin-top: 8px;
            }
        }
        .con-right{
            float: left;
            overflow: hidden;
            margin-left: 41px;
            .con-right-item{
                width: 660px;
                margin-bottom: 17px;
                border-bottom: 1px solid rgba(#fff,.37);
                .right-item-title{
                    font-size: 25px;
                    color: #fff;
                }
                .right-item-con{
                    font-size: 18px;
                    color: #fff;
                    margin-top: 17px;
                    line-height: 26px;
                }
                .right-item-date{
                    font-size: 18px;
                    color: #fff;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

.g-info{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    margin-top: 40px;
    margin-bottom: 59px;
    .info-item{
        width: 320px;
        height: 320px;
        position: relative;
        margin-right: 18px;
        &:nth-last-of-type(1){
            margin-right: 0;
        }
    }
    img{
        width: 320px;
        height: 320px;
    }

    .info-cover{
        width: 100%;
        height: 110px;
        background-color: rgba(#333,.55);
        position: absolute;
        bottom: 0;
        color: #fff;
        h3{
            font-size: 25px;
            font-weight: 400;
            text-indent: 20px;
            margin-top: 20px;
        }
        .info-1{
            font-size: 18px;
            text-indent: 20px;
            margin-top: 24px;
        }
    }
}

.g-service{
    width: 100%;
    margin: 0 auto;
    h1{
        width: 1333px;
        font-size: 25px;
        color: #016835;
        text-align: center;
        height: 64px;
        font-weight: 400;
        border-bottom: 1px dashed #D7D7D7;
        margin: 0 auto;
    }
    .ser-con{
        width: $min-width;
        margin: 0 auto;
        margin-top: 39px;
        overflow: hidden;
        .ser-item{
            width:352px;
            height:352px;
            background:rgba(245,245,245,1);
            border-radius:20px;
            float: left;
            margin-right: 138px;
            &:nth-last-of-type(1){
                margin-right: 0;
            }
            img{
                display: block;
            }
            p{
                font-size: 36px;
                color: #AAAAAA;
                text-align: center;
            }
        }
    }
}

.g-views{
    width: $min-width;
    margin: 59px auto 0;
    h1{
        width: 1333px;
        font-size: 25px;
        color: #016835;
        text-align: center;
        height: 64px;
        font-weight: 400;
        border-bottom: 1px dashed #D7D7D7
    }
    .view-item{
        width: 432px;
        margin-top: 41px;
        margin-right: 18px;
        float: left;
        &:nth-last-of-type(1){
            margin-right: 0;
        }
        img{
            width: 432px;
            display: block;
        }
    }
}
</style>

