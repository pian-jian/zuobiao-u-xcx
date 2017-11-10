var util = require('../../utils/util.js')

Page({
    data: {
        list:[{
            dateC:"2016-8-6",
            housecode:"DJ-15-a6807",
            shenHeC:"2",
            tel:"4000669000转102",
            username:"李飞"
        }]
    },
    onLoad:function(){
        console.log(JSON.parse(this.data.list))
        wx.setNavigationBarTitle({
            title: "带看记录"
        })
    }

})