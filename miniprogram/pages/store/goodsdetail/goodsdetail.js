// const app = getApp()

Page({
  data: {
    background: ['cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/guimie.jpeg', 'cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/home.jpg', 'cloud://cloud1-6gn6h82r745ad5f2.636c-cloud1-6gn6h82r745ad5f2-1310755490/guimie.jpeg'],
    src:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    haveCreateCollection: false
  },
  onLoad(option){
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
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