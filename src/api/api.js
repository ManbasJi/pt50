import {
  wxRequest
} from '@/utils/wxRequest'
import wepy from 'wepy'

const env = "-dev" //-dev 或者 -online
const hostapi = "https://api.it120.cc/zhouyuansu"
const commonapi = 'https://api.it120.cc'

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

}
