var util = require('../../utils/util.js')

Page({
    data:{
        locallng:"120.07115",
        locallat:"29.306314",
        aroundmarkers:[
            [{
                id:1,
                latitude:"29.306314",
                width:30,
                height:30,
                alpha:0.5,
                longitude:"120.07113",
                tittle:"",
                iconPath:"../../imgs/local.png",
                callout:{
                    content:"香山小区",
                    color:"#d81e06",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                }
            },{
                id: 2,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.306314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.074218",
                tittle:"dfg",
                callout:{
                    content:"义乌高新学院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 3,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.306314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.004218",
                tittle:"dfg",
                callout:{
                    content:"义乌高新学院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 4,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.309314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.070218",
                tittle:"dfg",
                callout:{
                    content:"义乌高新学院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 5,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.302314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.074218",
                tittle:"dfg",
                callout:{
                    content:"义乌高新学院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            }],
            [{
                id:1,
                latitude:"29.306314",
                width:30,
                height:30,
                alpha:0.5,
                longitude:"120.07113",
                tittle:"",
                iconPath:"../../imgs/local.png",
                callout:{
                    content:"香山小区",
                    color:"#d81e06",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                }
            },{
                id: 2,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.304314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.070218",
                tittle:"dfg",
                callout:{
                    content:"义乌人民医院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 3,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.306314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.004218",
                tittle:"dfg",
                callout:{
                    content:"义乌人民医院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 4,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.309314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.070218",
                tittle:"dfg",
                callout:{
                    content:"义乌人民医院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 5,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.302314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.074218",
                tittle:"dfg",
                callout:{
                    content:"义乌人民医院21",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            }],
            [{
                id:1,
                latitude:"29.306314",
                width:30,
                height:30,
                alpha:0.5,
                longitude:"120.07113",
                tittle:"",
                iconPath:"../../imgs/local.png",
                callout:{
                    content:"香山小区",
                    color:"#d81e06",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                }
            },{
                id: 2,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.306314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.074218",
                tittle:"dfg",
                callout:{
                    content:"义乌公交001",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 3,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.306314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.004218",
                tittle:"dfg",
                callout:{
                    content:"义乌公交002",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 4,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.309314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.070218",
                tittle:"dfg",
                callout:{
                    content:"义乌公交003",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            },{
                id: 5,
                iconPath:' ../../imgs/latlng.png',
                latitude:"29.302314",
                width: 30,
                height: 30,
                alpha:0.5,
                longitude:"120.074218",
                tittle:"dfg",
                callout:{
                    content:"义乌公交004",
                    color:"#337ab7",
                    fontSize:14,
                    bgColor:"white",
                    display:"ALWAYS",
                    padding:5
                },
            }],
        ],
        iconstyle:[{
            icon:"icon-edu-on",
            text:"教育"
        },{
            icon:"icon-hos",
            text:"医院"
        },
        {
            icon:"icon-bus",
            text:"公交"
        },
        {
            icon:"icon-back",
            text:"银行"
        },
        {
            icon:"icon-game",
            text:"休闲"
        },{
            icon:"icon-buy",
            text:"购物"
        },{
            icon:"icon-sport",
            text:"健身"
        },{
            icon:"icon-food",
            text:"美食"
        }]
    },
    onLoad:function () {
        util.setBarTitle("位置及周边")
        this.setData({
            markers:this.data.aroundmarkers[0]
        })
    },
    onShow:function(){

    },
    searchType:function(e){
        var n_index=e.currentTarget.dataset.iconindex;
        var n_iconstyle=this.data.iconstyle.map(function(r,n){
            if(r.icon.indexOf("-on")!=-1){
                r.icon=r.icon.replace("-on","");
            }
            return r;
        })
        n_iconstyle[n_index].icon=n_iconstyle[n_index].icon+"-on";
        this.setData({
            iconstyle:n_iconstyle,
            markers:this.data.aroundmarkers[n_index]
        })
    }
})