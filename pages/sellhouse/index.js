var util = require('../../utils/util.js')

Page({
    data: {},
    goAppraisal:function(){
        wx.navigateTo({
            url: '../appraisal/index'
        })
    },
    goRelease:function(){
        wx.navigateTo({
            url: '../release/info'
        })
    }
})