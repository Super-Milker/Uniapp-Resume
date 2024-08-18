import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import VueAMap from 'vue-amap';

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  //申请地址 https://lbs.amap.com/ 选择web端jsAPI
  key: '285749c56953268322b0cb777ac67bc0', 
  // 插件集合，用到什么插件就使用什么插件
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4', // 高德sdk版本，最新的sdk已经出到了2.0
  //官网解释：JSAPI 2.0 提供的开发接口与 1.4 版本达到 99%的兼容度，但是为了保证插件的稳定性我们还是选择1.4.4。
}) 

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App
})
app.$mount()
