var util = require('../../utils/util.js')
var charts =  require('../../utils/wxcharts-min.js')
Page({
    data: {
        chengjiaolist:[{
            cheku:"32",
            communityname:"荷塘月色",
            dateC:"2015-08-01",
            direction:"南北",
            housearea:"156.47",
            housefloors:"低楼层",
            houseid:"15971",
            housepic:"",
            housetypes:"3室2厅",
            priceC:"167"
        },{
            cheku:"35",
            communityname:"荷塘月色",
            dateC:"2015-07-18",
            direction:"南北",
            housearea:"175",
            housefloors:"低楼层",
            houseid:"",
            housepic:"http://apmcdn.eallcn.com/app_yun/2017-07/D20/51/fyimg/1500534713750.jpg",
            housetypes:"4室2厅",
            priceC:"170"
        },{
            cheku:"32",
            communityname:"荷塘月色",
            dateC:"2015-07-03",
            direction:"南北",
            housearea:"155",
            housefloors:"低楼层",
            houseid:"16419",
            housepic: "",
            housetypes:"3室2厅",
            priceC:"161"
        }],
        detail:[{
            id:"314",
            junjia2:"18156",
            listingprice:"18101",
            name:"荷塘月色",
            regional1:"7",
            regional2:"51"
        }],
        priceyczoushi:{
            data:[15730, 15093, 17527, 17004, 18101, 18156],
            month:["5月", "6月", "7月", "8月", "9月", "10月"]
        },
        pricezoushi:{
            data1:[16052, 15355, 17162, 17004, 18101, 18156],
            data2:[15427, 15410, 17274, 18146, 18441, 17062],
            month:["5月", "6月", "7月", "8月", "9月", "10月"],
            num:[0, 0, 0, 0, 0, 0]
        },
        tab:0,
    },
    onLoad:function(){
        var that=this;
        var newChart= new charts({
            canvasId: 'price-chart',
            type: 'line',
            categories: that.data.priceyczoushi.month,
            series: [{
                name: '预测均价走势',
                data: that.data.priceyczoushi.data,
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
        var newChart2= new charts({
            canvasId: 'price-chart2',
            type: 'line',
            categories: that.data.pricezoushi.month,
            series: [{
                name: '参考均价',
                data: that.data.pricezoushi.data1,
                format: function (val) {
                    return val.toFixed(0) + '万';
                }
            },{
                name: '商圈参考均价',
                data: that.data.pricezoushi.data2,
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
    tabChange:function(e){
        console.log(e.currentTarget.dataset.tabindex);
        var n_tabindex=e.currentTarget.dataset.tabindex;
        var n_tab=this.data.tab;
        if(n_tabindex!=n_tab){
            this.setData({
                tab:n_tabindex
            })
        }
    }
})