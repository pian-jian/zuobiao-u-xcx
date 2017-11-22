var util = require('../../utils/util.js')
Page({
    data: {},
    goOldhouse:function(){
        console.log("254546564");
        wx.redirectTo({
            url: '../oldhouse/list'
        })
    }
})