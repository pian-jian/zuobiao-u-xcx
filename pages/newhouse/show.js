var util = require('../../utils/util.js')

Page({
    data: {
        list:[{
            addressC:"义乌市后宅街道，与商城大道相邻",
            completion_time:"2017-01-22",
            counts:"2",
            discount:"True",
            field1:"201611280525503437main.jpg",
            id:"35",
            imglist:"4",
            islimitbuy:"True",
            mapx:"120.077582",
            mapy:"29.389429",
            nameC:"绿城房地产集团有限公司",
            open_time:"2014-03-10",
            preferentialC: "",
            price:"7200",
            propertyright:"70",
            regional:"后宅",
            regionalid:"9",
            saleaddress:"九洲百合位于义乌市后宅街道，与商城大道相邻",
            stateC:"在售",
            telC:"4000-669-000转0",
            titleC:"九州小区",
            typC:"普通住宅"
        }],
        saletype:[{
            areaC:"126.20",
            htype:"主卧带卫,厨卫不对门,户型方正,客厅朝南",
            id:"137",
            imgC:"http://www.zuobiao.wang/uploadFile/loupanimg/201611280527070156hx.jpg",
            shiC:"3",
            tingC:"2",
            price:"90.9",
            htypearray:["主卧带卫","厨卫不对门","户型方正","客厅朝南"]
        },{
            areaC:"144.30",
            htype:"厨卫不对门,户型方正,卧室带阳台,观景落地窗,两卧朝南",
            htypearray:["厨卫不对门","户型方正","卧室带阳台","观景落地窗","两卧朝南"],
            id:"138",
            imgC:"http://www.zuobiao.wang/uploadFile/loupanimg/201611280526518437hx.jpg",
            shiC:"3",
            tingC:"2",
            price:"103.9"
        }],
        samehouse:[{id: "33",
                field1: "http://www.zuobiao.wang/uploadFile/loupanimg/201601301138328050main.jpg",
                titleC: "城北商业中心",
                sale_price: "0"}],
        moreImgCarry:[{
            id:1,
            img:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/201611280525503437main.jpg"
        },{
            id:2,
            img:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/20161128052621437500.png"
        },{
            id:3,
            img:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/20161128052621687500.jpg"
        },{
            id:4,
            img:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/20161128052621968750.jpg"
        },{
            id:5,
            img:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/20161128052622203125.jpg"
        }],
        markers:[{
            id:12,
            latitude:"29.389429",
            longitude:"120.077582",
        }],
    },
    onLoad:function () {
        this.setData({
            mapimg:util.mapimg(this.data.list[0].mapy,this.data.list[0].mapx,this.data.list[0].titleC)
        })
    }

})