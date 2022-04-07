// app.js
App({

  user: {
    userid: 0, //用户ID
    sessionid: "", //秘钥
    jzb: 0,
    exp: 0,
    phone: "",
    levels: 0,
    headimg: "",
    islogin: function (tp) {
      var re = false;
      if (this.userid > 0) {
        re = true;
      } else {
        if (tp == true) {
          wx.navigateTo({
            url: '../user/user'
          })
        }
      }
      return re;
    },
    key: "userkey",
    setCache: function (obj) {
      wx.setStorageSync(this.key, obj);
    },
    getCache: function () {
      return wx.getStorageSync(this.key);
    },
    clear: function () {
      wx.removeStorageSync(this.key);
    }
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success(res) {
          console.log("res", res)
          if (res.code) {
            let code = res.code
            let appid = "wx446f29a3917135cc"
            let secret = ""
            //发起网络请求
            wx.request({
              url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code",
              success:(res)=>{
                console.log("登陆成功",res)
              },
              fail:(err)=>{
                console.log("登陆失败",err)
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  },
  getToken() {
    let appid = "wx446f29a3917135cc"
    let secret = ""
    //发起网络请求
    wx.request({
      url: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+secret, 
      success:(res)=>{
        console.log("获取成功",res)
      },
      fail:(err)=>{
        console.log("获取失败",err)
      }
    })
},
globalData: {
  userInfo: null
}
});