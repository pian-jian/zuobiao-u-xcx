var util = require('../../utils/util.js')

Page({
    data: {
        districtlist:[{id: "4", regional: "稠城", mapX: "120.079379", mapY: "29.311448", numC: "2023"},
            {id: "16", regional: "周边", mapX: "120.167341", mapY: "29.296298", numC: "1969"},
            {id: "3", regional: "江东", mapX: "120.110137", mapY: "29.30896", numC: "1405"},
            {id: "5", regional: "稠江", mapX: "120.049375", mapY: "29.283099", numC: "1019"},
            {id: "2", regional: "北苑", mapX: "120.05861", mapY: "29.3305", numC: "1000"},
            {id: "7", regional: "福田", mapX: "120.113227", mapY: "29.342654", numC: "915"},
            {id: "15", regional: "乡镇", mapX: "120.019085", mapY: "29.324706", numC: "818"},
            {id: "9", regional: "后宅", mapX: "120.071887", mapY: "29.357655", numC: "663"},
            {id: "6", regional: "廿三里", mapX: "120.176683", mapY: "29.332327", numC: "360"},
            {id: "8", regional: "城西", mapX: "119.991417", mapY: "29.303291", numC: "245"},
            ],
        streetlist:[{
            id: "33",
            mapX: "120.080376",
            mapY: "29.307665",
            numC: "511",
            regional: "绣湖广场"
        }, {
            id: "36",
            mapX: "120.094461",
            mapY: "29.318644",
            numC: "348",
            regional: "宾王市场"
        },{
            id: "38",
            mapX: "120.087136",
            mapY: "29.31803",
            numC: "338",
            regional: "五叉路口"
        }, {
            id: "60",
            mapX: "120.10658",
            mapY: "29.328926",
            numC: "324",
            regional: "兴中"
        }, {
            id: "44",
            mapX: "120.065509",
            mapY: "29.310944",
            numC: "184",
            regional: "农贸城"
        },{
            id: "61",
            mapX: "120.087342",
            mapY: "29.32536",
            numC: "163",
            regional: "车站路"
        }, {
            id: "41",
            mapX: "120.081095",
            mapY: "29.313582",
            numC: "127",
            regional: "银泰"
        }, {
            id: "42",
            mapX: "120.08317",
            mapY: "29.303181",
            numC: "106",
            regional: "稠州公园"
        },{
            id:"39",
            mapX:"120.0882",
            mapY:"29.30696",
            numC:"63",
            regional:"篁园市场"
        }],
        villagelist:[{
            id:"556",
            mapX:"120.090657",
            mapY:"29.313747",
            numC:"75",
            regional:"香港城",
        },{
            id:"232",
            mapX:"120.088865",
            mapY:"29.310976",
            numC:"60",
            regional:"沪江路"
        },{
            id:"489",
            mapX:"120.092719",
            mapY:"29.320849",
            numC:"59",
            regional:"孝子祠"
        },{
            id:"488",
            mapX:"120.087549",
            mapY:"29.321817",
            numC:"32",
            regional:"大都置业"
        },{
            id:"434",
            mapX:"120.089117",
            mapY:"29.313779",
            numC:"24",
            regional:"义东路"
        },{
            id:"221",
            mapX:"120.080026",
            mapY:"29.325564",
            numC:"23",
            regional:"金碧神话（臻业大厦）"
        },{
            id:"432",
            mapX:"120.087751",
            mapY:"29.316613",
            numC:"16",
            regional:"义化小区"
        },{
            id:"289",
            mapX:"120.095423",
            mapY:"29.313165",
            numC:"15",
            regional:"稠江路"
        },{
            id:"458",
            mapX:"120.087428",
            mapY:"29.320864",
            numC:"12",
            regional:"和安公寓"
        },{
            id:"479",
            mapX:"120.092404",
            mapY:"29.313621",
            numC:"9",
            regional:"联运路"
        },{
            id:"349",
            mapX:"120.08617",
            mapY:"29.324675",
            numC:"3",
            regional:"车站路（186号-伟业大厦）"
        },{
            id:"312",
            mapX:"120.090981",
            mapY:"29.320376",
            numC:"3",
            regional:"孝子路"
        },{
            id:"326",
            mapX:"120.08772",
            mapY:"29.318924",
            numC:"3",
            regional:"莹波路1号"
        },{
            id:"555",
            mapX:"120.072201",
            mapY:"29.301094",
            numC:"3",
            regional:"稠江小区"
        },{
            id:"329",
            mapX:"120.08794",
            mapY:"29.316739",
            numC:"1",
            regional:"义化路50号"
        }],
        mapscale:12,
        tabindex:0,
    },
    onLoad:function(opt){
        //this.getLocalposition();
        var n_list=[];
        var n_mapscale;
        if(opt){
            switch (opt.type){
                case "street":
                    n_list=this.data.streetlist;
                    n_mapscale=14;
                    break;
                case "village":
                    n_list=this.data.villagelist;
                    n_mapscale=16
                    break;
                default :
                    n_list=this.data.districtlist
                    n_mapscale=12
                    break;
            }
            if(opt.tab){
                this.setData({
                    tabindex:opt.tab
                })
            }

        }

        var markers=[];
        n_list.map(function(r,n){
            markers.push({
                id:r.id,
                content:r.regional,
                color:"white",
                bgColor:"#1273e1",
                padding:"50rpx 30rpx",
                borderRadius:"50%",
                latitude:r.mapY,
                longitude:r.mapX,
                width:20,
                height:20,
                callout:{
                    display:'ALWAYS',
                    content:r.regional+'('+r.numC+')',
                    color:"#ffffff",
                    bgColor:"#1273e1",
                    fontSize:14,
                    padding:20,
                    borderRadius:60,
                },
            })
        })
        this.setData({
            opt:opt,
            mapscale:n_mapscale,
            list:n_list,
            markers:markers,
        })
    },
    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
    },
    /*getLocalposition:function(){
        var that=this;
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(res);
                that.setData({
                    locallng:"120.167341",
                    locallat:"29.296298"
                })
            }
        })
    },*/
    tapCallout:function(e){
        console.log(e);
        var n_url='';
        var thistab=this.data.tabindex
        switch (this.data.opt.type){
            case "street":
                n_url='maphouse?type=village&id=4&tab='+thistab;
                util.link('r',n_url)
                break;
            case "village":
                if(this.data.tabindex==1){
                    n_url='../rentedhouse/list'
                }else if(this.data.tabindex==2){
                    n_url='../newhouse/list'
                }else{
                    n_url='../oldhouse/list'
                }
                util.link('n',n_url)
                break;
            default :
                n_url='maphouse?type=street&id=4&tab='+thistab
                util.link('r',n_url)
                break;
        }

    },
    tabTap:function(e){
        console.log(e.currentTarget.dataset.tabindex);
        var n_tabindex=e.currentTarget.dataset.tabindex;
        if(n_tabindex!=this.data.tabindex){
            this.setData({
                tabindex:n_tabindex
            })
        }
    },

})