var util = require('../../utils/util.js')

Page({
    data: {
        modalhide:true,
        housename:''
    },
    showModal:function(){
        this.setData({
            modalhide:"",
        })
    },
    hideModal:function(){
        this.setData({
            modalhide:true,
        })
    },
    inputName:function(e){
      this.setData({
          housename:e.detail.value
      })
    },
    goInfoPage:function(){
        var textname=this.data.housename
        if(textname){
            wx.navigateTo({
                url: 'info?text='+textname
            })
        }else{
            util.toast("名称不能为空")
        }
    }
})