<template>
    <g-temp>
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
                    <div class="g-service">
                        <h1></h1>
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
        font-size: 25px;
        color: #016835;
        text-align: center;
    }
    .ser-con{
        width: $min-width;
        margin: 0 auto;
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
                font-size: 40px;
                color: #AAAAAA;
                text-align: center;
            }
        }
    }
}

.g-views{
    width: $min-width;
    margin: 59px auto;
    h1{
        font-size: 25px;
        color: #006835;
        text-align: center;
        font-weight: 400;
        margin-bottom: 80px;
    }
    .view-item{
        width: 432px;
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

