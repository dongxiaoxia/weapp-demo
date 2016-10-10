var functions = require( '../functions.js' )
var url = 'http://www.tngou.net/tnfs/api/classify'
Page( {
  data: {
    classify: []
  },
  onLoad: function( options ) {
    var that = this
    functions.getClassify.call( that, url,function( data ) {
      
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