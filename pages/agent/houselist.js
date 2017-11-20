var util = require('../../utils/util.js')

Page({
    data: {
        selledarray:[0,1,2,3],
        sellingarray:[0,1,2,3,4,5,6,7,8,9],
        list:[]
    },
    onLoad:function(opt){
        var that=this;
        if(opt&&opt.type=="selling"){
            this.setData({
                opt:opt,
                list:that.data.sellingarray
            })
        }else{
            this.setData({
                opt:opt,
                list:that.data.selledarray
            })
        }
    }
})