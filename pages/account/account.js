Page({
  data: {
    accountList:[
      {
        acTopPic:"../imgs/money.png",
        optionTop:"资金统计",
        acBottomPic:"../imgs/myinvest.png",
        optionBottom:"我的投资"
      },
      {
        acTopPic:"../imgs/recommend.png",
        optionTop:"推荐好友拿奖励",
        acBottomPic:"../imgs/envelop.png",
        optionBottom:"我的红包"
      },
      {
        acTopPic:"../imgs/idcard.png",
        optionTop:"银行卡",
        acBottomPic:"../imgs/record.png",
        optionBottom:"交易记录"
      }
    ],
     guideRight:"../imgs/right.png",
     acTopPic:"../imgs/protect.png",
     optionTop:"账号安全",
     level:"低",
     userName:"lpf123",
     people:"../imgs/people.png",
     info:"../imgs/info.png",
     accountTotle:'8888.00',
     profit:'0.00',
     profiting:'0.00'
  },
  onLoad:function(options){ 
    if(this.data.userName=="lpf123"){
      wx.navigateTo({
          url:'../user/login'
      })
    }
  }

})