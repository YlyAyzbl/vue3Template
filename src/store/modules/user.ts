import axios from '@/axios'; // 确保导入了 axios 以发起 HTTP 请求
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    // state
    state: () => ({
        token: '',
        userInfo: {
            name: '',
            age: 0,
        }, // 添加一个属性来存储用户信息
        // 其他用户信息...
    }),

    // getters
    getters: {
        // 添加获取token的getter
        getToken: (state) => state.token,
        getUserInfo: (state) => state.userInfo, // 获取用户信息的 getter
        // 可以添加需要的其他getters
    },

    // actions
    actions: {
        async login(data: any) {
            try {
                const response = await axios.post('/login', data); // 根据需要调整端点
                this.token = response.data.token; // 假设响应中包含一个 token
                this.fetchUserInfo(); // 登录成功后获取用户信息
            } catch (error) {
                console.error('登录错误:', error);
                throw error;
            }
        },

        async register(data: any) {
            try {
                const response = await axios.post('/register', data); // 根据需要调整端点
                this.token = response.data.token; // 假设注册后响应中包含一个 token
                this.fetchUserInfo(); // 注册成功后获取用户信息
            } catch (error) {
                console.error('注册错误:', error);
                throw error;
            }
        },

        async fetchUserInfo() {
            try {
                const response = await axios.get('/userinfo', {
                    headers: { 'X-Token': this.token } // 确保请求中包含了 token
                });
                this.userInfo = response.data; // 假设响应中包含用户信息
            } catch (error) {
                console.error('获取用户信息错误:', error);
                throw error;
            }
        },
        resetToken() {
            this.token = '';
            // 清除其他用户信息...
            // 重置令牌后的操作，例如重新加载页面
            location.reload();
        }
    }
});
