let serviceUrl = '';
let preview3DUrl = '';

switch (process.env.NODE_ENV) {
  case 'development':
    serviceUrl = 'https://dev1.baoxiaohe.fun';
    preview3DUrl = 'https://aidesign.baoxiaohe.fun/aidesign/preview3d'; // http://localhost:8080/preview3d
    break;
  case 'production':
    serviceUrl = 'https://m.baoxiaohe.com';
    preview3DUrl = 'https://aidesign.baoxiaohe.cn/aidesign/preview3d';
    break;
}

export const previewUrl = preview3DUrl;

export const MAIN_HOST = serviceUrl; // 默认不加 /api/v2

// 用户条款
export const secret = 'https://help.baoxiaohe.com/archives/313/';
// 隐私协议
export const service = 'https://help.baoxiaohe.com/archives/310/';
