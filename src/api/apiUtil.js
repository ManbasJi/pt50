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





module.exports = {

}
