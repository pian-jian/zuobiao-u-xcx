var util = require('../../utils/util.js')

Page({
    data: {
        list:[{id: "4", regional: "稠城", mapX: "120.079379", mapY: "29.311448", numC: "2023"},
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
        markers:[{
            id:1,
            latitude:"29.291298",
            width: 0,
            height: 0,
            alpha:0.5,
            longitude:"120.167341",
            tittle:"dfg",
            iconPath:"",
           /* callout:{
                display:'ALWAYS',
                content:"测试",
                color:"rgb(255, 255, 255)",
                bgColor:"#1273e1",
                fontSize:14,
                padding:30,
                borderRadius:60,


            },*/
        }
        ]
    },
    onLoad:function(){
        this.getLocalposition();
        console.log("markers",this.data.markers)
        /*var markers=[];
        this.data.list.map(function(r,n){
            console.log(r,n);
            markers.push({
                content:r.regional,
                color:"white",
                bgColor:"#1273e1",
                padding:"50rpx 30rpx",
                borderRadius:"50%",
                latitude:r.mapY,
                longitude:r.mapX,
            })
        })
        console.log("markers",markers);
        this.setData({
            markers:markers,
        })*/
    },
    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
    },
    getLocalposition:function(){
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
    },
})