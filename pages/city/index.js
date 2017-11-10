var util = require('../../utils/util.js')

Page({
    data:{
        nowcity:'义乌',
        awayslist:[
            {id:1,name:'义乌',num:1},
            {id:2,name:'金华',num:1},
        ],
        hotlist:[
            {id:1,name:'义乌',num:1},
            {id:2,name:'金华',num:1},
            {id:1,name:'杭州',num:0},
            {id:2,name:'东阳',num:123},
            {id:1,name:'浦江',num:0},
            {id:2,name:'永康',num:0},
            {id:1,name:'兰溪',num:0},
            {id:1,name:'磐安',num:0},
            {id:2,name:'温州',num:0},
            {id:2,name:'绍兴',num:0},
            {id:2,name:'衢州',num:0},
            {id:2,name:'武义',num:0},
            {id:2,name:'丽水',num:0},
            {id:2,name:'江西',num:0},
            {id:2,name:'上海',num:0},
        ]
    },
    onLoad:function(){

    },
    onShow:function(){
        this.setData({
            nowcity:util.cache("nowcity").name
        })
    },
    setCity:function(e){
        if(e.currentTarget.dataset.index>=0){
            var n_index=e.currentTarget.dataset.index;
            var n_arr=e.currentTarget.dataset.list;
            util.cache("nowcity",this.data[n_arr][n_index]);
        }
        wx.switchTab({
            url: '../index/index'
        })
    }
})