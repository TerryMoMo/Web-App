import request from '../../utils/request'

// 首页数据
export function RecycleBalance(data) {
    return request({
    //   url: 'http://api.xingyun52.net/',
      method: 'post',
      data
    })
}