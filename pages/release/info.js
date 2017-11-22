var util = require('../../utils/util.js')

Page({
    data: {},
    onLoad:function(){
        util.setBarTitle("在线委托")
    },
    formSubmit:function(e){
        console.log(e);
        util.link('n','price')
    }

})