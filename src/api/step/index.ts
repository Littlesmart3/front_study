import { MAIN_HOST } from '@/constants';
import { METHOD_MAP } from '@/constants/http';

// 接口返回格式
interface responseType {
  data?: any;
}
interface paramsType {
  header?: any;
  body?: any;
  url?: string;
  showError?: boolean;
}

const createHttp = (method: any) => {
  // 请求方法不在METHOD_MAP里面
  if (!METHOD_MAP.find(m => m === method)) throw new Error('请传递正确http-methods');
  return (params: paramsType) => {
    const { header, body, url = '', showError = true } = params || {};
    const token = uni.getStorageSync('token');
    const headers = token ? { Authorization: token } : {};
    Object.assign(headers, header);
    return new Promise((resolve, reject) => {
      uni.request({
        url: url.startsWith('/') ? `${MAIN_HOST}${url}` : url,
        data: body || {},
        header: headers,
        method: method,
        success(response: responseType) {
          if (response.data.code !== 200) {
            if (response.data.code === 401) {
              uni.removeStorageSync('userInfor');
              uni.removeStorageSync('token');
              uni.navigateTo({ url: '/pages/step/first' });
            }
            if (showError) {
              uni.showToast({
                icon: 'error',
                title: response.data?.errmsg || response.data?.msg || '请求异常'
              });
            }
            reject(response);
          } else {
            resolve(response);
          }
        },
        fail(error: any) {
          reject(error);
          // 获取错误信息
          if (showError) uni.showToast({ title: '请求错误' });
        }
      });
    });
  };
};

export const uploadFile = (params: any) => {
  const { formData, name = '', url = '', filePath = true, showError = true } = params || {};
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url,
      filePath,
      name,
      formData,
      success(res) {
        resolve(res);
      },
      fail(response: any) {
        reject(response);
        if (showError) {
          uni.showToast({
            icon: 'error',
            title: response.data?.errmsg || response.data?.msg || '请求异常'
          });
        }
      }
    });
  });
};

export const get = createHttp('GET');
export const post = createHttp('POST');
export const put = createHttp('PUT');
export const remove = createHttp('DELETE');
