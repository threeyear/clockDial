<template>
  <div class="home">
    <!-- <img class="image" src="./../assets/img/cat.jpg" alt="" srcset=""> -->
    <div class="banner">
      <img src="./../assets/img/theme.png" alt="" srcset="">
    </div>
    <van-tabs type="card">
      <van-tab title="方形">
        <div class="backg">
          <div class="onlineguidance-img">
            <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
              <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
                <a :href="item.swiperSrc">
                  <img class="img1" :src="item.swiperSrc" alt="加载失败" />
                </a>
              </van-swipe-item>
            </van-swipe>
        </div>
        <img class="kuang" src="./../assets/img/button.gif" alt="" @click="handleClick">
        <!-- <span class="kuang">长按保存图片</span> -->
        <!-- <van-button type="primary" @click="handleClick">点击保存图片</van-button> -->
        </div>
      </van-tab>
      <van-tab title="圆形">
        <div class="backg backg2">
          <div class="onlineguidance-img">
            <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
              <van-swipe-item v-for="(item, index) in swiperImages2" :key="index">
                <a :href="item.swiperSrc2">
                  <img class="img2" :src="item.swiperSrc2" alt="加载失败" />
                </a>
              </van-swipe-item>
            </van-swipe>
        </div>
        <img class="kuang" src="./../assets/img/button.gif" alt="" @click="handleClick">
        <!-- <span class="kuang">长按保存图片</span>  -->
        <!-- <van-button type="primary" @click="handleClick">点击保存图片</van-button> -->
        </div>
      </van-tab>
    </van-tabs>
    <div class="center">
      <p class="center-1">
        <img class="lf" src="./../assets/img/left.png" alt="" srcset="">
        <span>表盘可以左右滑动</span>
        <img class="rf" src="./../assets/img/right.png" alt="" srcset="">
      </p>
      <div><img class="img" src="./../assets/img/reweima.png" alt="" srcset=""></div>
      <p class="neirong">关注【联通eSIM智能穿戴设备】公众号<br>无需实体卡·手表也能打电话</p>
      <div class="dibu"><img src="./../assets/img/explain.png" alt="" srcset=""></div>
    </div>
  </div>
</template>

<script>
import { Button, Image, Tab, Tabs, Swipe, SwipeItem } from 'vant'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      swiperImages: [
        // 首页的轮播图方
        {
          swiperSrc: require('./../assets/img/bp1.jpg')
        },
        {
          swiperSrc: require('./../assets/img/bp2.jpg')
        },
        {
          swiperSrc: require('./../assets/img/bp3.jpg')
        },{
          swiperSrc: require('./../assets/img/bp4.jpg')
        },{
          swiperSrc: require('./../assets/img/bp5.jpg')
        },{
          swiperSrc: require('./../assets/img/bp6.jpg')
        }
      ],
      swiperImages2: [
        // 首页的轮播图圆
        {
          swiperSrc2: require('./../assets/img/bp1-1.png')
        },
        {
          swiperSrc2: require('./../assets/img/bp2-1.png')
        },
        {
          swiperSrc2: require('./../assets/img/bp3-1.png')
        },{
          swiperSrc2: require('./../assets/img/bp4-1.png')
        },{
          swiperSrc2: require('./../assets/img/bp5-1.png')
        },{
          swiperSrc2: require('./../assets/img/bp6-1.png')
        }
      ],
      imgIndex: 0
    }
  },
  methods: {
    onChange (index) {
      this.imgIndex = index;
    },
    handleClick () {
      let url = '';
      let currentImg = this.swiperImages.find((x, index) => this.imgIndex === index);
      this.downloadImg(currentImg.swiperSrc);
    },
    downloadImg(src) {
      let link = document.createElement('a');
      link.setAttribute('download', true);
      link.setAttribute('target', '_blank');
      link.href = src;
      link.click();
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 750px;
  background-image: url('./../assets/img/bg.jpg');
  background-size: 750px 100%;
  .banner{
    padding: 100px 156px 50px;
    img{
      width: 437px;
      height: 278px;
    }
  }
  .van-tabs {
    padding-top: 20px;
    
    .van-tabs__wrap {
      height: 60px;
      .van-tabs__nav--card {
        z-index: 999;
        height: 60px;
        margin: 0 130px;
        border: 2px solid #ee0a24;
        border-radius: 30px;
      }
      .van-tabs__nav--card .van-tab.van-tab--active {
        color: #fff;
        border-radius:30px;
      }
      .van-tabs__nav--card .van-tab {
        border: none;
        border-radius:30px;
      }
    }
  }
  .van-tabs__content {
    text-align: center;
    margin-top: 20px;
  }
  .backg{
    background-image: url('./../assets/img/bpbg.png');
    height: 550px;
    width: 610px;
    background-size:610px 550px;
    margin: -50px auto 0;
    .onlineguidance-img {
      width: 600px;
      height: 510px;
      // margin:0 auto;
      .img1 {
        height: 215px;
        width: 187px;
        margin-top: 153px;
        margin-right: 10px;
        border-radius: 20px;
      }
    }
    .kuang { 
      font-size: 26px;
      width: 300px;
      }
  }
  .backg2{
    background-image: url('./../assets/img/bpbg2.png');
    // height: 550px;
    // width: 610px;
    // background-size:610px 550px;
    // margin: -50px auto 0;
    .img2 {
      height: 270px;
      width: 270px;
      margin-top: 125px;
      margin-right: 10px;
      border-radius: 250px;
    }
  }
  .center {
    text-align: center;
    height: 100%;
    margin-top: 60px;
    .center-1 {
      padding: 0 200px;
      .lf {
        width: 34px;
        float: left;
      }
      .rf {
        width: 34px;
        float: right
      }
      span{
        font-size: 28px;
      }
    }
    .img{
      width: 200px;
      margin-top: 30px;
    }
    .neirong {
      // width: 600px;
      line-height: 2
    }
    .dibu {
      margin-bottom: 180px;
      img {
        width: 640px;
        height: 590px;
      }
    }
  }
}
</style>
