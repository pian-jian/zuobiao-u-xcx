var util = require('../../utils/util.js')
Page({
  data: {
      imgUrls: [
          'http://m.zuobiao.wang/images/home_banner1.jpg',
          'http://m.zuobiao.wang/images/home_banner2.jpg',
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      list:[0,1,2,3,4,5,6],
      nowcity:'义乌'
  },
  onLoad: function () {
    this.getLocation();
  },
  onShow:function(){
    this.setData({
        nowcity:util.cache("nowcity").name
    })
  },
  getLocation:function(){
      var that=this;
    wx.getLocation({
        type: 'wgs84',
        success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            console.log(res);
            that.getCityname(res.latitude,res.longitude);
        }
    })
  },
  getCityname:function (lat,lng) {
      var that=this;
      wx.request({
          url: 'http://restapi.amap.com/v3/geocode/regeo?location='+lng+','+lat+'&key=8325164e247e15eea68b59e89200988b&radius=1000&extensions=all',
          header: {
              'content-type': 'application/json' // 默认值
          },
          method:'post',
          dataType:'json',
          success: function(res) {
              console.log(res);
              that.setData({
                  nowcity:res.data.regeocode.addressComponent.district
              })
          }
      })
  },
})
