import api from './api'
import util from '../utils/util'
import tip from '../utils/tip'


/**
 * 检查token是否有效
 */
const onIsCheckTokenApi = async function (params, result) {
  const json = await api.isCheckTokenApi({
    query: params,
    method: 'get'
  })
  util.log('onIsCheckTokenApi:', { params, json })
  result(json)
}

/**
 * 登录
 */
const onWxLoginApi = async function (params, result) {
  const json = await api.wxLoginApi({
    query: params,
    method: 'POST'
  })
  util.log('onWxLoginApi:', { params, json })
  result(json)
}

/**
 * 注册
 */
const onRegisterApi = async function (params, result) {
  const json = await api.registerApi({
    query: params,
    method: 'POST'
  })
  util.log('onRegisterApi:', { params, json })
  result(json)
}

/**
 * banner
 */
const onGetBannerList = async function (params, result) {
  const json = await api.bannerApi({
    query: params,
    method: params.method || 'GET'
  })
  util.log('onGetBannerList:', { params, json })
  result(json)
}

/**
 * category
 */
const onGetCategoryList = async function (params, result) {
  const json = await api.categoryApi({
    query: params,
    method: params.method || 'GET'
  })
  util.log('onGetCategoryList:', { params, json })
  result(json)
}

/**
 * 系统参数
 */
const onGetSysParamsApi = async function (params, result) {
  const json = await api.sysParamsApi({
    query: params,
    method: params.method || 'GET'
  })
  util.log('onGetSysParamsApi:', { params, json })
  result(json)
}

/**
 * 获取商品列表
 */
const onGetGoodsListApi = async function (params, result) {
  const json = await api.getGoodsListApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetGoodsListApi:', { params, json })
  result(json)
}

/**
 * 我的砍价
 */
const onGetMyKanJiaApi = async function (params, result) {
  const json = await api.getMyKanJiaApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetMyKanJiaApi:', { params, json })
  result(json)
}



/**
 * 获取可砍价商品列表
 */
const onGetKanJiaListApi = async function (params, result) {
  const json = await api.getKanJiaListApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetKanJiaListApi:', { params, json })
  result(json)
}

/**
 * 加入砍价
 */
const onJoinKanJiaApi = async function (params, result) {
  const json = await api.joinKanJiaApi({
    query: params,
    method: 'POST'
  })
  util.log('onJoinKanJiaApi:', { params, json })
  result(json)
}

/**
 * 获取砍价设置
 */
const onGetGoodsKanJiaSetApi = async function (params, result) {
  const json = await api.getGoodsKanJiaSetApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetGoodsKanJiaSetApi:', { params, json })
  result(json)
}

/**
 * 砍价详情
 */
const onKanJiaDetailApi = async function (params, result) {
  const json = await api.kanJiaDetailApi({
    query: params,
    method: 'POST'
  })
  util.log('onKanJiaDetailApi:', { params, json })
  result(json)
}

/**
 * 帮别人砍一刀
 */
const onHelpKanJiaApi = async function (params, result) {
  const json = await api.helpKanJiaApi({
    query: params,
    method: 'POST'
  })
  util.log('onHelpKanJiaApi:', { params, json })
  result(json)
}

/**
 * 帮忙砍价信息
 */
const onHelpKanJiaInfoApi = async function (params, result) {
  const json = await api.helpKanJiaInfoApi({
    query: params,
    method: 'GET'
  })
  util.log('onHelpKanJiaInfoApi:', { params, json })
  result(json)
}

/**
 * 删除砍价
 */
const onDelKanJiaApi = async function (params, result) {
  const json = await api.delKanJiaApi({
    query: params,
    method: 'POST'
  })
  util.log('onDelKanJiaApi:', { params, json })
  result(json)
}

/**
 * 获取商品详情
 */
const onGetGoodsDetailApi = async function (params, result) {
  const json = await api.getGoodsDetailApi({
    query: params,
    method: params.method || 'GET'
  })
  util.log('onGetGoodsDetailApi:', { params, json })
  result(json)
}

/**
 * 检查商品收藏
 */
const onIsCheckFavGoodsApi = async function (params, result) {
  const json = await api.isCheckFavGoodsApi({
    query: params,
    method: params.method || 'GET'
  })
  util.log('onIsCheckFavGoodsApi:', { params, json })
  result(json)
}

/**
 * 添加商品收藏
 */
