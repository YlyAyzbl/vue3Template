import axios, { AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'; // 从 element-ui 导入 MessageBox 和 Message 组件
// import { getToken } from '@/utils/auth'; // 从 auth 工具中导入 getToken 函数

// 创建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // url = 基础 url + 请求 url
    // withCredentials: true, // 当进行跨域请求时发送 cookies
    timeout: 5000, // 请求超时时间
});


// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        const res = response.data;

        // 如果自定义代码不是 200，就判断为错误。
        if (res.code !== 200) {
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000,
            });

            // 50008: 非法的 token; 50012: 其他客户端已登录; 50014: Token 过期;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // 重新登录
                ElMessageBox.confirm('你已被登出，你可以取消以停留在此页面，或重新登录', '确认登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {

                });
            }
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    },
    (error: any) => {
        console.error('err' + error); // 用于调试
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    },
);

export default service;
