var functions = require( '../functions.js' )
var url = 'http://www.tngou.net/tnfs/api/list'
var rows = 20
Page( {
  data: {
    hasMore: true,
    showLoading: true,
    page: 1,
    girls: []
  },
  onPullDownRefresh: function() {
    console.log( 'onPullDownRefresh', new Date() )
  },
  scroll: function( e ) {
    //console.log(e)
  },
  onLoad: function() {
    var that = this
    functions.list.call( that, url, that.data.page, rows, 3, function( data ) {
      that.setData( {
        showLoading: false
      })
    })
  },
  scrolltolower: function() {
    var that = this
    functions.list.call( that, url, that.data.page, rows, 3, function( data ) {})
  },
  viewDetail: function( e ) {
    wx.navigateTo( {
      url: '../detail/detail?id='+e.target.id
    })
  }
})
