<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="service-con">
                <h1>服务内容
                    <div class="btn">
                        <a href="/">首页</a>
                        <img src="./../../static/img/you-2111@2x.png" alt="">
                        <span>服务内容</span>
                    </div>
                </h1>
                <img src="./../../static/img/service2.png" alt="" class="service-logo">
            </div>
            <div class="service-show">
                <h1>服务展示</h1>
                <div class="show-item">
                    <img src="./../../static/img/service-logo-1.png" alt="">
                    <div class="item-right">
                        <div class="item-title">礼·服务</div>
                        <div class="item-con">服务中心将为逝者提供除安吉殡仪馆提供的四项殡葬基本服务以外的各类殡仪服务，如：遗体整容化妆、遗体防腐、遗体守灵、遗体告别、丧葬用品销售、花圈花篮租赁、鲜花制作销售、餐饮等等。</div>
                    </div>
                </div>
                 <div class="show-item show-item-1">
                    <div class="item-right">
                        <div class="item-title">家·服务</div>
                        <div class="item-con">循迹安吉龙山源，沁雅竹茶伴君漫步而行，引人入胜。【卓越故鄣】安吉古城考古遗址公园展示中心，满足参观展示及接待游客；【稻香溪语】后勤中心，绿色餐饮、宜人环境，服务好每一位客户；【和园春色】人文园接待中心，以和为贵，接待、咨询；【竹影清风】办公中心，方便客服办理各类手续。</div>
                    </div>
                    <img src="./../../static/img/service-logo-2.png" alt="">
                </div>
                 <div class="show-item">
                    <img src="./../../static/img/service-logo-3.png" alt="">
                    <div class="item-right">
                        <div class="item-title">礼·服务</div>
                        <div class="item-con">江南农耕文化园，依托茶山、稻田、竹林等资源，按照农耕主题的总体设想，规划开发为集休闲游乐、农耕文化、观光体验等功能于一体的旅游体验园，是江南特色的乡村旅游体验园。</div>
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
            isHome: false
        }
    }
}
</script>
<style lang="scss" scoped>
.service-con,.service-show{
    width: $min-width;
    height: auto;
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
    .service-logo{
        width: $min-width;
        margin-top: 20px;
    }
}
.show-item{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 20px;
    &:nth-of-type(1){
        margin-top: 72px;
    }
    img{
        float: left;
        width: 810px;
        height: 514px;
    }
    .item-right{
        float: left;
        margin-left: 20px;
        .item-title{
            font-size: 34px;
            color: #555555;
            margin-top: 177px;
        }
        .item-con{
            font-size: 18px;
            color: #555;
            width: 500px;
            margin-top: 18px;
            line-height: 26px
        }
    }
}
.show-item-1{
    .item-right{
        margin-left: 0;
        margin-right: 20px;
        .item-title{
            text-align: right;
        }
        .item-con{
            text-align: right
        }
    }
}
</style>


