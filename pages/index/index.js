//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      sue:'',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: [{
          id: 0,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
          id: 1,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
          id: 2,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
          id: 3,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }, {
          id: 4,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
          id: 5,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
          id: 6,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
      barlist:[
          { name: '专家讲座', icon:'iconfont iconlingdang'},
          { name: '直播', icon: 'iconfont iconstar' },
          { name: '直播回放', icon: 'iconfont icondown'},
          { name: '精彩瑞思', icon: 'iconfont iconzhiwenjiesuo'},
      ],
      barlist2: [
          { name: '首页', icon: 'iconfont iconlingdang' },
          { name: '个人中心', icon: 'iconfont iconstar' },
          { name: '口碑', icon: 'iconfont icondown' },
      ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getinputval(e){
      this.setData({
          sue:e.detail.value
      })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  sub(e){
      let number = this.data.sue
      console.log(number)
  }
})
