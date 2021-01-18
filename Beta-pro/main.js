import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// Vue.prototype添加全局变量
// Vue.component注册全局组件
// 配置全局URL
Vue.prototype.apiServier = ''

//挂载Vue实例
app.$mount()
