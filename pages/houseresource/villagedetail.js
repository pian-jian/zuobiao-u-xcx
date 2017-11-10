var util = require('../../utils/util.js')
var charts =  require('../../utils/wxcharts-min.js')
Page({
    data: {
        housetu:{
            data1:[13768, 12083, 11925, 11925, 15652, 13177, 16393, 11925, 16040, 13055, 15306, 14010],
            data2:[13768, 12083, 11925, 11925, 15652, 13177, 16393, 11925, 16040, 13055, 15306, 14010],
            data3:[13768, 12083, 11925, 11925, 15652, 13177, 16393, 11925, 16040, 13055, 15306, 14010],
            month:["11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"]
        },
        jiageContrast:"-8.47",
        isup:0,
        range:"8.47",
        jingjiren:[],
        list:[{
            adminId:"182",
            communityAge:"1996",
            communityid:"262",
            communitymap:"20160127032215680000.jpg",
            communityname:"香山小区",
            communitypic:"20160324084859939500.jpg," +
            "20160324084900236375.jpg," +
            "20160324084900517625.jpg," +
            "20160324084900798875.jpg," +
            "20160324084901095750.jpg," +
            "20160324084901423875.jpg," +
            "20160324084901736375.jpg," +
            "20160324084902017625.jpg," +
            "20160324084902298875.jpg," +
            "20160324084902595750.jpg," +
            "20160324084902892625.jpg," +
            "20160324084903173875.jpg," +
            "20160324084903470750.jpg," +
            "20160324084903814500.jpg," +
            "20160324084904095750.jpg",
            ershoufangAll:"20",
            greening_rate:"0",
            houseSum:"1350",
            houseType:"套房",
            housing:"70年",
            junjia1:"14010",
            junjia2:"14010",
            loudongNum:"70",
            mapx:"120.07115",
            mapy:"29.306314",
            residential_types:"18",
            volumeC:"0",
            wuyemoney:"0.3",
            xiaoquchengjiaolishiAll:"17"
        }],
        moreImgCarry:[{
            li:1,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084859939500.jpg"
        },{
            li:2,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160127032215680000.jpg"
        },{
            li:3,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084900517625.jpg"
        },{
            li:4,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084900798875.jpg"
        },{
            li:5,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084901095750.jpg"
        },{
            li:6,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084901423875.jpg"
        },{
            li:7,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084901736375.jpg"
        },{
            li:8,
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160324084902017625.jpg"
        }],
        markers:[{
            id:12,
            latitude:"29.306314",
            longitude:"120.07115",
        }],
    },
    onLoad:function(){
        var that=this;
        console.log(that.data.housetu.month);
        var newChart= new charts({
            canvasId: 'price-chart2',
            type: 'line',
            categories: that.data.housetu.month,
            series: [{
                name: '价格走势',
                data: that.data.housetu.data1,
                format: function (val) {
                    return val.toFixed(0) + '万';
                }
            }],
            yAxis: {
                title: '',
                format: function (val) {
                    return parseInt(val);
                },
                min: 0
            },
            width: 350,
            height: 150
        });
    },
    onShow:function () {

    },
})