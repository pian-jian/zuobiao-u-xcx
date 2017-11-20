var util = require('../../utils/util.js')

Page({
    data:{
        multiObj:{
            region:[{id:0,text:'不限',isselect:0},
                {id:1,text:'北苑',isselect:0},
                {id:2,text:'江东',isselect:0},
                {id:3,text:'稠城',isselect:0},
                {id:4,text:'稠江',isselect:0},
                {id:5,text:'廿三里',isselect:0},
                {id:6,text:'福田',isselect:0},
                {id:7,text:'城西',isselect:0},
                {id:8,text:'后宅',isselect:0},
                {id:9,text:'乡镇',isselect:0},
                {id:10,text:'周边',isselect:0}],
            filter:[{id:0,text:'不限',isselect:0},
                {id:1,text:'北苑',isselect:0},
                {id:2,text:'江东',isselect:0},
                {id:3,text:'稠城',isselect:0},
                {id:4,text:'稠江',isselect:0},
                {id:5,text:'廿三里',isselect:0},
                {id:6,text:'福田',isselect:0},
                {id:7,text:'城西',isselect:0}],
            order:[{id:0,text:'默认',isselect:0},
                {id:1,text:'好评率从高到低',isselect:0},
                {id:2,text:'成交量从高到低',isselect:0},
                {id:3,text:'带看量从高到低',isselect:0}],
            number:"",
        },
        valueObj:{},
        list:[{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"225",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494248795741250.jpg",
            regional:"北苑",
            tiaoshu:"3",
            username:"钟贵均",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"191",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494241760585000.png",
            regional:"北苑",
            tiaoshu:"4",
            username:"刘俊微",
            zhicheng:"经纪人" 
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"9",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131077785410801250.JPG",
            regional:"北苑",
            tiaoshu:"2",
            username:"曾建民",
            zhicheng:"分行经理"
        },{
            dianName:"贝村二店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"533",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494262386522500.jpg",
            regional:"北苑",
            tiaoshu :"5",
            username:"敖显帮",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping :"",
            id:"11",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131495030663868372.jpg",
            regional:"北苑",
            tiaoshu:"0",
            username:"崔红霞",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"271",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494253165585000.JPG",
            regional:"北苑",
            tiaoshu:"14",
            username:"刘兵",
            zhicheng:"经纪人",
        },{
            dianName:"江滨店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"609",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131495046918505576.jpg",
            regional:"北苑",
            tiaoshu:"1",
            username:"洪智威",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"215",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494246697928750.jpg",
            regional:"北苑",
            tiaoshu :"3",
            username:"丁起",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,",
            haoping:"100",
            id:"193",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131494242781678750.jpg",
            regional:"北苑",
            tiaoshu:"6",
            username:"肖盛福",
            zhicheng:"经纪人"
        },{
            dianName:"贝村一店",
            displayC:",1,2,3,4,5,6,",
            haoping:"100",
            id:"364",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131493396831835000.jpg",
            regional:"北苑",
            tiaoshu:"2",
            username:"欧阳健恒",
            zhicheng:"经纪人"
        }],
        nvalue:"",
        scrollHeight:200,
        housenumvalue:"",
        modalHide:true,
        tbhide:"",
        itemtype:[{

        }]
    },
    onLoad:function (opt) {
        var that=this;
        util.setBarTitle("经纪人")
        console.log(opt);
        if(opt){
            var n_multiObj=this.data.multiObj;
            for (var i in opt){
                console.log(i);
                if(i=='filter'){
                    opt[i].split(',').map(function(r,n){
                        n_multiObj[i].map(function(c,m){
                            if(r==c.id){
                                c.isselect=1;
                            }
                            return c;
                        })
                    })
                }else{
                    n_multiObj[i].map(function(r,n){
                        if(r.id==opt[i]){
                            r.isselect=1;
                        }
                        return r;
                    })
                }
            }
            this.setData({
                valueObj:opt,
                multiObj:n_multiObj
            })
        }
        wx.getSystemInfo({
            success:function(res){
                that.setData({
                    windowWidth:res.windowWidth,
                    windowHeight:res.windowHeight,
                    scrollHeight:res.windowHeight-56
                });
            }
        });

        var liatq=[{lat:123,lng:45},{lat:123,lng:45},{lat:123,lng:45},{lat:123,lng:45},{lat:123,lng:45},{lat:123,lng:45}];
        var n_liatq=[];
        liatq.map(function(r,n){
            n_liatq.push([r.lat,r.lng])
        });
        console.log('n_liatq：',n_liatq);
    },
    showTypeView:function(e){
        var n_nvalue=e.currentTarget.dataset.tabType;
        console.log('n_nvalue:',n_nvalue);
        this.setData({
            modalHide:'',
            nvalue:n_nvalue
        })
    },
    setFilterType:function(){
        console.log(this.data.valueObj)
        this.setData({
            modalHide:true,
        })
    },
    setTypeItem:function(e){
        var n_typeitem=e.currentTarget.dataset;
        var n_valueObj=this.data.valueObj;
        var n_multiObj=this.data.multiObj;
        switch (n_typeitem.tabType){
            case "filter":
                if(n_typeitem.tagItemId==0){
                    n_valueObj.filter=0;
                    n_multiObj[n_typeitem.tabType].map(function(r,n){
                        r.isselect=0
                        return r;
                    })
                }else{
                    var n_value_tags=[];
                    var n_value_tags_index=-1;
                    if(n_valueObj.filter){
                        if(n_valueObj.filter.indexOf(",")==-1){
                            n_value_tags[0]=n_valueObj.filter;
                        }else{
                            n_value_tags=n_valueObj.filter.split(",");
                        }
                        n_value_tags.map(function(r,n){
                            if(r==n_typeitem.tagItemId.toString()) {
                                n_value_tags_index=n;
                            }
                        })
                        if(n_value_tags_index!=-1){
                            n_value_tags.splice(n_value_tags_index,1);
                        }else{
                            n_value_tags.push(n_typeitem.tagItemId.toString());
                        }
                        n_valueObj.filter=n_value_tags.join(",");
                    }else{
                        n_valueObj[n_typeitem.tabType]=n_typeitem.tagItemId.toString();
                    }
                    n_multiObj[n_typeitem.tabType].map(function(r,n){
                        if(n_typeitem.tagItemId==0){
                            r.isselect=0
                        }else{
                            if(r.id==n_typeitem.tagItemId){
                                r.isselect=r.isselect==0?1:0;
                            }
                        }
                        return r;
                    })
                }
                this.setData({
                    valueObj:n_valueObj,
                    multiObj:n_multiObj
                })
            break;
            default:
                n_multiObj[n_typeitem.tabType].map(function(r,n){
                    if(n_typeitem.tagItemId!=0&&r.id==n_typeitem.tagItemId){
                        r.isselect=1;
                    }else{
                        r.isselect=0;
                    }
                    return r;
                })
                n_valueObj[n_typeitem.tabType]=n_typeitem.tagItemId;
                this.setData({
                    valueObj:n_valueObj,
                    multiObj:n_multiObj,
                    modalHide:true,
                })
                console.log(this.data.valueObj)
            break
        }
    },

})