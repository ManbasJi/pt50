import {
  wxRequest
} from '@/utils/wxRequest'
import wepy from 'wepy'

const env = "-dev" //-dev 或者 -online
const hostapi = "https://api.it120.cc/zhouyuansu"
const commonapi = 'https://api.it120.cc'
// 检查token是否过期
const isCheckTokenApi = (params) => wxRequest(params, hostapi + '/user/check-token')
// 登录
const wxLoginApi = (params) => wxRequest(params, hostapi + '/user/wxapp/login')
// 注册
const registerApi = (params) => wxRequest(params, hostapi + '/user/wxapp/register/complex')
// 获取banner
const bannerApi = (params) => wxRequest(params, hostapi + '/banner/list')
// 获取商品分裂
const categoryApi = (params) => wxRequest(params, hostapi + '/shop/goods/category/all')
// 获取系统参数
const sysParamsApi = (params) => wxRequest(params, hostapi + '/config/values')
// 获取商品列表
const getGoodsListApi = (params) => wxRequest(params, hostapi + '/shop/goods/list')
// 获取可砍价的商品列表
const getKanJiaListApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/list')
// 获取商品详情
const getGoodsDetailApi = (params) => wxRequest(params, hostapi + '/shop/goods/detail/')
// 获取商品限购设置
const getGoodsLimitApi = (params) => wxRequest(params, hostapi + '/shop/goods/limitation')
// 检查商品是否收藏 
const isCheckFavGoodsApi = (params) => wxRequest(params, hostapi + '/shop/goods/fav/check')
// 添加商品收藏
const addFavGoodsApi = (params) => wxRequest(params, hostapi + '/shop/goods/fav/add')
// 删除商品收藏
const delFavGoodsApi = (params) => wxRequest(params, hostapi + '/shop/goods/fav/delete')
// 获取商品规格价格
const getGoodsAttrPriceApi = (params) => wxRequest(params, hostapi + '/shop/goods/price/')
// 获取商品评价
const getGoodsReputationApi = (params) => wxRequest(params, hostapi + '/shop/goods/reputation')
// 获取拼团详情
const getPingTuanDetailApi = (params) => wxRequest(params, hostapi + '/shop/goods/pingtuan/joiner')
// 获取所有进行中的团购
const getGoodsPingTuanApi = (params) => wxRequest(params, hostapi + '/shop/goods/pingtuan/list/v2')
// 获取我的拼团记录
const getMyPingTuanApi = (params) => wxRequest(params, hostapi + '/shop/goods/pingtuan/my-join-list')
// 立即开团
const openPingTuanApi = (params) => wxRequest(params, hostapi + '/shop/goods/pingtuan/open')
// 获取某商品拼团设置
const getGoodsPingTuanSetApi = (params) => wxRequest(params, hostapi + '/shop/goods/pingtuan/sets')
// 获取砍价设置
const getGoodsKanJiaSetApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/set')
// 获取我的砍价
const getMyKanJiaApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/my')
// 加入砍价
const joinKanJiaApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/join')
// 砍价详情
const kanJiaDetailApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/info')
// 帮人砍一刀
const helpKanJiaApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/help')
// 帮忙砍价信息
const helpKanJiaInfoApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/myHelp')
// 删除砍价
const delKanJiaApi = (params) => wxRequest(params, hostapi + '/shop/goods/kanjia/clear')
// 获取可领取优惠券列表
const getShopCouponsApi = (params) => wxRequest(params, hostapi + '/discounts/coupons/')
// 获取我的优惠券
const getMyCouponsApi = (params) => wxRequest(params, hostapi + '/discounts/my')
// 领取优惠券
const fetchCouponsApi = (params) => wxRequest(params, hostapi + '/discounts/fetch')
// 签到
const scoreSignApi = (params) => wxRequest(params, hostapi + '/score/sign')
// 签到记录
const scoreSignLogsApi = (params) => wxRequest(params, hostapi + '/score/sign/logs')
// 今日签到记录
const todaySignedApi = (params) => wxRequest(params, hostapi + '/score/today-signed')
// 签到积分规则
const signRulesApi = (params) => wxRequest(params, hostapi + '/score/sign/rules')
// 查看用户资产
const userAmountApi = (params) => wxRequest(params, hostapi + '/user/amount')
// 获取用户信息详情
const userDetailApi = (params) => wxRequest(params, hostapi + '/user/detail')
// 获取用户地址
const getAddressListApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/list')
// 添加用户地址
const addAddressApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/add')
// 更新用户地址
const updateAddressApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/update')
// 删除用户地址
const delAddressApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/delete')
// 获取默认收货地址
const getDefaultAddressApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/default/v2')
// 获取省份列表
const getProvinceApi = (params) => wxRequest(params, commonapi + '/common/region/v2/province')
// 获取下级省市区数据
const getProvinceChildApi = (params) => wxRequest(params, commonapi + '/common/region/v2/child')
// 获取地址详情
const getAddressDetailApi = (params) => wxRequest(params, hostapi + '/user/shipping-address/detail/v2')
// 获取物流费用
const getLogisticsPriceApi = (params) => wxRequest(params, hostapi + '/shop/goods/price/freight')
// 创建订单
const createOrderApi = (params) => wxRequest(params, hostapi + '/order/create')
// 获取订单列表
const getOrderListApi = (params) => wxRequest(params, hostapi + '/order/list')
// 订单详情
const getOrderDetailApi = (params) => wxRequest(params, hostapi + '/order/detail')
// 订单统计
const orderStatisticsApi = (params) => wxRequest(params, hostapi + '/order/statistics')
// 关闭订单
const orderCloseApi = (params) => wxRequest(params, hostapi + '/order/close')
// 获取jsapi
const getJSAPI = (params) => wxRequest(params, hostapi + '/pay/wx/wxapp')
// balance 支付
const payBalanceApi = (params) => wxRequest(params, hostapi + '/order/pay')
// 添加模板formID
const addTempFormIdApi = (params) => wxRequest(params, hostapi + '/template-msg/wxa/formId')
// 发送模板消息
const sendTempMsgApi = (params) => wxRequest(params, hostapi + '/template-msg/put')
// 确认收货
const confirmOrderApi = (params) => wxRequest(params, hostapi + '/order/delivery')
// 提交评价
const commitReputationApi = (params) => wxRequest(params, hostapi + '/order/reputation')
// 读取抽奖项目详情
const getLotteryInfoApi = (params) => wxRequest(params, hostapi + '/luckyInfo/info')
// 参与抽奖
const joinLotteryApi = (params) => wxRequest(params, hostapi + '/luckyInfo/join')
// 读取我的抽奖项目详情
const getMyLotteryApi = (params) => wxRequest(params, hostapi + '/luckyInfo/join/my')
// 参与抽奖记录
const getLotteryLogsApi = (params) => wxRequest(params, hostapi + '/luckyInfo/join/logs')
// 获取文章详情
const getArticleDetaiApi = (params) => wxRequest(params, hostapi + '/cms/news/detail')
// 知识交易详情
const getVirtualInfoApi = (params) => wxRequest(params, hostapi + '/virtualTrader/info')
// 购买知识交易
const buyVirtualInfoApi = (params) => wxRequest(params, hostapi + '/virtualTrader/buy')
// 收藏商品列表
const getFavListApi = (params) => wxRequest(params, hostapi + '/shop/goods/fav/list')
// 获取小程序绑定手机号
const getWXBindPhoneApi = (params) => wxRequest(params, hostapi + '/user/wxapp/bindMobile')
// 申请成为分销商
const applySaleDistributionApi = (params) => wxRequest(params, hostapi + '/saleDistribution/apply')
// 小程序解密接口
const decodeEncryptedDataApi = (params) => wxRequest(params, hostapi + '/user/wxapp/decode/encryptedData')
// 充值规则
const getRechargeRulesApi = (params) => wxRequest(params, hostapi + '/user/recharge/send/rule')
// 佣金明细
const saleDistributionDetailApi = (params) => wxRequest(params, hostapi + '/saleDistribution/commision/log')
// 分销团队
const saleDistributionMembersApi = (params) => wxRequest(params, hostapi + '/saleDistribution/members')
// 提现记录
const withDrawLogsApi = (params) => wxRequest(params, hostapi + '/user/withDraw/list')
// 资金明细
const cashLogsApi = (params) => wxRequest(params, hostapi + '/user/cashLog')
// 提现申请
const widthDrawApplyApi = (params) => wxRequest(params, hostapi + '/user/withDraw/apply')
// 申请退款信息
const refundApplyInfoApi = (params) => wxRequest(params, hostapi + '/order/refundApply/info')
// 取消退款
const cancelRefundApi = (params) => wxRequest(params, hostapi + '/order/refundApply/cancel')
// 申请退款
const refundApplyApi = (params) => wxRequest(params, hostapi + '/order/refundApply/apply')
// 获取小程序码
const getQCodeApi = (params) => wxRequest(params, hostapi + '/qrcode/wxa/unlimit')
// 获取json数据
const getJsonDataApi = (params) => wxRequest(params, hostapi + '/json/list')
//添加留言
const addCommentApi = (params) => wxRequest(params, hostapi + '/comment/add')
// 在线买单优惠信息
const getPayBillRuleApi = (params) => wxRequest(params, hostapi + '/payBill/discounts')
// 在线买单
const payBillApi = (params) => wxRequest(params, hostapi + '/payBill/pay')
// 上传本地图片到服务器
const uploadFile = (params) => {
  const uploadUrl = hostapi + '/dfs/upload/file'
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadUrl,
      filePath: params.tempFilePath,
      name: 'upfile',
      formData: {
        'token': params.token
      },
      success (res) {
        resolve(JSON.parse(res.data))
      },
      fail (error) {
        reject(error)
      },
      complete (aaa) {
        // 加载完成
      }
    })
  })
}
export default {
  env,
  payBillApi,
  getPayBillRuleApi,
  getGoodsLimitApi,
  addCommentApi,
  getJsonDataApi,
  isCheckTokenApi,
  uploadFile,
  getQCodeApi,
  getJSAPI,
  cancelRefundApi,
  widthDrawApplyApi,
  refundApplyInfoApi,
  refundApplyApi,
  withDrawLogsApi,
  cashLogsApi,
  saleDistributionMembersApi,
  saleDistributionDetailApi,
  getFavListApi,
  getRechargeRulesApi,
  decodeEncryptedDataApi,
  applySaleDistributionApi,
  getWXBindPhoneApi,
  buyVirtualInfoApi,
  getVirtualInfoApi,
  getArticleDetaiApi,
  getLotteryLogsApi,
  getMyLotteryApi,
  joinLotteryApi,
  getLotteryInfoApi,
  sendTempMsgApi,
  addTempFormIdApi,
  commitReputationApi,
  confirmOrderApi,
  getOrderDetailApi,
  orderCloseApi,
  orderStatisticsApi,
  payBalanceApi,
  createOrderApi,
  getAddressDetailApi,
  getAddressListApi,
  addAddressApi,
  updateAddressApi,
  delAddressApi,
  getDefaultAddressApi,
  getProvinceApi,
  getProvinceChildApi,
  wxLoginApi,
  registerApi,
  bannerApi,
  categoryApi,
  sysParamsApi,
  getGoodsListApi,
  getKanJiaListApi,
  kanJiaDetailApi,
  delKanJiaApi,
  getGoodsKanJiaSetApi,
  getMyKanJiaApi,
  helpKanJiaApi,
  helpKanJiaInfoApi,
  joinKanJiaApi,
  getGoodsDetailApi,
  getGoodsAttrPriceApi,
  getShopCouponsApi,
  getMyCouponsApi,
  fetchCouponsApi,
  scoreSignApi,
  scoreSignLogsApi,
  todaySignedApi,
  signRulesApi,
  userAmountApi,
  userDetailApi,
  isCheckFavGoodsApi,
  addFavGoodsApi,
  delFavGoodsApi,
  getGoodsPingTuanApi,
  getMyPingTuanApi,
  openPingTuanApi,
  getGoodsPingTuanSetApi,
  getPingTuanDetailApi,
  getGoodsReputationApi,
  getLogisticsPriceApi,
  getOrderListApi
}
