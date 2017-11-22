var util = require('../../utils/util.js')

Page({
    data: {
        selldateobj:[{
            id:1,
            text:'一个月'
        },{
            id:2,
            text:'三个月'
        },{
            id:3,
            text:'半年'
        },{
            id:4,
            text:'观望'
        }],
        selltimearray:['一个月','三个月','半年','观望']
    },
    onLoad:function(){
      util.setBarTitle("在线委托")
    },
    formSubmit:function(e){
        console.log(e);
        //util.link('n','price')
        util.toast("待续...")
    },
    sellTimeChange:function(e){
        // /console.log(e);
        this.setData({
            selltimeindex:e.detail.value
        })
    }
})