import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import '../src/assets/css/common.scss';


const app = createApp(App)
app.use(Antd)
app.use(createPinia())
app.use(router)
app.config.errorHandler = (err) => {

}
app.mount('#app')
