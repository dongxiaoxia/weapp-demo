var functions = require( '../functions.js' )
var url = 'http://www.tngou.net/tnfs/api/show'
Page( {
  data: {
    gallerys: []
  },
  onLoad: function( options ) {
    var that = this
    functions.show.call( that, url, options.id, function( data ) {
      
    })
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})