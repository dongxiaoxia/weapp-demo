var data = {
    name: '东小侠',
    array: [ 1, 2, 3, 4, 5 ],
    view: 'MINA',
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1,
    markers: [ {
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园',
        desc: '我现在的位置'
    }],
    covers: [ {
        latitude: 23.099794,
        longitude: 113.324520,
        iconPath: '../images/car.png',
        rotate: 10
    }, {
            latitude: 23.099298,
            longitude: 113.324129,
            iconPath: '../images/car.png',
            rotate: 90
        }]
}

Page( {
    data: data,
    changeName: function( e ) {
        this.setData( {
            name: getApp().demo
        })
    },
    add: function( e ) {
        wx.request( {
            url: 'http://zy.uya.ren/tokens',
            data: {
            
            },
            method:"POST",
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                console.log( res.data )
            }
        })
        this.setData( {
            count: this.data.count + 1
        })
    }
})