import Vue from 'vue';
import App from './App.vue';
import {Button, Field, Cell, CellGroup, Toast, Notify, Tag, Divider, Loading} from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Notify);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(Loading);

Vue.config.productionTip = false
Vue.directive('title', {
    inserted: function (app) {
        document.title = app.dataset.title
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')
