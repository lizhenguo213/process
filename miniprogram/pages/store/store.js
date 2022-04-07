// pages/store/store.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList:[
             {_id: "807102f6624d346004c259ab798187f4", g_amount: 50000, g_name: "黄瓜", g_price: 5}
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.getGoods()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    getGoods(){ //获取商品列表
        var that = this;
        const db = wx.cloud.database()
        // const todos = db.collection('goods')
        db.collection('goods').get({
            success: function(res) {
              // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
              console.log(res.data)
            //   that.goodsList = res.data
              that.setData({
                goodsList: res.data
            })
            }
        })
    },
    goDetail(event){
        console.log('data',event.currentTarget.dataset.item)
        let item = event.currentTarget.dataset.item
        wx.navigateTo({
            url: './goodsdetail/goodsdetail',
            events: {
              // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            },
            success: function(res) {
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('acceptDataFromOpenerPage', { data: item })
            }
          })
    }
})