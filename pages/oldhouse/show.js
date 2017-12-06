var util = require('../../utils/util.js')
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

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
                id:"52",
                kanfangCount:"0",
                photo:"uploadFile/userManager/131426642674106250.jpg",
                tel:"4000669000转666",
                userPhone:"15205895280",
                username:"李敬敬",
                zhicheng:"分行经理"
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
            adminId:"52",
            cheku:"6",
            code:"yw815A6807",
            communityAge:"1996",
            communityid:"262",
            communityname:"香山小区",
            direction:"南北",
            field1:"18061034131210093931600",
            havekey:"",
            housearea:"111",
            housecode:"DJ-15-a6807",
            housedecoration:"简装",
            housefloors:"中楼层",
            houseid:"15085",
            housepic:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539232541.jpg",
            houseprice:"122",
            housetype:"套房",
            housetypes:"3室2厅",
            imgC:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539241135.jpg",
            isschool:"学区房",
            mapX:"120.07115",
            mapY:"29.306314",
            minashui:"满两年",
            moreImgC:"http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539232541.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539206177.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539213050.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539215956.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539217880.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539221298.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539223500.jpg,http://apmcdn.eallcn.com/app_yun/2016-08/D07/51/fyimg/1470539229124.jpg",
            mrate:"0.00408333333333333",
            mrates:"2.65914487821223800",
            primaryschool:"开发区小学",
            primaryschoolid:"17",
            regional:"稠江",
            school:"稠江中学",
            schoolid:"33",
            title:"清爽装修    黄金楼层   靠近经济开发区学校",
            titleC:"清爽装修    黄金楼层   靠近经济开发区学校",
            titleD:"香山小区 3室2厅 122万"
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
        mapimg:'',
    },
    onLoad:function() {
        var that = this;
        util.setBarTitle(that.data.houselog[0].titleC);
        this.setData({
            /* mapimg: 'http://apis.map.qq.com/ws/staticmap/v2/?key=CPZBZ-2G7RP-MUVDX-LUBPY-ZZZ3V-RGF7J' +
             '&size=500*400' +
             '&center=' +this.data.list[0].mapY+','+this.data.list[0].mapX+'' +
             '&markers=color:blue|label:A|' +this.data.list[0].mapY+','+this.data.list[0].mapX+'' +
             '&labels=border:1|size:18|color:0xFFFFFF|bgcolor:0x1273e100|anchor:3|香山小区|' +this.data.list[0].mapY+','+this.data.list[0].mapX+'' +
             '&zoom=14'*/
            mapimg:util.mapimg(this.data.list[0].mapY,this.data.list[0].mapX,this.data.list[0].communityname)
        })
    },
    onShow:function () {

    },
    tapMark:function(e){
        console.log(e);
    }
})
