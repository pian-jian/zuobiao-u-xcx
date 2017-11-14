var util = require('../../utils/util.js')

Page({
    data: {
        list:[0,1,2,3,4,5,6,7,8,9],
        serchbarHidden:true
    },
    onLoad:function () {
        util.setBarTitle("新房")
    },
    onShow:function(){
    },
    scroll: function (e) {
        if(e.detail.scrollTop>150){
            this.setData({
               serchbarHidden:""
            })
        }else{
            this.setData({
                serchbarHidden:true
            })
        }

    }


})