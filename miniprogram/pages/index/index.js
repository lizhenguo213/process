// index.js
// const app = getApp()
const {
  envList
} = require('../../envList.js');

Page({
  data: {
    background: ['cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/guimie.jpeg', 'cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/home.jpg', 'cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/guimie.jpeg'],
    src:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },
  onLoad(){
    this.add();
    this.getfoods()
  },
  //测试云函数
  add(){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log("454654"+res.result.sum) // 3
      },
      fail: console.error
    })
  },
  getfoods(){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getfoods',
      // 传给云函数的参数
      success: function(res) {
        console.log("2333",(res.result)) // 3
      },
      fail: console.error
    })
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
});