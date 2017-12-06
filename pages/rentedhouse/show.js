var util = require('../../utils/util.js')
var charts =  require('../../utils/wxcharts-min.js')

Page({
    data: {
        houselog:[{
            contentC:"1.靠近经济开发区学区，读书方便。2.周边配套齐全，临近万达绿城。3.黄金楼层，三房朝南，税费省。4.清爽装修，拎包入住，香山少有。5.业主诚心出售，房主自荐委托。",
            titleC:"清爽装修    黄金楼层   靠近经济开发区学校"
        }],
        houselook:[{
            counts:"0"
        }],
        houselooks:[{
            counts:"1"
        }],
        housetu:{
            data1:[13768,12083,11925,11925,15652,13177,16393,11925,16040,13055,15306,14010],
            data2:[13768,12083,11925,11925,15652,13177,16393,11925,16040,13055,15306,14010],
            data3:[13768,12083,11925,11925,15652,13177,16393,11925,16040,13055,15306,14010],
            month:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        },
        imglist:[{
            imgCounts:"9"
        }],
        jingjiren:[{
            avg:"100",
            id: "2",
            kanfangCount:"0",
            photo:"uploadFile/userManager/131349730478281250.jpg",
            tel:"4000669000转666",
            userPhone:"18267060977",
            username:"夏斌",
            zhicheng:"总监"
        },{
            avg:"",
            id:"93",
            kanfangCount:"1",
            photo:"uploadFile/userManager/131426642674106250.jpg",
            tel:"4000669000转102",
            userPhone:"13325996978",
            username:"李飞",
            zhicheng:"经纪人"
        }],
        list:[{
            adminid:"2",
            communityAge:"2000",
            communityid:"215",
            communityname:"国际村",
            direction:"朝南",
            displayC:",1,2,4,5,",
            housearea:"180",
            housecode:"zbzf0001",
            housedecoration:"精装",
            housefloors:"高楼层",
            houseid:"30",
            housenature:"2",
            houseprice:"8350",
            housetype:"楼中楼",
            housetypes:"3室2厅",
            imgC:"20170929110708457625.jpg",
            interiorpic:"130985188928206250.jpg",
            louceng:"5",
            mapX:"120.089404",
            mapY:"29.29025",
            moreImgC:"20170929110707020125.jpg,20170929110707207625.jpg,20170929110707426375.jpg,20170929110707645125.jpg,20170929110707848250.jpg,20170929110708051375.jpg,20170929110708270125.jpg,20170929110708457625.jpg",
            oldPrice:"8350",
            title:"国际村 3室2厅 8350元",
            weizhi:"3"
        }],
        pinglun:"**本人对此房了解透彻，看房联系右方转接来电**<br>香山小区 <br>1：确权面积11...",
        xiaoqujiaoyi:{
            dateC:["2016-08-12"],
            housearea:["113.63"],
            housetypes:["3室2厅"],
            priceC:["115.5"]
        },
        moreImgC:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539232541.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539206177.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539213050.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539215956.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539217880.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539221298.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539223500.jpg," +
        "http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539229124.jpg",
        moreImgCarry:[{
            id:1,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539232541.jpg"
        },{
            id:2,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539206177.jpg"
        },{
            id:3,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539213050.jpg"
        },{
            id:4,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539215956.jpg"
        },{
            id:5,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539217880.jpg"
        },{
            id:6,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539232541.jpg"
        },{
            id:7,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539221298.jpg"
        },{
            id:8,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539223500.jpg"
        },{
            id:9,
            img:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539229124.jpg"
        }],
        markers:[{
            id:12,
            latitude:"29.306314",
            longitude:"120.07115",
        }],

    },
    onLoad:function(){
        var that=this;
        util.setBarTitle(that.data.houselog[0].titleC);
    },
    onShow:function () {
        this.setData({
            mapimg:util.mapimg(this.data.list[0].mapY,this.data.list[0].mapX,this.data.list[0].title)
        })
    },
    tapMark:function(e){
        console.log(e);
    }
})
