import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('title', {
  inserted: function (app) {
    document.title = app.dataset.title
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
