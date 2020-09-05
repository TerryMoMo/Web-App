import axios from 'axios'
export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000,
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
  }
});

service.interceptors.request.use(
  config => {
    return Object.assign(config, {
      data: config.data,
      url: 'http://api.xingyun52.net/' // 由于每次url都是统一,所以集中写,不然可以在数据请求位置编写
    }
    )
  },
  error => {
    Promise.reject(error);
  }
)

service.interceptors.response.use( // 拦截器
  response => {
    const { currentStatus, errorCode } = response.data // 根据接口返回的不同去决定
    const responseCode = errorCode || (typeof currentStatus !== 'undefined' ? `${currentStatus}` : false) || response.status
    switch (Number(responseCode)) {
      case 0:
      case 200:
        return response.data;
      case 401:
      case 402: // 登陆失败什么的
        return Promise.reject(response.data);
      case 500:
     
        return Promise.reject(response.data);
      default:
        return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service
