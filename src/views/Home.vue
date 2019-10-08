<template>
  <div class="home">
    <div class="banner">
      <img src="./../assets/img/theme.png" alt="" srcset="">
      <a href="javascipt:void()" class="music" @click="operateMusic" :class="[musicState === 'play' ? 'play' : 'pause' ]">
        <img src='./../assets/img/music.png' alt="加载失败" />
      </a>
    </div>
    <van-tabs type="card" @change="handleTabChange">
      <van-tab title="方形" name="square">
        <!-- <div class="backg">
          <div class="onlineguidance-img">
            <van-swipe indicator-color="#000" @change="onChange">
              <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
                <a :href="item.swiperSrc">
                  <img class="img1" :src="item.swiperSrc" alt="加载失败" />
                </a>
              </van-swipe-item>
              <div>
                <img src="" alt="" srcset="">
              </div>
            </van-swipe>
        </div>
        <span class="kuang">长按保存图片</span>
        </div> -->
      </van-tab>
      <van-tab title="圆形" name="circle">
        <!-- <div class="backg backg2">
          <div class="onlineguidance-img">
            <van-swipe indicator-color="#000" @change="onChange">
              <van-swipe-item v-for="(item, index) in swiperImages2" :key="index">
                <a :href="item.swiperSrc">
                  <img class="img2" :src="item.swiperSrc" alt="加载失败" />
                </a>
              </van-swipe-item>
            </van-swipe>
        </div>
        <span class="kuang">长按保存图片</span>
        </div> -->
      </van-tab>
      <div class="backg" :class="[ type === 'square' ? '' : 'backg2']">
          <div class="onlineguidance-img">
            <van-swipe indicator-color="#000" @change="onChange">
              <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
                <a :href="item.swiperSrc">
                  <img class="img1" :src="item.swiperSrc" alt="加载失败" />
                </a>
              </van-swipe-item>
              <div>
                <img src="" alt="" srcset="">
              </div>
            </van-swipe>
        </div>
        <span class="kuang">长按保存图片</span>
        </div>
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
    <audio id="bgMusic" preload="auto" class="success" ref="audio" src="http://esimwx.10010sh.cn:8999/html/clockDial/music.mp3" autoplay loop></audio>
    <img src="./../assets/img/bpbg2.png" alt="" srcset="" style="display: none;">
  </div>
</template>

