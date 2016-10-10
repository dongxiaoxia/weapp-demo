
module.exports = {
    //获取图片列表
    list: function( url, page, rows, id, cb ) {
        var that = this
        fetch( url + '?page=' + page + '&rows=' + rows + '&id=' + id ).then( function( response ) {
            response.json().then( function( data ) {
                if( data.tngou == null ) {
                    that.setData( {
                        hasMore: false,
                    })
                } else {
                    that.setData( {
                        girls: that.data.girls.concat( data.tngou ),
                        page: that.data.page + 1
                    })
                }
                cb( data )
            })
        })
    },
    //获取图片详情
    show: function( url, id, cb ) {
        var that = this
        fetch( url + '?id=' + id ).then( function( response ) {
            response.json().then( function( data ) {
                that.setData( {
                    gallerys: data.list
                })
                cb( data )
            })
        })
    },

    //图片分类
    getClassify: function( url, cb ) {
        var that = this
         fetch(url).then( function( response ) {
            response.json().then( function( data ) {
                that.setData( {
                    classify: data.tngou
                })
                cb( data )
            })
        })
    }
}
