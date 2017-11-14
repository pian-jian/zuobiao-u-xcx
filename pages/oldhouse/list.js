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
            school:[{id:0,text:'不限',isselect:0},
                {id:1,text:'小学',isselect:0},
                {id:2,text:'中学',isselect:0}],
            price:[{id:0,text:'不限',isselect:0},
                {id:1,text:'50万以下',isselect:0},
                {id:2,text:'50万-100万',isselect:0},
                {id:3,text:'100万-120万',isselect:0},
                {id:4,text:'120万-150万',isselect:0},
                {id:5,text:'120万-150万',isselect:0},
                {id:6,text:'150万-200万',isselect:0},
                {id:7,text:'200万-250万',isselect:0},
                {id:8,text:'250万-300万',isselect:0},
                {id:9,text:'300万-350万',isselect:0},
                {id:10,text:'350万以上',isselect:0},
                {id:11,text:'自定义价格',isselect:0}],
            spec:[{id:0,text:'不限',isselect:0},
                {id:1,text:'1室',isselect:0},
                {id:2,text:'2室',isselect:0},
                {id:3,text:'3室',isselect:0},
                {id:4,text:'4室',isselect:0},
                {id:5,text:'5室',isselect:0},
                {id:6,text:'5室以上',isselect:0}],
            order:[{id:0,text:'不限',isselect:0},
                {id:1,text:'总价由低到高',isselect:0},
                {id:2,text:'总价由高到低',isselect:0}],
            style:[{id:0,text:'不限',isselect:0},
                {id:1,text:'毛坯',isselect:0},
                {id:2,text:'简装',isselect:0},
                {id:3,text:'中装',isselect:0},
                {id:4,text:'精装',isselect:0},
                {id:5,text:'豪装',isselect:0}],
            area:[{id:0,text:'不限',isselect:0},
                {id:1,text:'50平以下',isselect:0},
                {id:2,text:'50-75平',isselect:0},
                {id:3,text:'75平-100平',isselect:0},
                {id:4,text:'100-120平',isselect:0},
                {id:5,text:'120-144平',isselect:0},
                {id:6,text:'144-160平',isselect:0},
                {id:7,text:'160-200平',isselect:0},
                {id:8,text:'200平以上',isselect:0}],
            tags:[{id:0,text:'不限',isselect:0},
                {id:1,text:'学区房',isselect:0},
                {id:2,text:'满二唯一',isselect:0},
                {id:3,text:'新上',isselect:0},
                {id:4,text:'独家',isselect:0},
                {id:5,text:'降价',isselect:0},
                {id:6,text:'有钥匙',isselect:0}],
            number:"",
        },
        valueObj:{},
        nvalue:"",
        list:[1,2,1,1,2,1,2,1,2,2,2,2,2,2,1,2,2,2,12,2],
        scrollHeight:200,
        housenumvalue:"",
        modalHide:true,
        thregionhide:"",
        thschoolhide:true,
        thpricehide:"",
        thspechide:"",
        thmorehide:"",
        tbhide:"",
        tbmorehide:true,

    },
    onLoad:function (opt) {
        var that=this;
        util.setBarTitle("二手房")
        if(opt){
            var n_multiObj=this.data.multiObj;
            for (var i in opt){
                console.log(i);
                n_multiObj[i].map(function(r,n){
                    if(r.id==opt[i]){
                        r.isselect=1;
                    }
                    return r;
                })
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
    },
    showTypeView:function(e){
        var n_nvalue=e.currentTarget.dataset.tabType;
        if(n_nvalue=="region"||n_nvalue=="price"||n_nvalue=="spec"||n_nvalue=="school"){
            this.setData({
                tbmorehide:true,
                modalHide:"",
                nvalue:n_nvalue,
                tbhide:"",
            })
        }else if(n_nvalue=="more"){
            n_nvalue="order";
            this.setData({
                tbmorehide:"",
                modalHide:"",
                nvalue:n_nvalue,
                tbhide:true,
            })

        }else{
            this.setData({
                tbmorehide:"",
                modalHide:"",
                nvalue:n_nvalue,
                tbhide:true,
            })
        }
    },
    setMoreType:function(){
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
            case "order":
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
                })
                break;
            case "style":
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
                })
                break;
            case "area":
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
                })
                break;
            case "tags":
                if(n_typeitem.tagItemId==0){
                    n_valueObj.tags=0;
                    n_multiObj[n_typeitem.tabType].map(function(r,n){
                        r.isselect=0
                        return r;
                    })
                }else{
                    var n_value_tags=[];
                    var n_value_tags_index=-1;
                    if(n_valueObj.tags){
                        if(n_valueObj.tags.indexOf(",")==-1){
                            n_value_tags[0]=n_valueObj.tags;
                        }else{
                            n_value_tags=n_valueObj.tags.split(",");
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
                        n_valueObj.tags=n_value_tags.join(",");
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
            case "number":
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
    housenumInput:function(e){
        var n_value=e.detail.value;
        var n_valueObj=this.data.valueObj;
        n_valueObj.number=n_value;
        this.setData({
            housenumvalue:n_value,
            valueObj:n_valueObj
        })
    }
})