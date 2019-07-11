<template>
    <div class="g-temp">
        <header>
            <div class="g-header">
              <div class="logo"></div>
              <div class="g-bar">
                <ul>
                  <li v-for="(item,i) in barList" :key="i">
                    <a :class="[item.highList.indexOf(currPath)>-1?'click-style':'']" href="item.url">{{item.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
        </header>

         <swiper :options="swiperOption">
          　　<swiper-slide>slide1</swiper-slide>
          　　<swiper-slide>slide2</swiper-slide>
          　　<div class="swiper-pagination" slot="pagination"></div>
          　　<div class="swiper-button-prev" slot="button-prev"></div>
          　　<div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <slot></slot>
          <footer>
            <div class="g-footer">
              <div class="footer-left">
                <p>友情链接：</p>
                <p></p>
                <p></p>
                <p></p>
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
      　　navigation: {
      　　　　nextEl: '.swiper-button-next',
      　　　　prevEl: '.swiper-button-prev'
      　　},
        },
        barList:[
          {url: '/',title:'首页',highList:['/']},
          {url: '/show',title:'福位展示',highList:['/show']},
          {url: '/service',title:'服务内容',highList:['/service']},
          {url: '/info',title:'墓地资讯',highList:['/info']},
          {url: '/byprogress',title:'购墓流程',highList:['/byprogress']},
          {url: '/about',title:'关于我们',highList:['/about']},
        ],
        currPath: null
      }
    },
    created(){
      this.currPath = this.$route.path;
    },
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
 }
  .logo{
    float: left;
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
        padding: 0 25px;
        color: #fff;
        &:hover{
          color: #006835;
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
  height: 600px;
  width: 100%;
  min-width: $min-width;
}
.swiper-slide{
  background: url('./../../static/img/7119492_114440620000_2.jpg') no-repeat center;
  background-size: contain;

}
footer{
  width: 100%;
  min-width: $min-width;
  height: 238px;
  background-color: #333333;
  .g-footer{
    min-width: $min-width;
    margin-top: 68px;
  }
  .footer-left{
    float: left;
  }
  .footer-logo{
    float: right;
  }
}


</style>


