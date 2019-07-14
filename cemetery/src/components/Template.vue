<template>
    <div :class="['g-temp', isHome?'':'g-temp-1']">
        <header>
            <div class="g-header">
              <div class="logo"></div>
              <div class="g-bar">
                <ul>
                  <li v-for="(item,i) in barList" :key="i">
                    <a :class="[item.highList.indexOf(currPath)>-1?'click-style':'']" :href="item.url">{{item.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
        </header>
        <div class="g-swiper">
          <swiper :options="swiperOption">
          　<swiper-slide></swiper-slide>
        　　<swiper-slide></swiper-slide>
          　<div class="swiper-pagination" slot="pagination"></div>
          <!-- 　　<div class="swiper-button-prev" slot="button-prev"></div>
          　　<div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
          <div class="g-swiper-pop">
            <div class="search">
              <img src="./../../static/img/sousuo-2@2x.png" alt="">
              <input type="text" placeholder="福位展示">
              <div class="search-btn">搜索</div>
            </div>

            <div class="swiper-con">
              <h1>青山绿水，万古长情</h1>
              <div class="swiper-con-logo">
                <img src="./../../static/img/形状 1 拷贝@2x.png" alt="">
              </div>
            </div>

            <h1 class="title">客服热线：0571-22223333   24小时热线：1234567891234</h1>
          </div>
        </div>
        <slot></slot>
        <div class="g-concat">
          <h1>{{isHome?'联系我们':''}}</h1>
          <div class="concat-con">
            <div class="con-left">
              <div class="con-wx">
                <img src="./../../static/img/471562906034_.pic_hd@2x(1).png" alt="">
              </div>
              <div class="con-txt">
                <p>有意向购墓者，我们能提前为您安排专车上门免费看墓和园区接待工作人员，让您在购墓过程中既省心又省钱！</p>
                <p>您可添加官方服务号或联系24小时客服咨询最新优惠活动：13381581757</p>   
              </div>
            </div>
            <div class="con-right">
              <img src="./../../static/img/561561708483_.pic_hd副本@2x.png" alt="">
            </div>
          </div>
        </div>
        <g-pop-info></g-pop-info>
        <footer>
          <div class="g-footer">
            <div class="footer-left">
              <ul>
                <li v-for="(item,i) in barList" :key="i">
                  <a :class="[item.highList.indexOf(currPath)>-1?'click-style':'']" :href="item.url">{{item.title}}</a>
                </li>
              </ul>
              <p>版权所有Copyright @ 2018-2019 安吉龙山网 Anjilongshan.com </p>
              <p>客服热线：13381581757</p>
            </div>
            <div class="footer-logo"></div>
          </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'GTemp',
    data(){
      return {
        swiperOption: {
      　　pagination: {
      　　　　el: '.swiper-pagination',
      　　　　clickable: true // 允许点击小圆点跳转
      　　},
      　　autoplay: {
      　　　 delay: 3000,
             grabCursor: true,
      　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
      　　},
      　　loop: true,
      // 　　navigation: {
      // 　　　　nextEl: '.swiper-button-next',
      // 　　　　prevEl: '.swiper-button-prev'
      // 　　},
        },
        barList:[
          {url: '/',title:'首页',highList:['/']},
          {url: '/show',title:'福位展示',highList:['/show']},
          {url: '/service',title:'服务内容',highList:['/service']},
          {url: '/news',title:'墓地资讯',highList:['/news']},
          {url: '/byprogress',title:'购墓流程',highList:['/byprogress']},
          {url: '/about',title:'关于我们',highList:['/about']},
        ],
        currPath: null
      }
    },
    created(){
      this.currPath = this.$route.path;
    },
    props:['isHome'],
    mounted(){
    },
}
</script>

<style lang="scss" scoped>
@import url('./../../static/css/swiper.min.css');
</style>

<style lang="scss" scoped>
@import url('./../../static/css/set.scss');

.g-temp{
  width: 100%;
  min-width: $min-width;
  overflow-x: hidden;
  position: relative;
}
header{
  width: 100%;
  background-color: #d7d7d7;
  overflow: hidden;
  height: 78px;
  min-width: $min-width;
 
 .g-header{
   width: $min-width;
   height: 78px;   
   margin: 0 auto;
 }
  .logo{
    float: left;
    width: 134px;
    height: 39rem;
    background: url('./../../static/img/215613536592_2.pic@2x.png') no-repeat;
    background-size: 129px 39px;
    margin-top: 20px;
  }
  .g-bar{
    float: right;
    ul{
      width: 100%;
      float: right;
    li{
      float: left;
      overflow: hidden;
      a{
        display: block;
        float: left;
        padding: 30px 25px;
        color: #fff;
        font-size: 18px;
        &:hover{
          color: #006835;
          font-weight: bold;  
        }
      }
      .click-style{
        color: #006835;
        font-weight: bold;
      }
      
    }
  }
  }
}

.swiper-container{
  height: 800px;
  width: 100%;
  min-width: $min-width;
}
.g-concat{
  width: $min-width;
  margin: 59px auto;
  h1{
      width: 1333px;
      font-size: 25px;
      color: #016835;
      text-align: center;
      height: 64px;
      font-weight: 400;
      border-bottom: 1px dashed #D7D7D7
  }
  .concat-con{
    width:$min-width;
    height:530px;
    margin: 0 auto; 
    margin-top: 39px;
  }
  .con-left{
    width:376px;
    height:530px;
    float: left;
    border: 1px dashed #d7d7d7;
    .con-wx{
      width:190px;
      height:190px;
      border:2px solid rgba(1,104,53,1);
      position: relative;
      margin: 71px auto 0;
      img{
        width: 170px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .con-txt{
      width: 310px;
      height: 139px;
      margin: 49px auto;
      p{
        color: #555555;
        font-size: 18px;
        line-height: 24px;
        &:nth-last-of-type(1){
          margin-top: 40px;
        }
      }
    }
  }
  .con-right{
    width:938px;
    height:530px;
    float: right;
    overflow: hidden;
    img{
      width: 942px;
      height: 530px;
      margin-left: -2px;
    }
  }
}
footer{
  width: 100%;
  min-width: $min-width;
  height: 238px;
  background-color: #555555;
  overflow: hidden;
  .g-footer{
    width: $min-width;
    margin: 84px auto 0;
  }
  .footer-left{
    float: left;
    ul{
      overflow: hidden;
      li{
        float: left;
        &:nth-last-of-type(1){
          a{
            border-right: none;
          }
        }
        a{
          color: #fff;
          font-size: 18px;
          padding: 0 10px;
          border-right: 1px solid #fff;
        }
      }
    }
    p{
      font-size: 18px;
      margin-top: 15px;
      text-indent: 10px;
      color: #fff;
      &:nth-of-type(1){
        margin-top: 20px;
      }
    }
  }
  .footer-logo{
    float: right;
    width: 262px;
    height: 72px;
    background: url('./../../static/img/21561353659_2.pic@2x.png') no-repeat;
    background-size: 262px 72px;
  }
}
.g-swiper{
  width: 100%;
  min-width: 1333px;
  height: 800px;
  position: relative;
}
.swiper-slide{
  &:nth-of-type(2n-1){
    background: url('./../../static/img/swiper-1.jpg') no-repeat center;
    background-size: cover;
  }
  &:nth-of-type(2n){
    background: url('./../../static/img/swiper-2.jpg') no-repeat center;
    background-size: cover;
  }
  background-color: #fcf;
}
.g-swiper-pop{
  margin: 0 auto;
  width: 1333px;
  height: 800px;
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  .search{
    width: 528px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #006835;
    margin: 54px auto 0;
    position: relative;
    background-color: #fff;
    img{
      width: 21px;
      height: 21px;
      float: left;
      margin-left: 25px;
      margin-top: 15px;
    }
    input{
      width: 400px;
      height: 50px;
      line-height: 50px;
      border-radius: 25px 0 0 25px;
      float: left;
      text-indent: 2em;
      font-size: 18px;
    }
    .search-btn{
      width: 80px;
      height: 50px;
      line-height: 50px;
      border-radius: 0 25px 25px 0;
      margin-right: -1px;
      float: right;
      text-align: center;
      background-color: #006835;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
.swiper-con{
  width: 810px;
  height: 230px;
  border: 2px solid #fff;
  background-color: rgba(255,255,255,.2);
  margin: 152px auto 0;
  .swiper-con-logo{
    border: 1px dashed #fff;
    width: 467px;
    height: 35px;
    margin: 0 auto;
    margin-top: 49px;
  }
  img{
    width: 467px;
    height: 35px;
  }
  h1{
    font-size: 53px;
    color: #fff;
    text-align: center;
    margin-top: 49px;
    font-weight: 500;
  }
}
.title{
  font-size: 42px;
  color: #fff;
  margin: 0 auto;
  font-weight: 500;
  margin-top: 100px;
  text-align: center;
}
input:-moz-placeholder{
  color: #D7D7D7;
}
:-ms-input-placeholder{
  color: #D7D7D7;
}
::-webkit-input-placeholder{
  color: #D7D7D7;  
}

.g-temp-1{
  .swiper-container{
    height: 600px;
  }
  .g-swiper{
    height: 600px;
  }
  .g-swiper-pop{
    height: 600px;
    .search{
      margin: 54px auto 0;
    }
    .swiper-con{
      margin: 72px auto 0;
      
    }
    .title{
        margin-top: 60px;
    }
  }
  .g-concat{
    h1{
      height: 0
    }
  }
}
</style>


