var util = require('../../utils/util.js')

Page({
    data: {
        typeobj:[{
            id:1,
            name:'1室'
        },{
            id:2,
            name:'2室'
        },{
            id:3,
            name:'3室'
        },{
            id:4,
            name:'4室'
        },{
            id:5,
            name:'5室'
        },{
            id:6,
            name:'5室以上'
        }],
        directionobj:[{
            id:1,
            name:'南北'
        },{
            id:2,
            name:'朝北'
        },{
            id:3,
            name:'朝南'
        },{
            id:4,
            name:'朝西'
        },{
            id:5,
            name:'朝东'
        },],
        tags:[{
            id:1,
            name:'满二唯一',
            isselect:0
        },{
            id:2,
            name:'学区房',
            isselect:0
        },{
            id:3,
            name:'精装修',
            isselect:0
        },]

    },
    onLoad:function (opt) {
        var infoobj={};
        infoobj.name=opt.text;
        var typearray=[];
        this.data.typeobj.map(function(r,n){
            typearray.push(r.name)
        })
        var directionarray=[];
        this.data.directionobj.map(function(r,n){
            directionarray.push(r.name)
        })
        var agearray=[];
        agearray[0]=new Date().getFullYear();
        for(var i=1;i<=100;i++){
            agearray.push(agearray[0]-i);
        }
        this.setData({
            infoobj:infoobj,
            typearray:typearray,
            directionarray:directionarray,
            agearray:agearray
        })
        console.log(this.data.infoobj)
    },
    inputArea:function (e) {
        console.log(e.detail.value);
        var n_val=e.detail.value;
        var n_infoobj=this.data.infoobj;
        n_infoobj.area=n_val;
        this.setData({
            typeindex:n_val,
            infoobj:n_infoobj
        })

    },
    typeChange:function(e){
        console.log(e.detail.value);
        var n_val=e.detail.value;
        var n_infoobj=this.data.infoobj;
        n_infoobj.type=this.data.typeobj[n_val].id
        this.setData({
            typeindex:n_val,
            infoobj:n_infoobj
        })
    },
    directionChange:function (e) {
        console.log(e.detail.value);
        var n_val=e.detail.value;
        var n_infoobj=this.data.infoobj;
        n_infoobj.direction=this.data.directionobj[n_val].id
        this.setData({
            directionindex:n_val,
            infoobj:n_infoobj
        })
    },
    ageChange:function (e) {
        console.log(e.detail.value);
        var n_val=e.detail.value;
        var n_infoobj=this.data.infoobj;
        n_infoobj.age=this.data.agearray[n_val]
        this.setData({
            ageindex:n_val,
            infoobj:n_infoobj
        })
    },
    setTags:function (e) {
        console.log(e.currentTarget.dataset.tagid);
        var n_val=e.currentTarget.dataset.tagid;
        var n_tagsval=[];
        var n_infoobj=this.data.infoobj;
        var n_tags=this.data.tags.map(function(r,n){
            if(r.id==n_val){
                if(r.isselect==0){
                    r.isselect=1;
                    n_tagsval.push(r.id)
                }
            }else{
                if(r.isselect==1){
                    n_tagsval.push(r.id)
                }
            }
            return r;
        })
        n_infoobj.tags=n_tagsval.join(",");
        this.setData({
            tags:n_tags,
            infoobj:n_infoobj
        })
    },
    formSubmit:function (e) {
       console.log(this.data.infoobj)
       // console.log(e.detail.value)
        wx.navigateTo({
            url: 'show'
        })
    }

})