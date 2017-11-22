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
    //this.getLocation();
        this.setTypelist();
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
    setTypelist:function(){
        var multiObj={
                region:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'北苑',isselect:0},
                    {id:2,text:'江东',isselect:0},
                    {id:3,text:'稠城',isselect:0},
                    {id:4,text:'稠江',isselect:0},
                    {id:5,text:'廿三里',isselect:0},
                    {id:6,text:'福田',isselect:0},
                    {id:7,text:'城西',isselect:0},
                    {id:8,text:'后宅',isselect:0},
                    {id:9,text:'乡镇',isselect:0},
                    {id:10,text:'周边',isselect:0}],
                school:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'小学',isselect:0},
                    {id:2,text:'中学',isselect:0}],
                price:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'50万以下',isselect:0},
                    {id:2,text:'50万-100万',isselect:0},
                    {id:3,text:'100万-120万',isselect:0},
                    {id:4,text:'120万-150万',isselect:0},
                    {id:5,text:'120万-150万',isselect:0},
                    {id:6,text:'150万-200万',isselect:0},
                    {id:7,text:'200万-250万',isselect:0},
                    {id:8,text:'250万-300万',isselect:0},
                    {id:9,text:'300万-350万',isselect:0},
                    {id:10,text:'350万以上',isselect:0},
                    {id:11,text:'自定义价格',isselect:0}],
                spec:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'1室',isselect:0},
                    {id:2,text:'2室',isselect:0},
                    {id:3,text:'3室',isselect:0},
                    {id:4,text:'4室',isselect:0},
                    {id:5,text:'5室',isselect:0},
                    {id:6,text:'5室以上',isselect:0}],
                order:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'总价由低到高',isselect:0},
                    {id:2,text:'总价由高到低',isselect:0}],
                style:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'毛坯',isselect:0},
                    {id:2,text:'简装',isselect:0},
                    {id:3,text:'中装',isselect:0},
                    {id:4,text:'精装',isselect:0},
                    {id:5,text:'豪装',isselect:0}],
                area:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'50平以下',isselect:0},
                    {id:2,text:'50-75平',isselect:0},
                    {id:3,text:'75平-100平',isselect:0},
                    {id:4,text:'100-120平',isselect:0},
                    {id:5,text:'120-144平',isselect:0},
                    {id:6,text:'144-160平',isselect:0},
                    {id:7,text:'160-200平',isselect:0},
                    {id:8,text:'200平以上',isselect:0}],
                tags:[{id:0,text:'不限',isselect:0},
                    {id:1,text:'学区房',isselect:0},
                    {id:2,text:'满二唯一',isselect:0},
                    {id:3,text:'新上',isselect:0},
                    {id:4,text:'独家',isselect:0},
                    {id:5,text:'降价',isselect:0},
                    {id:6,text:'有钥匙',isselect:0}],
                number:"",
            }
            util.cache("multiObj",multiObj);
    }
})