const onAddFavGoodsApi = async function (params, result) {
  const json = await api.addFavGoodsApi({
    query: params,
    method: 'POST'
  })
  util.log('onAddFavGoodsApi:', { params, json })
  result(json)
}

/**
 * 删除商品收藏
 */
const onDelFavGoodsApi = async function (params, result) {
  const json = await api.delFavGoodsApi({
    query: params,
    method: 'POST'
  })
  util.log('onDelFavGoodsApi:', { params, json })
  result(json)
}

/**
 * 获取商品规格价格
 */
const onGetGoodsAttrPriceApi = async function (params, result) {
  const json = await api.getGoodsAttrPriceApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetGoodsAttrPriceApi:', { params, json })
  result(json)
}

/**
 * 获取商品评价列表
 */
const onGetGoodsReputationApi = async function (params, result) {
  const json = await api.getGoodsReputationApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetGoodsReputationApi:', { params, json })
  result(json)
}

/**
 * 获取拼团详情
 */
const onGetPingTuanDetailApi = async function (params, result) {
  const json = await api.getPingTuanDetailApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetPingTuanDetailApi:', { params, json })
  result(json)
}

/**
 * 获取所有进行中的团购
 */
const onGetGoodsPingTuanApi = async function (params, result) {
  const json = await api.getGoodsPingTuanApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetGoodsPingTuanApi:', { params, json })
  result(json)
}

/**
 * 我的拼团记录
 */
const onGetMyPingTuanApi = async function (params, result) {
  const json = await api.getMyPingTuanApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetMyPingTuanApi:', { params, json })
  result(json)
}

/**
 * 立即开团
 */
const onOpenPingTuanApi = async function (params, result) {
  const json = await api.openPingTuanApi({
    query: params,
    method: 'POST'
  })
  util.log('onOpenPingTuanApi:', { params, json })
  result(json)
}


/**
 * 获取开团设置
 */
const onGetGoodsPingTuanSetApi = async function (params, result) {
  const json = await api.getGoodsPingTuanSetApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetGoodsPingTuanSetApi:', { params, json })
  result(json)
}

/**
 * 获取可领取优惠券列表
 */
const onGetShopCouponsApi = async function (params, result) {
  const json = await api.getShopCouponsApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetShopCouponsApi:', { params, json })
  result(json)
}

/**
 * 获取我的优惠券列表
 */
const onGetMyCouponsApi = async function (params, result) {
  const json = await api.getMyCouponsApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetMyCouponsApi:', { params, json })
  result(json)
}

/**
 * 领取优惠券
 */
const onFetchCouponsApi = async function (params, result) {
  const json = await api.fetchCouponsApi({
    query: params,
    method: 'POST'
  })
  util.log('onFetchCouponsApi:', { params, json })
  result(json)
}

/**
 * 签到
 */
const onScoreSignApi = async function (params, result) {
  const json = await api.scoreSignApi({
    query: params,
    method: 'POST'
  })
  util.log('onScoreSignApi:', { params, json })
  result(json)
}

/**
 * 签到记录
 */
const onScoreSignLogsApi = async function (params, result) {
  const json = await api.scoreSignLogsApi({
    query: params,
    method: 'POST'
  })
  util.log('onScoreSignLogsApi:', { params, json })
  result(json)
}

/**
 * 签到记录
 */
const onTodaySignedApi = async function (params, result) {
  const json = await api.todaySignedApi({
    query: params,
    method: 'GET'
  })
  util.log('onTodaySignedApi:', { params, json })
  result(json)
}

/**
 * 签到记录
 */
const onSignRulesApi = async function (params, result) {
  const json = await api.signRulesApi({
    query: params,
    method: 'GET'
  })
  util.log('onSignRulesApi:', { params, json })
  result(json)
}

/**
 * 用户资产
 */
const onUserAmountApi = async function (params, result) {
  const json = await api.userAmountApi({
    query: params,
    method: 'GET'
  })
  util.log('onUserAmountApi:', { params, json })
  result(json)
}

/**
 * 用户信息详情
 */
const onUserDetailApi = async function (params, result) {
  const json = await api.userDetailApi({
    query: params,
    method: 'GET'
  })
  util.log('onUserDetailApi:', { params, json })
  result(json)
}

/**
 * 获取地址列表
 */
const onGetAddressListApi = async function (params, result) {
  const json = await api.getAddressListApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetAddressListApi:', { params, json })
  result(json)
}

/**
 * 添加用户地址
 */
const onAddAddressApi = async function (params, result) {
  const json = await api.addAddressApi({
    query: params,
    method: 'POST'
  })
  util.log('onAddAddressApi:', { params, json })
  result(json)
}