<script>
import { Button, Image, Tab, Tabs, Swipe, SwipeItem, Toast } from 'vant'
import wxShare from '../mixins/wechat' 
export default {
  name: 'home',
  mixins: [wxShare],
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Toast.name]: Toast
  },
  mounted() {
    this.audioAutoPlay('bgMusic');
    window.localStorage.setItem('swiperImages', JSON.stringify(this.swiperImages));
    window.localStorage.setItem('swiperImages2', JSON.stringify(this.swiperImages2));
  },
  created(){
    // 设置
    this.setShare()
  },
  data () {
    return {
      swiperImages: [
        // 首页的轮播图方
        {
          swiperSrc: require('./../assets/img/bp1.jpg')
        },
        {
          swiperSrc: require('./../assets/img/bp3.jpg')
        },{
          swiperSrc: require('./../assets/img/bp4.jpg')
        },{
          swiperSrc: require('./../assets/img/bp5.jpg')
        },{
          swiperSrc: require('./../assets/img/bp6.jpg')
        },{
          swiperSrc: require('./../assets/img/bp7.jpg')
        },
        {
          swiperSrc: require('./../assets/img/bp8.jpg')
        },
        {
          swiperSrc: require('./../assets/img/bp10.jpg')
        }
      ],
      swiperImages2: [
        // 首页的轮播图圆
        {
          swiperSrc: require('./../assets/img/bp1-1.png')
        },
        {
          swiperSrc: require('./../assets/img/bp3-1.png')
        },{
          swiperSrc: require('./../assets/img/bp4-1.png')
        },{
          swiperSrc: require('./../assets/img/bp5-1.png')
        },{
          swiperSrc: require('./../assets/img/bp6-1.png')
        },{
          swiperSrc: require('./../assets/img/bp7-1.png')
        },{
          swiperSrc: require('./../assets/img/bp8-1.png')
        },
        {
          swiperSrc: require('./../assets/img/bp10-1.png')
        }
      ],
      imgIndex: 0,
      type: 'square',
      musicState: 'play'
    }
  },
  methods: {
    setShare() {
      const shareInfo = {
          title: '我对祖国"表"个白',
          desc: '国庆节快乐！！',
          link: window.location.href,
          img: '../assets/img/bp1.jpg'
        }
        // mixins
        this.wechatShare(shareInfo)
    },
    onChange (index) {
      this.imgIndex = index;
    },
    handleClick () {
      let url = '';
      var currentImg = {};
      if (this.type === 'square') {
        currentImg = this.swiperImages.find((x, index) => this.imgIndex === index);
      } else {
        currentImg = this.swiperImages2.find((x, index) => this.imgIndex === index);
      }
      this.downloadImg(currentImg.swiperSrc);
    },
    downloadImg(src) {
      let link = document.createElement('a');
      link.setAttribute('download', true);
      link.setAttribute('target', '_blank');
      link.href = src;
      link.click();
    },
    audioAutoPlay(id) {
      var audio = document.getElementById(id);
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function () {
          audio.play();
      }, false);
      document.addEventListener('YixinJSBridgeReady', function () {
          audio.play();
      }, false);
    },
    handleTabChange(tab) {
      if (tab === 'square') {
        this.swiperImages = JSON.parse(window.localStorage.getItem('swiperImages'));
      } else {
        this.swiperImages = JSON.parse(window.localStorage.getItem('swiperImages2'));
      }
      this.type = tab;
    },
    operateMusic() {
      var audio = document.getElementById('bgMusic');
      if (this.musicState === 'play') {
        audio.pause();
        this.musicState = 'pause';
      } else {
        audio.play();
        this.musicState = 'play';
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes rotateMusic {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.home {
  width: 750px;
  background-image: url('./../assets/img/bg.jpg');
  background-size: 750px 100%;
  .banner {
    position: relative;
    padding: 100px 156px 50px;
    .music {
      position: absolute;
      width: 80px;
      height: 80px;
      right: 50px;
      top: 50px;
      cursor: pointer;
      animation: rotateMusic 3.6s linear infinite;
      animation-fill-mode: forwards;
      img {
        width: 100%;
        height: 100%;
      }
      &.play {
        animation-play-state: running;
      }
      &.pause {
        animation-play-state: paused;
      }
    }
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
  .van-swipe__indicator{
    background-color: #020202;
  }
  .backg{
    background-image: url('./../assets/img/bpbg.png');
    height: 550px;
    width: 610px;
    background-size:610px 550px;
    margin: -50px auto 0;
    .onlineguidance-img {
      height: 500px;
      .img1 {
        height: 218px;
        width: 187px;
        margin-top: 151px;
        margin-right: 20px;
        border-radius: 20px;
      }
    }&.backg2 {
      background-image: url('./../assets/img/bpbg2.png');
      .onlineguidance-img {
        height: 500px;
        .img1 {
          height: 260px;
          width: 260px;
          margin-top: 128px;
          margin-right: 19px;
          border-radius: 250px;
        }
      }
    }
    .kuang { 
      font-size: 26px;
    }
  }
  // .backg2{
  //   background-image: url('./../assets/img/bpbg2.png');
  //   .img2 {
  //     height: 270px;
  //     width: 270px;
  //     margin-top: 123px;
  //     margin-right: 20px;
  //     border-radius: 250px;
  //   }
  // }
  .center {
    text-align: center;
    height: 100%;
    margin-top: 40px;
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
      line-height: 2
    }
    .dibu {
      margin-bottom: 180px;
      img {
        width: 640px;
        // height: 590px;
      }
    }
  }
}
</style>
