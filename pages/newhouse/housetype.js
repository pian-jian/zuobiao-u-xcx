var util = require('../../utils/util.js')

Page({
    data: {
        saletype:[{
            areaC:"126.20",
            housetype:"主卧带卫,厨卫不对门,户型方正,客厅朝南",
            id:"137",
            imgC:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/201611280527070156hx.jpg",
            markC:",1,2,3,4,",
            orientationC:"南北",
            shiC:"3",
            tingC:"2",
            weiC:"2",
        },{
            areaC:"144.30",
            housetype:"厨卫不对门,户型方正,卧室带阳台,观景落地窗,两卧朝南",
            id:"138",
            imgC:"http://www.zuobiao.wang/uploadFile/loupanimg/shuiyin/201611280526518437hx.jpg",
            markC:",2,3,8,9,10,",
            orientationC:"南北",
            shiC:"3",
            tingC:"2",
            weiC:"2"
        }]
    },
    onLoad:function(){
        var n_saletype=this.data.saletype.map(function(r,n){
            r.housetypearray=r.housetype.split(",");
            return r;
        })
        console.log(n_saletype);
        this.setData({
            saletype: n_saletype
        });
    }
})