/**
 * 更新用户地址
 */
const onUpdateAddressApi = async function (params, result) {
  const json = await api.updateAddressApi({
    query: params,
    method: 'POST'
  })
  util.log('onUpdateAddressApi:', { params, json })
  result(json)
}

/**
 * 删除用户地址
 */
const onDelAddressApi = async function (params, result) {
  const json = await api.delAddressApi({
    query: params,
    method: 'POST'
  })
  util.log('onDelAddressApi:', { params, json })
  result(json)
}

/**
 * 获取用户默认地址
 */
const onGetDefaultAddressApi = async function (params, result) {
  const json = await api.getDefaultAddressApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetDefaultAddressApi:', { params, json })
  result(json)
}

/**
 * 获取省份列表
 */
const onGetProvinceApi = async function (params, result) {
  const json = await api.getProvinceApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetProvinceApi:', { params, json })
  result(json)
}

/**
 * 获取下级省市区列表
 */
const onGetProvinceChildApi = async function (params, result) {
  const json = await api.getProvinceChildApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetProvinceChildApi:', { params, json })
  result(json)
}

/**
 * 获取地址详情
 */
const onGetAddressDetailApi = async function (params, result) {
  const json = await api.getAddressDetailApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetAddressDetailApi:', { params, json })
  result(json)
}

/**
 * 获取物流费用
 */
const onGetLogisticsPriceApi = async function (params, result) {
  const json = await api.getLogisticsPriceApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetLogisticsPriceApi:', { params, json })
  result(json)
}

/**
 * 创建订单
 */
const onCreateOrderApi = async function (params, result) {
  const json = await api.createOrderApi({
    query: params,
    method: 'POST'
  })
  util.log('onCreateOrderApi:', { params, json })
  result(json)
}

/**
 * 获取jsapi
 */
const onGetJSAPI = async function (params, result) {
  const json = await api.getJSAPI({
    query: params,
    method: 'POST'
  })
  util.log('onGetJSAPI:', { params, json })
  result(json)
}

/**
 * 钱包支付
 */
const onPayBalanceApi = async function (params, result) {
  const json = await api.payBalanceApi({
    query: params,
    method: 'POST'
  })
  util.log('onPayBalanceApi:', { params, json })
  result(json)
}


/**
 * 获取订单列表
 */
const onGetOrderListApi = async function (params, result) {
  const json = await api.getOrderListApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetOrderListApi:', { params, json })
  result(json)
}

/**
 * 关闭订单
 */
const onOrderCloseApi = async function (params, result) {
  const json = await api.orderCloseApi({
    query: params,
    method: 'POST'
  })
  util.log('onOrderCloseApi:', { params, json })
  result(json)
}

/**
 * 统计订单
 */
const onOrderStatisticsApi = async function (params, result) {
  const json = await api.orderStatisticsApi({
    query: params,
    method: 'POST'
  })
  util.log('onOrderStatisticsApi:', { params, json })
  result(json)
}

/**
 * 订单详情
 */
const onGetOrderDetailApi = async function (params, result) {
  const json = await api.getOrderDetailApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetOrderDetailApi:', { params, json })
  result(json)
}

/**
 * 添加模板formId
 */
const onAddTempFormIdApi = async function (params, result) {
  const json = await api.addTempFormIdApi({
    query: params,
    method: 'POST'
  })
  util.log('onAddTempFormIdApi:', { params, json })
  result(json)
}

/**
 * 发送模板消息
 */
const onSendTempMsgApi = async function (params, result) {
  const json = await api.sendTempMsgApi({
    query: params,
    method: 'POST'
  })
  util.log('onSendTempMsgApi:', { params, json })
  result(json)
}

/**
 * 确认收货
 */
const onConfirmOrderApi = async function (params, result) {
  const json = await api.confirmOrderApi({
    query: params,
    method: 'POST'
  })
  util.log('onConfirmOrderApi:', { params, json })
  result(json)
}

/**
 * 提交评价
 */
const onCommitReputationApi = async function (params, result) {
  const json = await api.commitReputationApi({
    query: params,
    method: 'POST'
  })
  util.log('onCommitReputationApi:', { params, json })
  result(json)
}

/**
 * 读取抽奖详情
 */
const onGetLotteryInfoApi = async function (params, result) {
  const json = await api.getLotteryInfoApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetLotteryInfoApi:', { params, json })
  result(json)
}

