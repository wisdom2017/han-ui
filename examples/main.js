import Vue from 'vue'
import App from './App.vue'
//import hanButton from './components/han-button.vue';
import hanUI from '../packages';

Vue.use(hanUI);


Vue.config.productionTip = false

//Vue.component(hanButton.name,hanButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
