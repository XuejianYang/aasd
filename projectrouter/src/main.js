import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 Vue.config.productionTip=false

// createApp(App).mount('#app')
new vue({
    el:'#app',
    router ,
    render:h=>h(App)
})