/**
 * 参与抽奖
 */
const onJoinLotteryApi = async function (params, result) {
  const json = await api.joinLotteryApi({
    query: params,
    method: 'POST'
  })
  util.log('onJoinLotteryApi:', { params, json })
  result(json)
}

/**
 * 读取我参与的抽奖项目详情
 */
const onGetMyLotteryApi = async function (params, result) {
  const json = await api.getMyLotteryApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetMyLotteryApi:', { params, json })
  result(json)
}

/**
 * 获取参与抽奖记录
 */
const onGetLotteryLogsApi = async function (params, result) {
  const json = await api.getLotteryLogsApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetLotteryLogsApi:', { params, json })
  result(json)
}

/**
 * 获取文章详情
 */
const onGetArticleDetaiApi = async function (params, result) {
  const json = await api.getArticleDetaiApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetArticleDetaiApi:', { params, json })
  result(json)
}

/**
 * 获取知识交易详情
 */
const onGetVirtualInfoApi = async function (params, result) {
  const json = await api.getVirtualInfoApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetVirtualInfoApi:', { params, json })
  result(json)
}

/**
 * 购买知识交易
 */
const onBuyVirtualInfoApi = async function (params, result) {
  const json = await api.buyVirtualInfoApi({
    query: params,
    method: 'POST'
  })
  util.log('onBuyVirtualInfoApi:', { params, json })
  result(json)
}

/**
 * 获取收藏的商品
 */
const onGetFavListApi = async function (params, result) {
  const json = await api.getFavListApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetFavListApi:', { params, json })
  result(json)
}

/**
 * 获取小程序绑定手机号
 */
const onGetWXBindPhoneApi = async function (params, result) {
  const json = await api.getWXBindPhoneApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetWXBindPhoneApi:', { params, json })
  result(json)
}

/**
 * 申请成为分销商
 */
const onApplySaleDistributionApi = async function (params, result) {
  const json = await api.applySaleDistributionApi({
    query: params,
    method: 'POST'
  })
  util.log('onApplySaleDistributionApi:', { params, json })
  result(json)
}

/**
 * 小程序解密接口
 */
const onDecodeEncryptedDataApi = async function (params, result) {
  const json = await api.decodeEncryptedDataApi({
    query: params,
    method: 'POST'
  })
  util.log('onDecodeEncryptedDataApi:', { params, json })
  result(json)
}

/**
 * 获取充值规则接口
 */
const onGetRechargeRulesApi = async function (params, result) {
  const json = await api.getRechargeRulesApi({
    query: params,
    method: 'get'
  })
  util.log('onGetRechargeRulesApi:', { params, json })
  result(json)
}

/**
 * 佣金明细
 */
const onSaleDistributionDetailApi = async function (params, result) {
  const json = await api.saleDistributionDetailApi({
    query: params,
    method: 'POST'
  })
  util.log('onSaleDistributionDetailApi:', { params, json })
  result(json)
}

/**
 * 团队管理
 */
const onSaleDistributionMembersApi = async function (params, result) {
  const json = await api.saleDistributionMembersApi({
    query: params,
    method: 'POST'
  })
  util.log('onSaleDistributionMembersApi:', { params, json })
  result(json)
}

/**
 * 提现记录
 */
const onWithDrawLogsApi = async function (params, result) {
  const json = await api.withDrawLogsApi({
    query: params,
    method: 'POST'
  })
  util.log('onWithDrawLogsApi:', { params, json })
  result(json)
}

/**
 * 资金记录
 */
const onCashLogsApi = async function (params, result) {
  const json = await api.cashLogsApi({
    query: params,
    method: 'POST'
  })
  util.log('onCashLogsApi:', { params, json })
  result(json)
}

/**
 * 申请提现
 */
const onWidthDrawApplyApi = async function (params, result) {
  const json = await api.widthDrawApplyApi({
    query: params,
    method: 'POST'
  })
  util.log('onWidthDrawApplyApi:', { params, json })
  result(json)
}

/**
 * 申请退款信息
 */
const onRefundApplyInfoApi = async function (params, result) {
  const json = await api.refundApplyInfoApi({
    query: params,
    method: 'GET'
  })
  util.log('onRefundApplyInfoApi:', { params, json })
  result(json)
}

/**
 * 申请退款信息
 */
const onCancelRefundApi = async function (params, result) {
  const json = await api.cancelRefundApi({
    query: params,
    method: 'POST'
  })
  util.log('onCancelRefundApi:', { params, json })
  result(json)
}

