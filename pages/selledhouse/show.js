var util = require('../../utils/util.js')

Page({
    data: {
        list:[{adminid:"225",
            cheku:"18",
            communityAge:"2010",
            communityid:"133",
            communityname:"嘉禾广场",
            dateC:"2016-09-17",
            direction:"南",
            field1:"坐标不动产提供数据",
            housearea:"73",
            housecode:"FY-16-34640",
            housefloors:"高楼层",
            houseid:"9550",
            housepic:"http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578311645.jpg",
            housetype:"套房",
            housetypes:"2室2厅",
            imgC:"http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578210398.jpg",
            imgCounts:"8",
            moreImgC:"http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578311645.jpg," +
            "http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578349497.jpg," +
            "http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578352531.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578346328.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578366282.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578369917.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D19/51/fyimg/1471578373344.jpg",
            photo:"uploadFile/userManager/131494248795741250.jpg",
            priceC:"158",
            primaryschool:"黄杨梅小学",
            primaryschoolid:"3",
            regional:"2",
            school:"绣湖中学",
            schoolid:"28",
            tel:"4000669000转528",
            username:"钟贵均",
            weizhi:"2"}],
    },

    onLoad:function(){
        var n_moreImgCarry=[];
        this.data.list[0].moreImgC.split(",").map(function(r,n){
            n_moreImgCarry.push({id:n,img:r});
        })
        this.setData({
            moreImgCarry:n_moreImgCarry
        })
    }

})