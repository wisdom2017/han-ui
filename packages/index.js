import hanButton from './components/han-button.vue';
import './components/index.css';

const components=[hanButton]

const install =function(Vue){
    console.log('has installed！')
    components.forEach((v)=>{
        Vue.component(v.name,v);// 全局注册组件
    })
}

if(typeof window!=='undefined' && window.Vue){
    install(window.Vue)
}

export default { install }