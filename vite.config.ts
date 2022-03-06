import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from 'path';

const env = process.env
const isProduction = env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  server: {
    open: true,
    proxy: {
      '/api/v2': {
        changeOrigin: true,
        target: 'https://www.baoxiaohe.fun', // 区分环境变量？
        cookieDomainRewrite: {
          'dev1.baoxiaohe.fun': !isProduction ? 'localhost' : 'dev1.baoxiaohe.fun',
          'baoxiaohe.fun': !isProduction ? 'localhost' : 'baoxiaohe.fun',
          'baoxiaohe.com': !isProduction ? 'localhost' : 'baoxiaohe.com'
        },
        xfwd: false,
        ws: false
      }
    }
  }
});
