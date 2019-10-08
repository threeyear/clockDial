const wx = require('weixin-js-sdk')
import { Toast } from 'vant'
export default {
    methods: {
        wechatShare(info) {
            let url = window.location.href.split('#')[0]
            // 访问后台接口获取微信参数
            this.$http
              .get('https://www.shyy6688.com/wxunicom/index.php/home/Scan/share?url='+ url)
              .then(res => {
                let data = res.data
                if(data.status == 1) {
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.appId, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature, // 必填，签名
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData','showOptionMenu'] // 必填，需要使用的JS接口列表
                      });
                }
              })
            wx.ready(() =>  {
              const share_title = info.title
              const share_desc = info.desc
              const share_link = info.link
              const share_img = info.img
              wx.showOptionMenu()
              wx.updateAppMessageShareData({
                title: share_title, // 分享标题
                desc: share_desc, // 分享描述
                link: share_link, // 分享链接
                imgUrl: share_img, // 分享图标
                
              })
              wx.updateTimelineShareData({
                title: share_title, // 分享标题
                link: share_link, // 分享链接
                imgUrl: share_img, // 分享图标
                
              })
            })
          },
    }
}
