<template>
    <g-temp :isHome='isHome'>
        <slot>
            <g-pop></g-pop>
            <div class="about-history">
                 <h1>服务内容
                    <div class="btn">
                        <a href="/">首页</a>
                        <img src="./../../static/img/you-2111@2x.png" alt="">
                        <span>服务内容</span>
                    </div>
                </h1>
                <div class="history-item">
                    <img src="./../../static/img/about-logo-1.png" alt="">
                    <p class="item-title">国宝遗址</p>
                    <div class="item-con">千年安吉，文明之光。安吉有国保单位四处、省保单位七处，总量高居浙江全省县区之首。安吉龙山源坐拥的“安吉古城遗址与龙山越国贵族墓群”，为全国重点文物保护单位。公元2016年，安吉龙山古城遗址入选《国家“十三五”期间重要大遗址》名录，是除了良渚、上林湖越窑遗址等外，浙江五处入选的大遗址之一。与周口店、殷墟、秦始皇陵、大运河等处于同等保护地位。</div>
                </div>
                <div class="history-item">
                    <img src="./../../static/img/fgsfdgsfdgsdfg.png" alt="">
                    <p class="item-title">王脉之地</p>
                    <div class="item-con">安吉龙山源坐落在“安吉古城遗址与龙山越国贵族墓群”国家大遗址所在地。据出土文物推测，安吉古城极有可能是越国早期王城，也是迄今保存最好的越国城址。龙山越国贵族墓群更是发现了九亩墩和八亩墩（已开始保护发掘）两座王陵级大墓。</div>
                </div>
            </div>
            <div class="about-concat">
                 <h1>联系我们</h1>
                 <div class="pop-con">
                    <div class="wx">
                        <img src="./../../static/img/471562906034_.pic_hd@2x(1).png" alt="">
                    </div>
                    <p>安吉龙山源官方服务号</p>
                    <p class="call">
                        <img src="./../../static/img/tubiao210.png" alt="">
                        13381581757
                    </p>
                    <p>安吉龙山源实业发展有限公司</p>
                    <p>浙江安吉递铺路古城村</p>
                    <p>邮编313300</p>
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
.about-concat{
    width: $min-width;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 60px;
}
.pop-con{
    margin-top: 9px;
    text-align: center;
    color: #555;
    font-size: 15px;
    p{
        margin-top: 9px;
        text-align: center
        img{
            width: 24px;
        }
    }

.call{
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 26px;
    img{
        width: 34px;
        height: 34px;
        vertical-align: top;
    }
}
.wx{
    width: 270px;
    height: 270px;
    margin: 60px auto 0;
    border:2px solid rgba(1,104,53,1);
    img{
        width: 241px;
    }
}
}
.about-history{
    width: $min-width;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 60px;
    .history-item{
        width: 900px;
        font-size: 18px;
        color: #555;
        line-height: 26px;
        margin: 0 auto;
        margin-top: 30px;
        img{
            width: 900px;
            display: block;
            
        }
    }
    .item-title{
        font-size: 25px;
        color: #016835;
        margin-top: 20px;
    }
    .item-con{
        font-size: 18px;
        color: #555;
        line-height: 26px;
        margin-top: 8px;
    }
}
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
</style>

