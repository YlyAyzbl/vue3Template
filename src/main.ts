import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入elementUI
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//注入

app.use(ElementUi)
app.use(store)
app.use(router).mount('#app')