const CTYPE = {
    REGION_PATH: window.location.protocol + '//c1.wakkaa.com/assets/pca-code.json',
    qqmapKey: 'LEHBZ-CAIAJ-MKTFI-FRZEA-GMUSJ-XYFSK',
    accountType: { mobile: 1 },
    userType: { user: 2 },
    bannerTypes: { HOME: 1 },

    pagination: { pageSize: 6 },
    siginType: { password: 1, valCode: 2 },
    imgeditorscale: {
        square: 1,
        rectangle_h: 0.5625,
        identity: 0.63
    },
    namespace: {
        default: 'file'
    },
    tradeType: [
        { key: 0, title: '全部', label: '全部订单', class: 'all-trade' },
        { key: 1, title: '待付款', label: '等待付款', class: 'no-pay' },
        { key: 2, title: '待发货', label: '买家已付款', class: 'payed' },
        { key: 3, title: '待收货', label: '卖家已发货', class: 'shipped' },
        { key: 4, title: '已关闭', label: '订单已关闭', class: 'canceled' },
        { key: 5, title: '已完成', label: '订单已完成', class: 'finished' },
    ],
    formItemLayout: {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 3 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    },
    homeItem: {
        homeItemTitles: [
            { key: 'BARGAIN', more_link: '/bargins' },
            { key: 'NEW_PRODUCT', more_link: '/products' }
        ]
    },
};

export default CTYPE;