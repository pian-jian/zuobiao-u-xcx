var util = require('../../utils/util.js')

Page({
    data:{
        typeArray:[['不限','北苑','江东','稠城','稠江','廿三里','福田','城西','后宅','乡镇','周边'],
                    ['不限', '50万以下', '50万-100万', '100万-120万', '120万-150万', '120万-150万','150万-200万','200万-150万', '250万-300万', '300万-350万', '350万以上', '120万-150万'],
                    ['不限', '1室', '2室', '3室', '4室', '5室', '5室以上']],
        moreArray:[['默认','总价由低到高','总价由高到低'],
                    ['不限','毛坯','简装','中装','精装','豪装'],
                    ['不限','50平以下','50-75平','75平-100平','100-120平','120-144平','144-160平','160-200平','200平以上']],
        typeIndex:[0,0,0],
        moreIndex:[0,0,0],
        list:[1,2,1,1,2,1,2,1,2,2,2,2,2,2,1,2,2,2,12,2],
        scrollHeight:200
    },
    onLoad:function () {
        var that=this;
        wx.getSystemInfo({
            success:function(res){
                console.info('getSystemInfo',res);
                that.setData({
                    windowWidth:res.windowWidth,
                    windowHeight:res.windowHeight,
                    scrollHeight:res.windowHeight
                });
            }
        });
    },
    typeChange:function(e){
        var n_value=e.detail.value;
        var n_tagindex=e.currentTarget.dataset.tagindex;
        if(n_tagindex==3){
            console.log()
            var n_moreIndex=n_value;
            this.setData({
                moreIndex:n_moreIndex
            })
        }else{
            var n_typeIndex=this.data.typeIndex;
            n_typeIndex[n_tagindex]=n_value;
            this.setData({
                typeIndex:n_typeIndex
            })
        }
    }
})