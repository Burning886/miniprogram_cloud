// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dzList: [],
    currentPage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDz(this.data.currentPage)
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      currentPage: this.data.currentPage + 1
    })
    this.getDz(this.data.currentPage)
  },

  getDz(page) {
    var that = this;
    wx.cloud.callFunction({
      name: "duanzi",
      data: {
        page: 1,
        count: 10,
        type: "image"
      },
      success: function (res) {
        console.log(res)
        let newArr = res.result.result.concat(that.data.dzList)
        that.setData({
          dzList: newArr
        })
      }
    })
  },
})