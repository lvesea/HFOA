let util = require("../../../../../../utils/util");
const app = getApp();

// 待财务审批的url
const getListURL = app.globalData.URL + '/main/mainApprove';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toFinanceDetailList: function (e) {
    let id = e.currentTarget.id;
    let item = this.data.list[id];
    util.goTo("/pages/operatePages/myCheck/checkItem/finance/entertainItem/entertainItem?item=" + JSON.stringify(item));
  },
  toFinanceDetail: function (e) {
    let id = e.currentTarget.id;
    let item = this.data.list[id];
    util.goTo("/pages/operatePages/myCheck/checkItem/finance/entertainItem/entertainItem?canFinance=1&item=" + JSON.stringify(item));
  }
})