/**
 * 申请退款
 */
const onRefundApplyApi = async function (params, result) {
  const json = await api.refundApplyApi({
    query: params,
    method: 'POST'
  })
  util.log('onRefundApplyApi:', { params, json })
  result(json)
}

/**
 * 生成小程序码
 */
const onGetQCodeApi = async function (params, result) {
  const json = await api.getQCodeApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetQCodeApi:', { params, json })
  result(json)
}

/**
 * 获取json数据
 */
const onGetJsonDataApi = async function (params, result) {
  const json = await api.getJsonDataApi({
    query: params,
    method: 'POST'
  })
  util.log('onGetJsonDataApi:', { params, json })
  result(json)
}

/**
 * 添加留言
 */
const onAddCommentApi = async function (params, result) {
  const json = await api.addCommentApi({
    query: params,
    method: 'POST'
  })
  util.log('onAddCommentApi:', { params, json })
  result(json)
}

/**
 * 获取商品限购设置
 */
const onGetGoodsLimitApi = async function (params, result) {
  const json = await api.getGoodsLimitApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetGoodsLimitApi:', { params, json })
  result(json)
}

/**
 * 获取在线买单优惠信息
 */
const onGetPayBillRuleApi = async function (params, result) {
  const json = await api.getPayBillRuleApi({
    query: params,
    method: 'GET'
  })
  util.log('onGetPayBillRuleApi:', { params, json })
  result(json)
}

/**
 * 在线买单
 */
const onPayBillApi = async function (params, result) {
  const json = await api.payBillApi({
    query: params,
    method: 'POST'
  })
  util.log('payBillApi:', { params, json })
  result(json)
}



module.exports = {
  onGetJSAPI,
  onPayBillApi,
  onGetPayBillRuleApi,
  onGetGoodsLimitApi,
  onAddCommentApi,
  onIsCheckTokenApi,
  onGetJsonDataApi,
  onGetQCodeApi,
  onCancelRefundApi,
  onWidthDrawApplyApi,
  onRefundApplyApi,
  onRefundApplyInfoApi,
  onCashLogsApi,
  onWithDrawLogsApi,
  onSaleDistributionDetailApi,
  onSaleDistributionMembersApi,
  onGetRechargeRulesApi,
  onGetFavListApi,
  onDecodeEncryptedDataApi,
  onApplySaleDistributionApi,
  onGetWXBindPhoneApi,
  onGetVirtualInfoApi,
  onBuyVirtualInfoApi,
  onGetArticleDetaiApi,
  onGetLotteryLogsApi,
  onJoinLotteryApi,
  onGetMyLotteryApi,
  onGetLotteryInfoApi,
  onSendTempMsgApi,
  onAddTempFormIdApi,
  onCommitReputationApi,
  onConfirmOrderApi,
  onGetOrderDetailApi,
  onOrderStatisticsApi,
  onOrderCloseApi,
  onGetOrderListApi,
  onPayBalanceApi,
  onCreateOrderApi,
  onGetLogisticsPriceApi,
  onGetAddressDetailApi,
  onGetProvinceChildApi,
  onGetProvinceApi,
  onGetDefaultAddressApi,
  onDelAddressApi,
  onUpdateAddressApi,
  onAddAddressApi,
  onGetAddressListApi,
  onWxLoginApi,
  onRegisterApi,
  onGetBannerList,
  onGetCategoryList,
  onGetSysParamsApi,
  onGetGoodsListApi,
  onGetKanJiaListApi,
  onKanJiaDetailApi,
  onDelKanJiaApi,
  onHelpKanJiaApi,
  onHelpKanJiaInfoApi,
  onJoinKanJiaApi,
  onGetMyKanJiaApi,
  onGetGoodsKanJiaSetApi,
  onGetGoodsDetailApi,
  onGetGoodsAttrPriceApi,
  onGetShopCouponsApi,
  onGetMyCouponsApi,
  onFetchCouponsApi,
  onScoreSignApi,
  onScoreSignLogsApi,
  onTodaySignedApi,
  onSignRulesApi,
  onUserAmountApi,
  onUserDetailApi,
  onIsCheckFavGoodsApi,
  onAddFavGoodsApi,
  onDelFavGoodsApi,
  onGetPingTuanDetailApi,
  onGetGoodsPingTuanApi,
  onOpenPingTuanApi,
  onGetMyPingTuanApi,
  onGetGoodsPingTuanSetApi,
  onGetGoodsReputationApi
}
